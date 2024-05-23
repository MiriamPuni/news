import connectToMongo from "@/server/DL/connectToMongo";
import { comment } from "postcss";
import styles from "./style.module.scss";
import AddComment from "@/components/AddComment";
import { getOneArticle } from "@/server/BL/article.services";
import articleModel from "@/server/DL/article.model";
// import { usePathname } from "next/navigation";

export default async function Article({ params }) {
  const getSelectedArticle = async () => {
    await connectToMongo();
    const article = await getOneArticle(params.articleSlug);
    return article;
  };

  const article = await getSelectedArticle();

  if (article)
    return (
      <div className={styles.ArticlePage}>
        <h1 className="mainTitle"> {article.mainTitle}</h1>
        <h4 className="subTitle">{article.subTitle}</h4>
        <span>
          published: {article.createDate.toString()} | by: {article.writer}
        </span>
        <div>
          {article.content?.map((c) => {
            if (c.type == "text" || c.type == "title") {
              return <div key={c.fill}>{c.fill}</div>;
            } else if (c.type == "img") {
              return (
                <img
                  key={c.fill}
                  style={{ width: "400px" }}
                  src={c.url}
                  alt={c.type}
                />
              );
            }
          })}
        </div>
        <AddComment id={String(article._id)} />
        <div className={styles.commentsArea}>
          {`---Conversation: ${article.comments?.length} comments---`}
          {article.comments?.map((comment, index) => {
            return (
              <ul key={index}> 
                <li key={index}>
                  <h4 className={styles.commentTitle} key={index}>
                    {index + 1}. {comment.title}
                  </h4>
                </li >
                <li className={styles.commentUserName} key={index}>
                  name: {comment.userName}
                </li>
                <li key={index}>{comment.content} </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
}
