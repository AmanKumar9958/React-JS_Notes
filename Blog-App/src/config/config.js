const config = {
    appwriteUrl: String(import.meta.url.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.url.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.url.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.url.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.url.env.VITE_APPWRITE_BUCKET_ID)
}

export default config