"use client"
import styles from './style.module.scss';

import { useState } from "react"


export default function UseStateAddArticle() {
    const [addArticle, setAddArticle] = useState(false)
    return (
      <div>
        <button className={styles.add} onClick={setAddArticle(true ? false : true)}>Add Article</button>
        {
          addArticle ?
            <AddArticle />
            :
            <></>
        }
      </div>
    )
  }
  