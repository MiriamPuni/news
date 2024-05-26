import { getAllCategories } from '@/server/BL/article.services';
import connectToMongo from '@/server/DL/connectToMongo';
import HeaderList from '../HeaderList';
import Search from '../Search';
import styles from './style.module.scss';

export default async function Header() {
  
  await connectToMongo()
  const categories = await getAllCategories()

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.cat}>
          <Search />
          {categories.map((category, index) => (
            <HeaderList category={category} index={index} />
          ))}
        </div>
        <img className={styles.img} src="https://sherut-il.com/wp-content/uploads/2023/11/%D7%A2%D7%A8%D7%95%D7%A5-14-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%9C%D7%95%D7%92%D7%95.png" alt="" />
      </div>
      <div className={styles.headerPlaceholder}></div>
    </>
  )
}
