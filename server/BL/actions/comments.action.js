"use server";

import { addNewCommentServer } from "@/server/BL/article.services";
import connectToMongo from "@/server/DL/connectToMongo";

export const addNewComment = async (fd) => {
  const obj = Object.fromEntries(fd);
  const slug = obj.articleId;
  console.log("slug:", slug);
  try {
    await connectToMongo();
    const addedComment = await addNewCommentServer(obj, slug);
    console.log("addedComment:", addedComment);
    return addedComment;
  } catch (error) {
    console.log({ error });
    return { message: "not connected" };
  }
};
