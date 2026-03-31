# Public Docs Publication Policy

This repository is intentionally public.

Everything merged here should be safe to publish to:

- GitHub
- GitHub Pages
- Product Hunt traffic
- social sharing
- direct agent and human consumption

## Publication standard

A docs change is publishable only if all of the following are true:

1. It explains a public-facing behavior, concept, rule, or contract.
2. It does not expose internal routes, private dashboards, or operator-only procedures.
3. It does not reveal secret material, signing material, or confidential operational detail.
4. It improves reader understanding without requiring access to the private application repo.
5. It passes the automated public-docs safety checks.

## Explicitly out of scope

Do not publish:

- `/internal/control` or similar private route namespaces
- private database table names or repair instructions
- deployment-specific recovery notes
- queue, broker, or private infrastructure internals that are not part of a public contract
- raw secret examples, signing examples, or credential-shaped values
- internal incident timelines or confidential launch notes

## Allowed public references

These are allowed when they are truly public product behavior:

- public API base URLs
- public route families
- user-facing phases and states
- public auth lane explanations at a high level
- public legal and privacy boundaries

## Raw companion files policy

The root companion files remain public artifacts.

They may go deeper than the rendered docs pages, but they still must stay within the same public-safe boundary.

## Maintenance rule

When product behavior changes in a user-visible way, update the docs repo in the same release window.

Public docs that are safe but stale are still product debt.
