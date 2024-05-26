const  {default : articleModel}  = require("../article.model");

 export const getAllArticles = async()=> {
    const articles = await articleModel.find()

    return articles
}

export const createArticles = async()=> {
    const articles = await articleModel.create(data)

    return articles
}
