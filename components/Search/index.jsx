'use client'

import { useRouter } from "next/navigation"
import styles from './style.module.scss'
export default function Search() {
   const router = useRouter()

   const handleSearch = (e) => {
      e.preventDefault()
      console.log(e.target.search.value)
      router.push(`/result?search=${e.target.search.value}`)
   }

   return (
      <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} >
         <input className="text-black" type="text" name='search' placeholder="search" />
         <button type="submit">submit</button>
      </form>
      </div>
   )
}