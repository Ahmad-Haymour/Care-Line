"use server"

import { ID,Query } from "node-appwrite";
import {
    // BUCKET_ID,
    // DATABASE_ID,
    // ENDPOINT,
    // PATIENT_COLLECTION_ID,
    PROJECT_ID,
    databases,
    // storage,
    users,
  } from "../appwrite.config";
import { parseStringify } from "../utils";


export const createUser = async (user: CreateUserParams) =>{
    try {
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name,
        )
        console.log({newUser})
        console.log('Create New User :', newUser)

        return parseStringify(newUser);

    } catch (error: any) {
        console.log('Catch error: > ', error);
        
        // If user already exists
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email', [user.email]),
            ])
            console.log('Existing user document: ', documents)
            return documents?.users[0]
        }
    }
}