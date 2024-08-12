This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Vogon ID

you have to create a .env or .env.local file with your VogonID credentials like
this

You should generate your own NEXTAUTH_SECRET

For staging/dev:

```
NEXT_PUBLIC_UNIDY_BASE_URL=https://vogon.staging.unidy.de
NEXT_PUBLIC_UNIDY_CLIENT_ID=<YOUR_STAGING_CLIENT_ID>

UNIDY_CLIENT_SECRET=<YOUR_STAGING_CLIENT_SECRET>
NEXTAUTH_SECRET=WiMKYhNw4mJwkjuOHfGwA/E/6gfL6Yt0WF8BCHWMDts=
NEXTAUTH_URL=http://localhost:3000
```

For prod:

```
NEXT_PUBLIC_UNIDY_BASE_URL=https://vogon.unidy.de
NEXT_PUBLIC_UNIDY_CLIENT_ID=<YOUR_PROD_CLIENT_ID>

UNIDY_CLIENT_SECRET=<YOUR_PROD_CLIENT_SECRET>
NEXTAUTH_SECRET=WiMKYhNw4mJwkjuOHfGwA/E/6gfL6Yt0WF8BCHWMDts=
NEXTAUTH_URL=http://localhost:3000
```
