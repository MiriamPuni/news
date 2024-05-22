import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'
import connectToMongo from "@/server/DL/connectToMongo"
import {filterArticle} from '@/server/BL/article.services'
export default async function page({ searchParams }) {
 
console.log("****______*****", searchParams.search);
  
  await connectToMongo()
  const article = await filterArticle(searchParams.search)

return (
  <div className={styles.container}>
    <ul className={styles.cardList}>
      {article &&
        article?.map((art) => (
          <li key={art._id} className={styles.card}>
            <Link href={`/${art.slug}`}>
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={300}
                  src={art.imgMain}
                  alt={art.mainTitle}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{art.mainTitle}</h2>
                <p className={styles.cardDescription}>{art.subTitle}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </div>
);
}