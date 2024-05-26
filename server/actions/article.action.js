"use server"

import { redirect } from "next/dist/server/api-utils";
import articleModel from "../DL/article.model";
import connectToMongo from "../DL/connectToMongo";

// const { default: articleController } = require("../DL/controllers/article.controller");
async function addNewArticle(fd) {
    const obj = Object.fromEntries(fd)
    console.log(obj);
    try {
        await connectToMongo()
        const add = await articleModel.create(obj)
        console.log({add});
        // return add
    } catch (error) {
        console.log(error);
    }
}  
 export default addNewArticle