import Link from "next/link"
import styles from './style.module.scss'


export default async function HeaderList({category , index}) {

  return (
    <div className={styles.catlist}>
       <Link key={index} href={`/${category}`}>
          {category}
        </Link>
    </div>
  )
}
