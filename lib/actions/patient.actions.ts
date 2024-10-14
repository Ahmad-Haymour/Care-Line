"use server";

import { ID, Query, InputFile } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
  
    return parseStringify(newUser);
  } catch (error) {
    // If user already exists
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);
      console.log("Existing user document: ", documents);
      return documents?.users[0];
    }
  }
};

export const getUser = async (userId: string) => {
  
  try {
    const user = await users.get(userId);

    if (!user) {
      console.log("User not found");
    }

    return parseStringify(user);
  } catch (error) {
    console.log("An error occurred while retrieving the user details:", error);
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBlob(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);

      if (!file?.$id) {
        console.error("File ID is null, file upload may have failed.");
      } else {
        console.log("File ID:", file.$id);
      }
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

export const getPatient = async (userId: string) => {

  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", userId)]
    );

    if (!patients) {
      console.log("Patients not found");
    }

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.log(
      "An error occurred while retrieving the patient actions details:",
      error
    );
  }
};
