/* eslint-env node */
'use strict';

module.exports = function (environment) {

  let ENV = {
    modulePrefix: 'swordfish-ember-client',
    podModulePrefix: 'swordfish-ember-client/features',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    pace: {
      theme: 'minimal',
      color: 'blue',
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },

    APP: {
      SWORDFISH: process.env.SWORDFISH,
      PUSHER_KEY: process.env.PUSHER_KEY,
      PUSHER_SECRET: process.env.PUSHER_SECRET,
    }
  };

  ENV['ember-simple-auth'] = {
    auth0: {
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN
    }
  };

  if (environment === 'development') {
    ENV.APP.SWORDFISH = 'http://localhost:8080';
    ENV.APP.PUSHER_KEY = process.env.DEV_PUSHER_KEY;
    ENV.APP.PUSHER_SECRET = process.env.DEV_PUSHER_SECRET;
  }

  return ENV;
};
