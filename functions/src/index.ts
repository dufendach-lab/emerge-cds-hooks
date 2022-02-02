import * as functions from "firebase-functions";
import * as services from "./cds-services.json";
import * as patientView from "./static-patient-view.json";

import * as cors from "cors";
const corsHandler = cors({origin: true});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const cdsServices = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello CDS Service logs!", {structuredData: true});
  corsHandler(request, response, () => {
    response.send(services);
  })
});

export const staticPatientView = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello PatientView logs!", {structuredData: true});
  corsHandler(request, response, () => {
    response.send(patientView);
  })
});
