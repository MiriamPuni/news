import addNewArticle from '@/server/actions/article.action'
import styles from './style.module.scss'

export default function AddArticle() {

  return (

    <div className={styles.all}>
      <form action={addNewArticle} className={styles.form}>
        שם הכותב:
        <input type="text" name='writer' className={styles.input} />
        <br />
        שם הקטגוריה:
        <input type="text" name='category' className={styles.input} />
        <br />
        שם הקטגוריה:
        <input type="text" name='imgMain' className={styles.input} />
        <br />
        slug:
        <input type="text" name='slug' className={styles.input} />
        <br />
        כותרת הכתבה:
        <input type="text" name='mainTitle' className={styles.input} />
        <br />
        כותרת משנה:
        <input type="text" name='subTitle' className={styles.input} />
        <br />
        גוף הכתבה:
        {/* <input type="text" name='content' className={styles.input} /> */}
        <button type='submit'>צור כתבה</button>
      </form>
    </div>
  )
}