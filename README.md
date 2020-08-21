# ImageKit node.js Firebase serverless function

This is a serverless function to return authentication parameters to a client-side app only if the UID of the Firebase is correct.

## Setup

0. You need a Firebase account with a project initialized and Blaze pricing plan (no need to worry, pretty sweet free tier, just create a budget to notify you if you ever reach 1\$ of spending). You also need an ImageKit account. Lastly, you have a client-side app that has the UID saved privately and includes it within the function call as parameter.
1. Replace within `.firebaserc` your project's name
2. Run the following command with your arguments in place:

```bash
firebase functions:config:set imagekit.imagekit_id="" imagekit.imagekit_private_key="" imagekit.imagekit_public_key="" imagekit.origin_url="" imagekit.uid=""
```

The ID, private and public key come from ImageKit
Origin URL is the url of the client app that is permitted to use the function.
UID is your Firebase Github UID after you have signed in through your site.

3. (Optional) Run `firebase functions:config:get > .runtimeconfig.json` and then `npm run serve` in order to locally serve and test your function.
4. Run `npm run deploy` to deploy to Firebase Functions.
