import connectToMongo from "@/server/DL/connectToMongo";
import { comment } from "postcss";
import styles from "./style.module.scss";



export default function Article({ params }) {
  const article = {
    mainTitle: "Why Cats Love Boxes",
    subTitle: "The mystery of feline fascination with cardboard",
    createDate: "Sun May 19 2024 15:34:02",
    writer: "Jane Doe",
    category: "Animals",
    content: [
      {
        type: "text",
        fill: "Cats have a strange fascination with boxes, and their behavior around these seemingly mundane objects can be both amusing and baffling to their human companions. This curious trait can be attributed to several factors rooted in feline instincts and behavior.",
      },
      {
        type: "img",
        url: "https://cdn.pixabay.com/photo/2020/07/31/16/46/cat-5453535_1280.jpg",
      },
      { type: "title", fill: "Instinctual Comfort" },
      {
        type: "text",
        fill: "One primary reason cats are drawn to boxes is the sense of security they provide. In the wild, cats seek out enclosed spaces to hide from predators and to stalk prey. Boxes mimic these safe havens, offering a sense of comfort and protection. When a cat is inside a box, it feels less exposed and can observe its surroundings while remaining hidden.",
      },
      { type: "title", fill: "Stress Reduction" },
      {
        type: "text",
        fill: "Research has shown that boxes can help reduce stress in cats. A study published in the journal Applied Animal Behaviour Science found that shelter cats provided with boxes adjusted more quickly to their new environment compared to those without boxes. The enclosed space of a box offers a retreat from stressful stimuli, making it a valuable tool for helping cats cope with anxiety.",
      },
    ],
    slug: "why-cats-love-boxes",
    views: 123,
    comments: [
      {
        content: "I never knew why my cat loved boxes so much!",
        title: "Interesting read",
        user: "60c72b2f9b1d4c1dfc8b4567",
        date: new Date(),
      },
    ],
  };

  // console.log({params});

  // getSelectedArticle({params})
  return (
    <div className={styles.ArticlePage}>
      <h1 className="mainTitle"> {article.mainTitle}</h1>
      <h4 className="subTitle">{article.subTitle}</h4>
      <span>
        {" "}
        published: {article.createDate} | by: {article.writer}
      </span>
      <div>
        {" "}
        {article.content.map((c) => {
          if (c.type == "text" || c.type == "title") {
            console.log(c.fill);
            return <div>{c.fill}</div>;
          } else if (c.type == "img") {
            return <img style={{ width: "400px" }} src={c.url} alt={c.type} />;
          }
        })}
      </div>
      <div>
        {article.comments.map((comment, index) => {
          return (
            <ul className={styles.commentsArea}>
              comments
              <li>
                <h4>
                  {index + 1}. {comment.title}
                </h4>
              </li>
              <li>name: {comment.user}</li>
              <li>{comment.content}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
