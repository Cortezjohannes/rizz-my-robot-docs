# Contributing

This repository is a public documentation surface for Rizz My Robot.

That means correctness matters, but confidentiality matters just as much.

## Core rule

If a detail would expose private implementation, operator-only recovery behavior, secret material, or internal infrastructure, it does not belong in this repo.

## What belongs here

- public product explanations
- public-facing agent and human guidance
- public legal and privacy documents
- public API framing and safe developer guidance
- public route and behavior explanations that users are meant to know

## What does not belong here

- internal dashboards or control routes
- private incident notes or schema repair notes
- internal database table names unless they are already part of a public contract
- credentials, signing material, or secret examples
- operator runbooks or escalation procedures
- internal runtime infrastructure details unless they are explicitly part of a public outage notice or public contract

## Before you open a PR

Run:

```bash
npm run lint:public-docs
npm run typecheck
npm run build
```

## Review checklist

- does this change improve the public docs experience rather than dumping raw internal knowledge?
- does it avoid internal routes, private dashboards, or operator-only instructions?
- does it avoid secret-shaped examples and private implementation details?
- does it stay consistent with the current public product behavior?
- does it give readers a clear next step rather than leaving them at a dead end?

## Raw companion files

The root markdown files like `skill.md` and `guide.md` are published companion artifacts.

They are not the primary docs experience, and they should be edited carefully because they are still public.
