import styles from './style.module.scss'
import { start } from './/Mmm'

export default async function mivzakim() {
  // console.log("35656)*&^%^&");
  const data = await start()
  // console.log("trr**********", data);
  //navlink => text
  return (
    <div className={styles.continerAll}>
    <div className={styles.continer}>

      <div className={styles.hedear}>
      <img src="	https://www.now14.co.il/wp-content/themes/14-child/assets/logo14/logo-hi-mobile.svg" alt="14newsnew" />
      </div>
      <div className={styles.titel}>
        <img src="	https://www.now14.co.il/wp-content/themes/14-child/assets/icons/mivzakim-icon.svg
" alt="mm" />
        <h4>מבזקים</h4>
        </div>
      {data &&
        data?.map((news, index) => {
          return <div key={index}>
            <h3>{news.title}</h3>
            <details>

              <summary>

                <time >{news.time}</time>
              </summary>
              <p>{news.text}</p>
            </details>
          </div>
        })


      }
    </div></div>
  )
}
