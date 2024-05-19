import styles from '@/components/Tehilla/style.module.scss'
import { start } from './Mmm'

export default async  function Tehilla() {
    console.log("35656)*&^%^&");
    const data = await start()
    console.log("trr**********", data);
//navlink => text
  return (
    <div className={styles.continer}>
        {data &&
        data?.map((news,index)=>{
            <div key={index}>
           <time datetime={news.time}>{news.time}</time> 
           <h2>{news.title}</h2>
           <p>{news.text}</p>
            </div>
        })


        }
    </div>
  )
}
