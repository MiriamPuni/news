"use client"
import styles from "./style.module.scss";
import { SiTheconversation } from "react-icons/si";
import {addNewComment} from '@/server/BL/actions/comments.action'
import { usePathname } from "next/navigation";

export default function AddComment() {
 const articleId = usePathname().replace('/article/', '') 
 console.log(articleId);
    return (
    <div className={styles.tiitelToAllComments}>
    <h3>
      {" "}
      <SiTheconversation />
      -- What do you think about it??
    </h3>
    <form action={addNewComment}>
     <input type="hidden" name={"articleId"} value={articleId}/>
      <input className={styles.inputUserName} name="userName" placeholder="Your name:" type="text" />
   
      <input className={styles.inputTitel} name="titel" placeholder="titel" type="text" />
    
      <input
        className={styles.inputArea}
        name="content"
        placeholder="Your post:"
        type="text"
      />
    
      <button type="submit">Share post</button>
    </form>
  </div>
  )
}
