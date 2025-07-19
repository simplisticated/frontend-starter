# React Starter

## Requirements

- Node.js
- Yarn
- TypeScript

## How to Get Started

- Clone the repository.
- Create `.env` file in the root folder and input
  [environment variables](#environment-variables) that you want to use locally.
- Type in terminal: `yarn install`
- Before deploying to Heroku or a similar service, add environment variables to
  the settings.
- You're all set!

## Environment Variables

### `REACT_APP_ENVIRONMENT`

Possible values: `production`, `test`, `local`.

This value affects the settings and behavior of the app, including internal
configuration and interaction with external services.

### `GENERATE_SOURCEMAP`

Set it to `false` for preventing error messages regarding source maps.

### `NODE_OPTIONS`

It's strongly recommended to add `NODE_OPTIONS` variable:

```
--max-old-space-size=2048
```

### `REACT_APP_MIXPANEL_API_KEY`

Add Mixpanel API key here. It will be automatically used by `ANALYTICS` object.

### `REACT_APP_CONTACT_EMAIL`

### `REACT_APP_CONTACT_TELEGRAM`

### `REACT_APP_TELEGRAM_TOKEN`

Telegram token that is used for sending messages.

### `REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS`

Telegram message recipients.

### Example configuration

Usually, your `.env` file's content should look like:

```
REACT_APP_ENVIRONMENT=development
GENERATE_SOURCEMAP=false
REACT_APP_MIXPANEL_API_KEY=
REACT_APP_CONTACT_EMAIL=
REACT_APP_CONTACT_TELEGRAM=
REACT_APP_TELEGRAM_TOKEN=
REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS=
```
