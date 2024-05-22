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
  console.log("&&&**",{article});

//   return (
//     <div className={styles.home}>
//         <ul>
//         {article &&
//         article?.map((art) =>  <li key={art._id} className={styles.card}>
//             {console.log({art})}
//           <Link href={`/${art.slug}`} >
//             <Image width={500} height={400} src={art.imgMain} alt={art.mainTitle} />
//          <h2> {art.mainTitle}</h2>
//         </Link></li>)}
//       </ul>
//           </div>
     
   
//   )
return (
  <div className={styles.container}>
    <ul className={styles.cardList}>
      {article &&
        article?.map((art) => (
          <li key={art._id} className={styles.card}>
            <Link href={`/${art.slug}`}>
              <div className={styles.imageContainer}>
                <Image
                  width={400}
                  height={200}
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