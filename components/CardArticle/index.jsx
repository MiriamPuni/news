import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import NavLink from '../NavLink'

export default function CardArticle({ mainTitle, imgMain, createDate, slug }) {
  return (
    <NavLink href={`/article/${slug}`} text={
      <div className={styles.container} >
        <Image src={imgMain} width={220} height={150} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{mainTitle}</h2>
          <p className={styles.cardDescription}>{createDate}</p>
        </div>
      </div>} />
  )
}