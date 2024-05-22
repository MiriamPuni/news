const { default: articleModel } = require("../article.model");

 export const getAllArticles = async()=> {
    console.log("find",articleModel.find)
    const articles = await articleModel.find()
    return articles
}
