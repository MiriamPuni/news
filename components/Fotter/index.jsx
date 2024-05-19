import Link from 'next/link'
import styles from './style.module.scss'

export default function Footer() {
  const titlefooter = ["Live Broadcast", "Plans", "news", "Judaism", "Terms of Use", "Contact Us", "about", "needed", "magazine", "Published with us", "School of Communication", " documentary films"]
  return (
    <div className={styles.Footer}>
      <div className={styles.imgs}>
        <img src="https://www.now14.co.il/wp-content/themes/14-child/assets/icons/facebook-footer.svg" alt="" />
        <img src="https://www.now14.co.il/wp-content/themes/14-child/assets/icons/youtube-footer.svg" alt="" />
        <img src="https://www.now14.co.il/wp-content/themes/14-child/assets/icons/twitter-footer.svg" alt="" />
        <img src="https://www.now14.co.il/wp-content/themes/14-child/assets/icons/instagram-footer.svg" alt="" />
      </div>
      <div className={styles.titlefooter}>
        {titlefooter.map((item) =>
          <div className={styles.title}>
            <Link href={`/${item}`}>{item}</Link>
          </div>
        )}
      </div>
      <div className={styles.logofooter}>
        <img src="https://www.now14.co.il/wp-content/themes/14-child/assets/logo14/14logo-horizontal-white.svg" alt="" />
      </div>
    </div>
  )
}
