// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://yeneproject.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyDGeRqpbdzoLs4oM4udKR_I01cOZw4GcBI',
    authDomain: 'yene-challenge.firebaseapp.com',
    databaseURL: 'https://yene-challenge-default-rtdb.firebaseio.com',
    projectId: 'yene-challenge',
    storageBucket: 'yene-challenge.appspot.com',
    messagingSenderId: '228328944388',
    appId: '1:228328944388:web:19b5b7783b43e7dced5651',
    measurementId: 'G-WD3HCCL4M4',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
