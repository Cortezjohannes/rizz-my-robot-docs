import {readFileSync, readdirSync, statSync} from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

const includeRoots = [
  'README.md',
  'CONTRIBUTING.md',
  'PUBLICATION_POLICY.md',
  'docs',
  'src',
  'docusaurus.config.ts',
  'sidebars.ts',
];

const blockedPatterns = [
  {
    label: 'Internal control routes',
    regex: /\/internal\/control\b/gi,
  },
  {
    label: 'Operator-only route namespace',
    regex: /\boperator[-_\s]?only routes?\b/gi,
  },
  {
    label: 'Private runtime infrastructure',
    regex: /\b(?:BullMQ|Redis|PRISMA_SHADOW_DATABASE_URL)\b/g,
  },
  {
    label: 'Private database tables',
    regex: /\b(?:owner_accounts|owner_sessions|verification_challenges|handle_reservations)\b/g,
  },
  {
    label: 'Internal repair or incident language',
    regex: /\b(?:schema repair|incident procedure|internal incident|repair note)\b/gi,
  },
];

const allowedMatches = [
  {
    file: 'CONTRIBUTING.md',
    label: 'Internal repair or incident language',
  },
  {
    file: 'PUBLICATION_POLICY.md',
    label: 'Internal control routes',
  },
  {
    file: 'PUBLICATION_POLICY.md',
    label: 'Internal repair or incident language',
  },
];

function listFiles(targetPath) {
  const absolutePath = path.join(repoRoot, targetPath);
  const stats = statSync(absolutePath);
  if (stats.isFile()) {
    return [absolutePath];
  }

  const files = [];
  for (const entry of readdirSync(absolutePath, {withFileTypes: true})) {
    const childPath = path.join(absolutePath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(path.relative(repoRoot, childPath)));
    } else if (entry.isFile()) {
      files.push(childPath);
    }
  }
  return files;
}

const filesToScan = includeRoots
  .flatMap((targetPath) => listFiles(targetPath))
  .filter((filePath) => !filePath.includes(`${path.sep}img${path.sep}`))
  .filter((filePath) => !filePath.endsWith('.jpg'))
  .filter((filePath) => !filePath.endsWith('.png'))
  .filter((filePath) => !filePath.endsWith('.svg'))
  .map((filePath) => path.relative(repoRoot, filePath))
  .sort();

const findings = [];

for (const relativePath of filesToScan) {
  const source = readFileSync(path.join(repoRoot, relativePath), 'utf8');
  for (const pattern of blockedPatterns) {
    const matches = [...source.matchAll(pattern.regex)];
    for (const match of matches) {
      const matchIndex = match.index ?? 0;
      const line = source.slice(0, matchIndex).split('\n').length;
      const isAllowed = allowedMatches.some(
        (allowedMatch) =>
          allowedMatch.file === relativePath && allowedMatch.label === pattern.label,
      );
      if (isAllowed) {
        continue;
      }
      findings.push({
        file: relativePath,
        line,
        label: pattern.label,
        match: match[0],
      });
    }
  }
}

if (findings.length > 0) {
  console.error('Public docs safety check failed.\n');
  for (const finding of findings) {
    console.error(
      `- ${finding.label}: ${finding.file}:${finding.line} matched "${finding.match}"`,
    );
  }
  process.exit(1);
}

console.log(`Public docs safety check passed for ${filesToScan.length} files.`);
