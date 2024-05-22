const { default: articleModel } = require("../article.model");

export const getAllArticles = async () => {
  // console.log("find",articleModel.find)
  const articles = await articleModel.find();
  return articles;
};

export const getArticleBySlug = async (slug) => {
  const article = await articleModel.findOne({ slug: slug }).lean();
  return article;
};

export const addComment = async (comment, slug) => {
    console.log('controller1',comment.content);
    const newComment = await articleModel.updateOne(
        { slug: slug },
        { $push: { comments: comment } }
    );
    console.log('controller2');
  return newComment;
};
