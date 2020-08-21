import * as functions from "firebase-functions";
import ImageKit from "imagekit";

interface EnvironmentVariables {
  git_repo: string;
  uid: string;
  imagekit_public_key: string;
  imagekit_private_key: string;
  imagekit_id: string;
}
const envs: EnvironmentVariables = functions.config().imagekit;

const getImageKitAuth = () => {
  const imageKit = new ImageKit({
    publicKey: envs.imagekit_public_key || "",
    privateKey: envs.imagekit_private_key || "",
    urlEndpoint: `https://ik.imagekit.io/${envs.imagekit_id || ""}/`,
  });

  return imageKit.getAuthenticationParameters();
};

const isReqAuthenticated = (uid: string): boolean => {
  if (envs.uid && envs.uid.length > 0) {
    return uid === envs.uid;
  }
  return false;
};

export const uploadImage = functions.https.onRequest((req, res) => {
  if (!isReqAuthenticated(String(req.query.uid))) {
    res.sendStatus(401);
    return;
  }

  const githubUserRepo = envs.git_repo || "PleaseFillInGIT_REPO";

  res.set(
    "Access-Control-Allow-Origin",
    `https://${githubUserRepo[0]}.github.io/`
  );
  res.status(200).send(getImageKitAuth());
});
