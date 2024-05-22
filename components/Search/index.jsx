// 'use client'
// import { FaSearch } from "react-icons/fa";

// import { useRouter } from "next/navigation"
// import styles from './style.module.scss'
// export default function Search() {
//    const router = useRouter()

//    const handleSearch = (e) => {
//       e.preventDefault()
//       console.log(e.target.search.value)
//       router.push(`/result?search=${e.target.search.value}`)
//    }

//    return (
//       <div className={styles.searchContainer}>
// <FaSearch size={25} style={{color: 'white'}} />
//       <form onSubmit={handleSearch} >
//          <input className="text-black" type="text" name='search' placeholder="search" />
//          <button type="submit">submit</button>
//       </form>
//       </div>
//    )
// }
'use client';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';

export default function Search() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/result?search=${searchQuery}`);
    setShowInput(false);
    setSearchQuery('');
  };

  return (
    <div className={styles.searchContainer}>
      <FaSearch
        size={25}
        style={{ color: 'white', cursor: 'pointer' }}
        onClick={() => setShowInput(!showInput)}
      />
      {showInput && (
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="חיפוש..."
          />
        </form>
      )}
    </div>
  );
}