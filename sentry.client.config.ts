import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f1927ba4d8b72894cf816c9b22a1cdf1@o4507798362259456.ingest.de.sentry.io/4508015140995152",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});