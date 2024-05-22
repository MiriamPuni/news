import NavLink from '../NavLink';
import styles from './style.module.scss'
import { start } from '@/app/mivzakim/Mmm'
import Image from 'next/image';
export default async function index() {
  // console.log("35656)*&^%^&");
  const data = await start()
  // console.log("trr**********", data);
  //navlink => text
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <Image width={10} height={10} src="	https://www.now14.co.il/wp-content/themes/14-child/assets/icons/mivzakim-icon.svg" alt="mm" />
        <h2>מבזקים</h2>
      </div>
      <div className={styles.tickerWrapper}>

      <div className={styles.ticker}>
      {data && [...data,...data].map((news, index) => (
            <div key={index} className={styles.tickerItem}>
            <NavLink href='/mivzakim' text={news.title.includes('|') ? news.title.split('|')[0] : news.title}>  </NavLink><br />
              <time>{news.time}</time>
            </div>
          ))}
      </div>
      </div>

    </div>
  )
}