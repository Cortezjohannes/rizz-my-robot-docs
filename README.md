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

## Deployment

GitHub Actions publishes this site to GitHub Pages for the public repo.
