# Become · CareerOS

CareerOS is the career-record platform within **Become**.

## What is implemented

- Premium Become / CareerOS landing page and onboarding entry
- Account registration and sign-in screens
- FastAPI client connected to the CareerOS backend
- Authenticated dashboard reading the signed-in user's profile, career timeline, skills, applications, and career summary
- Skill creation saved to the user's authenticated API account
- Sign-out and expired-token handling

## Backend

The frontend uses [careeros-api](https://github.com/c00mbs/careeros-api).

The API base URL defaults to the existing Render service:
`https://careeros-api-yadv.onrender.com`

To override it, set `NEXT_PUBLIC_CAREEROS_API_URL` in the frontend deployment environment.

## Required deployment configuration

The API's Render service must allow the actual frontend origin through its `ALLOWED_ORIGINS` environment variable. Set that to the deployed HTTPS frontend origin (and localhost during development if needed). Do not use a guessed domain. The browser cannot complete sign-in until the Render CORS allowlist includes the frontend origin.

## Run locally

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_CAREEROS_API_URL` if using a local API. Otherwise the app uses the configured Render API URL.

## Authentication note

The current API issues short-lived bearer tokens. The frontend stores the access token in browser session storage, which clears when the tab session ends. This is an MVP implementation; a production hardening pass should move token handling to secure, HttpOnly cookies through a same-origin server-side proxy and add a CSRF strategy.

## Honest product boundary

Registration, login, live dashboard reads, and skill creation are wired in code. End-to-end browser verification against the deployed API and frontend deployment CORS configuration are still required before calling the complete user journey production-ready. Profile editing, experience/education CRUD, and full application-tracker creation are future integration work.
