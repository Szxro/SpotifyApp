// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const redirectUris = {
  authEndPoint: 'https://accounts.spotify.com/authorize',
  authToken: 'https://accounts.spotify.com/api/token',
  redirectUri: 'http://localhost:4200/',
};

export const clientCredentials = {
  clientId: 'CLIENT_ID',
  secretKey: 'SECRET_KEY',
  //Scopes are the stuffs that you are going to use
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
