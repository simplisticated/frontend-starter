# React Starter

## Requirements

- Node.js
- NPM
- TypeScript

## How to Get Started

- Clone the repository.
- Create `.env` file in the root folder and input
  [environment variables](#environment-variables) that you want to use locally.
- If you plan to build the project for production locally (not on a remote CI/CD
  service), also create a `.env.production` file in the root folder and specify
  the environment variables that should be used in the production environment.
- Type in terminal: `npm install`
- To run locally, use: `npm run start:dev`
- To build for production: `npm run build`, and then you can run the production
  version locally by using `npm run start`
- You're all set!

## Environment Variables

### `REACT_APP_ENVIRONMENT`

Possible values:

- `production` — official production build
- `internal` — for internal team testing
- `local` — for running the app locally

This variable affects the settings and behavior of the app, including internal
configuration and interaction with external services. Depending on the project's
context, the set of values can be easily extended.

### `GENERATE_SOURCEMAP`

Set it to `false` for preventing error messages regarding source maps.

### `REACT_APP_MIXPANEL_API_KEY`

Add Mixpanel API key here. It will be automatically used by `ANALYTICS` object.

### `REACT_APP_CONTACT_EMAIL`

Email address for contact or feedback purposes.

### `REACT_APP_TELEGRAM_TOKEN`

Telegram token that is used for sending messages.

### `REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS`

Telegram message recipients.

### Example configuration

Usually, your `.env` file's content should look like:

```
REACT_APP_ENVIRONMENT=local
GENERATE_SOURCEMAP=false
REACT_APP_MIXPANEL_API_KEY=
REACT_APP_CONTACT_EMAIL=
REACT_APP_TELEGRAM_TOKEN=
REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS=
```
