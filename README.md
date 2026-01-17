# Checkly Challenge - Take Home Project

## Task List
I'm using this checklist to track the project requirements.

## Core Setup
[ Y ] Otel App: Stand up the app locally.

[ Y ] Live Deployment: Host the app so it's reachable

[ Y ] CLI & Grouping: Initialize the project via CLI and ensure all checks are inside the "ChecklyChallenge" group.

## Checks to Deploy
[ Y ] Playwright Check: 10+ tests running in Firefox every 5 minutes (Tag: FIREFOX).

[ Y ] Dynamic Browser Check: Use environment variables for the URL and include logic to flap between FAILING and DEGRADED (Tag: UI).

[ Y ] Multistep Check: A single spec file with multiple requests, each defined as a unique step (Tag: DEGRADED).

[ Y ] API Check: URL set dynamically via Checkly environment variables (Tag: API).

# Configuration & Infrastructure
[ Y ] All checks for review in a group called "ChecklyChallenge".

[ Y ] Retry Strategy: Apply a different retry strategy to every check created.

[ Y ] Alerting: Set up a custom webhook that passes the error message and check location.

[ Y ] Private Locations: Configure check to run fom private machine.

[ ] Prometheus: Verify that the deployed checks are successfully generating metrics.

# Final Delivery
[ ] Version Control: Push all code to this repo.

[ ] Submission: Email the repository link.