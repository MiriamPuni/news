import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import NavLink from '../NavLink'
export default function CardArticle({ mainTitle, imgMain, createDate, slug }) {
  return (
    <NavLink href={`/article/${slug}`} text={<div className={styles.container} >
      <Image
        src={imgMain}
        width={170}
        height={100}
      />
      {mainTitle}
      <br />
      {createDate}
    </div>} />

  )
}

