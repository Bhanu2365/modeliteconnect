# MODELITE Connect — frontend preview

This repository currently contains the frontend phase only. It uses React, Vite, React Router, Axios, and local sample data. No backend, authentication service, database, or real account data is connected.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

Copy `.env.example` to `.env` and set `VITE_CONTACT_EMAIL` to the MODELITE inbox before using the access request flow. Vite reads environment variables at startup, so restart the dev server after changing it.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production bundle, run `npm run build`; `npm run preview` serves that bundle locally.

## Preview flows

- Public landing page, sample brand directory, model/brand access request, sign in, and password-help pages.
- Access requests open a prefilled email draft addressed to `VITE_CONTACT_EMAIL`. The applicant must press Send in their mail app; the frontend cannot confirm delivery. The confirmation explains that they should wait for review and secure account setup instructions.
- The sign-in form accepts any email/password and lets you choose a demo role (brand, model, or admin) to explore its dashboard.
- Admin can create sample model/brand accounts with profile and representative contact fields, and open a temporary-password reset dialog from each row. This uses the requested `modelite@0999` only as a frontend demo value; it is not suitable for production authentication.
- Admin settings update the public contact email and Instagram handle stored in this browser. The About section and email links reflect those settings.
- Models can browse a sample member directory without seeing other models' contact details. Approved brand demo accounts see consent-marked model contact details on profile cards.
- Search, location/category filters, saved profiles, notification feedback, and account changes use in-browser sample behavior.

Sample content is illustrative. Access request details are placed into the user's email app and are not stored by this frontend. Dashboard counts and queue items are not live. The shared Axios client in `src/api/client.js` is an integration seam for the future Django API.

## Current boundary

No Django implementation, API, real authentication, authorization, image upload, or persistent storage is included in this phase. These must be implemented and secured on the backend before real users or private profile data are added. Model details are not listed on public pages; the model directory is represented as member-only.
