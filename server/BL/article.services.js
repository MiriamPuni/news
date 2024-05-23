import { set } from 'mongoose';
import articleModel from '../DL/article.model';
import connectToMongo from '../DL/connectToMongo';

import { getAllArticles,addComment,getArticleBySlug } from '../DL/controllers/article.controller';

const creatData = (data) => articleModel.create(data)

const getData = ()=> articleModel.find()

const getByOrdet = ()=> articleModel.find().sort( { createDate : -1 } ) 



export const getAllCategories = async () => {
    const all = await getAllArticles()
    const categories = all.map(c => c.category)
    const uniqueCategory = [...new Set(categories)]
    console.log("F",uniqueCategory);
    return uniqueCategory
}

export const getOneArticle = async (slug)=>{
const article = await getArticleBySlug(slug)
return article
}

export const addNewCommentServer = async (comment,slug)=>{
    console.log('service1');
    const newComment = await addComment(comment,slug)
    console.log('service2');
    return newComment
}


export {creatData, getData, getByOrdet}



