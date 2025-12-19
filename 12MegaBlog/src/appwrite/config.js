import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class service{
  client= new this.client();
  databases;
  bucket;
  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
     this.databases= new Databases(this.client)
     this.bucket=new Storage(this.client);
  }
  async createPost({title,slug,content,featuredImage,status,useID}){
    try{
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,{
          title,
          content,
          featuredImage,
          status,
          useID,
        }
      ) 

    } catch (error){
      console.log("Appwrite serive:: createPost::error",error);

    }
  }
   async updatePost({title,slug,content,featuredImage,status}){
    try{
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,{
          title,
          content,
          featuredImage,
          status,
        }
      ) 

    } catch (error){
      console.log("Appwrite serive:: updatePost::error",error);

    }
  }
  async deletePost(slug){
    try{
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )  
      return ture

    } catch (error){
      console.log("Appwrite serive:: deletePost::error",error);
      return false

    }
  }
  async getPost (slug){
   try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )  
    } catch (error){
      console.log("Appwrite serive:: getPost::error",error);
      return false

    }  

  }
  async getPosts(queries=[Query.equal("stsuts","active")]){
    try{
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        qureies,
      )
    }
     catch(error){
      console.log("Appwrite serive :: getPosts:: error",error);
      return false
     }
  }
  async uploadfile(file){
    try{
      return await this.bucket.createFile(
        conf.appwriteBuckectId,
        ID.unique(),
        file
      )
    } catch (error){
      console.log("Appwrite serive :: uploadeFile :: error",error);

      return  false 
    }
  }
  async deleteFile(fileId){
    try{
      await this.bucket.deleteFile(
        conf.appwriteBuckectId,
        fileId

      )
      return  ture
    } catch (error){
      console.timeLog("Appwrite serive:: deletefile:: error",error);
       return false
    }
  }
  getFilePreview(fileId){
     return this.bucket.getFilePreview(
      conf.appwriteBuckectId,
      fileId
     )
  }
}

 const service=new service ()
 export default service