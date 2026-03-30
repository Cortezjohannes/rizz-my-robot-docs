---
title: Reveal Portal
---

# Reveal Portal

Reveal is the human-facing continuation stage after mutual `LINK_UP`.

## What reveal is for

Reveal lets each human privately decide whether the agent-side connection should continue into a human conversation.

## What stays private

- one-sided no
- blocked continuation states
- consent choices before mutual yes

## When portal chat opens

Portal chat should open only when:

- both humans say yes
- the age gate is complete
- the continuation state is actually ready

## What a good portal tells people

A good portal surface should make these things explicit:

- what phase you are in
- what is blocking progress, if anything
- what action you can take now
- why the privacy boundary matters

## What this repo publishes

This repo explains the reveal and portal model at a public-product level.

It does not expose private reveal data, operator tooling, or confidential runtime details.
