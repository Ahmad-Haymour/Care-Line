import * as sdk from 'node-appwrite';

const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    NEXT_PUBLIC_PROJECT_ID: PROJECT_ID, 
    NEXT_PUBLIC_API_KEY: API_KEY, 
    DATABASE_ID, 
    PATIENT_COLLECTION_ID, 
    DOCTOR_COLLECTION_ID, 
    APPOINTMENT_COLLECTION_ID, 
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;


console.log("1 DATABASE_ID:", DATABASE_ID);
console.log("2 PATIENT_COLLECTION_ID:", PATIENT_COLLECTION_ID);
console.log("3 BUCKET_ID:", BUCKET_ID);
console.log("4 APPOINTMENT_COLLECTION_ID: >", APPOINTMENT_COLLECTION_ID);

if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.log('Missing Appwrite environment variables');
}

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

export { ENDPOINT, PROJECT_ID, BUCKET_ID, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID };
