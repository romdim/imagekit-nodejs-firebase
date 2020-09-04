# ImageKit node.js Firebase serverless function

This is a serverless function to return authentication parameters to a client-side app only if the UID of the Firebase is correct.

## Setup

1. Create an ImageKit account
2. Gather the following info:

The ID, private and public key come from ImageKit
Origin URL is the CORS allowed url of the client app that will use the function. When ran locally this could be something like `http://localhost`.
UID (just a unique ID) is what your client-side app will include when it calls this function as a parameter.

### Run locally

1. Create a `.runtimeconfig.json` that looks like `.runtimeconfig.json.example`. If you already deployed it to Firebase, then you can speed things up by running: `firebase functions:config:get > .runtimeconfig.json`
2. `docker build -t fia . && docker run -it fia` (or `npm run serve`)

### Deploy

1. Create a Firebase account with a project initialized and Blaze pricing plan (no need to worry, pretty sweet free tier, just create a budget to notify you if you ever reach 1$ of spending)
2. Replace your project's name in `.firebaserc`
3. Install globally the Firebase CLI: `npm install -g firebase-tools`
4. Run `firebase functions:config:set imagekit.imagekit_id="" imagekit.imagekit_private_key="" imagekit.imagekit_public_key="" imagekit.origin_url="" imagekit.uid=""` with your arguments in place. They should look like the provided `.runtimeconfig.json.example`
5. Make sure you have the correct `origin_url` in your functions config.
6. Run `npm run deploy` to deploy to Firebase Functions.
