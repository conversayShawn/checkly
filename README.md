# Checkly Challenge - Take Home Project

## Task List
I'm using this checklist to track the project requirements.

## Core Setup
[ Y ] Otel App: Stand up the app locally.

[ Y ] Live Deployment: Host the app so it's reachable

[ Y ] CLI & Grouping: Initialize the project via CLI and ensure all checks are inside the "ChecklyChallenge" group.

## Checks to Deploy
[ ] Playwright Check: 10+ tests running in Firefox every 5 minutes (Tag: FIREFOX).

[ ] Dynamic Browser Check: Use environment variables for the URL and include logic to flap between FAILING and DEGRADED (Tag: UI).

[ ] Multistep Check: A single spec file with multiple requests, each defined as a unique step (Tag: DEGRADED).

[ ] API Check: URL set dynamically via Checkly environment variables (Tag: API).

# Configuration & Infrastructure
[ ] Retry Strategy: Apply a different retry strategy to every check created.

[ ] Alerting: Set up a custom webhook that passes the error message and check location.

[ ] Private Locations: Configure local agents to run all the checks listed above from my machine.

[ ] Prometheus: Verify that the deployed checks are successfully generating metrics.

# Final Delivery
[ ] Version Control: Push all code to this repo.

[ ] Submission: Email the repository link.