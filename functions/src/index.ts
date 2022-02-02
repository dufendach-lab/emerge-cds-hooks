import * as functions from "firebase-functions";
import * as services from "./cds-services.json";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const cdsServices = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello CDS Service logs!", {structuredData: true});
  response.send(services);
});

