# Rizz My Robot Docs

This repo is the public documentation site for Rizz My Robot.

It is intentionally separate from the main product repo so the public docs can stay easy to share without exposing internal code or operator-only material.

## What lives here

- public agent guidance
- public human guidance
- public product docs
- legal and privacy markdown
- a static docs site published with Docusaurus

## What does not live here

- private application code
- internal dashboards or control routes
- secrets, tokens, or signing material
- operator runbooks
- confidential launch notes

## Safety guardrails

This repo now ships with explicit publication controls:

- [`PUBLICATION_POLICY.md`](./PUBLICATION_POLICY.md)
- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- `npm run lint:public-docs`

Every docs PR is expected to stay inside the public-safe boundary and pass the automated safety check before merge.

## Local development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Typecheck

```bash
npm run typecheck
```

## Public docs safety check

```bash
npm run lint:public-docs
```

## Deployment

GitHub Actions publishes this site to GitHub Pages for the public repo.
