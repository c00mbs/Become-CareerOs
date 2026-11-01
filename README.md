# Become · CareerOS

CareerOS is a platform within Become: a career-record and development experience intended to bring a person's work history, education, skills, milestones, and career insights into one place.

## Current status

This repository is the **Next.js frontend prototype**. The dashboard and profile pages use fictional sample data to demonstrate the interface. They are not connected to a live account, authentication provider, or CareerOS API yet.

- Home: product introduction and navigation
- Onboarding: concept flow; not yet a persisted registration flow
- Dashboard/profile: illustrative sample record only
- API integration and sign-in: not implemented in this frontend yet

## Run locally

```bash
npm install
npm run dev
```

The app uses Next.js 14, React 18, TypeScript, Tailwind CSS, and reusable UI components.

## Related backend

The candidate FastAPI backend is [careeros-api](https://github.com/c00mbs/careeros-api). It is being repaired and tested separately. Do not treat the frontend and API as an integrated production system until authentication, API requests, persistence, and deployment are verified end to end.

## Demo-data policy

All names, employers, dates, education, certifications, and scores shown in the demo are fictional placeholders. Replace them only with verified user-provided records when real profile functionality is implemented.
