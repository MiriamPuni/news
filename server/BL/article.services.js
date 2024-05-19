import { set } from 'mongoose';
import articleModel from '../DL/article.model';
import connectToMongo from '../DL/connectToMongo';

import { getAllArticles } from '../DL/controllers/article.controller';

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

export {creatData, getData, getByOrdet}