import { set } from 'mongoose';
import articleModel from '../DL/article.model';
import  {getAllArticles} from '../DL/controllers/article.controller'
import connectToMongo from '../DL/connectToMongo';



const creatData = (data) => articleModel.create(data)

const getData = ()=> articleModel.find()

const getByOrdet = ()=> articleModel.find().sort( { createDate : -1 } ) 


const getSelectedArticle =(articlId)=>{

}

export const getAllCategories = async () => {
    const all = await getAllArticles()
    const categories = all.map(c => c.category)
    const uniqueCategory = [...new Set(categories)]
    return uniqueCategory
}
export const filterArticle = async(search) => {
    console.log("searchServer",search);
   const res= await articleModel.find({
    $or: [
      { mainTitle: { $regex: search, $options: 'i' } },
      { subTitle: { $regex: search, $options: 'i' } },
      { writer: { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } },
      { 'content.fill': { $regex: search, $options: 'i' } }
    ]
  });
  console.log("===res===", {res});
return res}


export {creatData, getData, getByOrdet}