import CardArticle from '@/components/CardArticle';
import { getByOrdet, luli } from '@/server/BL/article.services';
import connectToMongo from '@/server/DL/connectToMongo';
import Image from 'next/image';
import React from 'react'
import Footer from '@/components/Fotter'
import Header from '@/components/Header'
import Mivzakim from '@/components/Mivzakim';

export default async function page() {
  await connectToMongo()
  let data = await getByOrdet()
  console.log('🥳',new Date(data[0].createDate).getHours());
  return (
    
    <div className='container'>
      <div style={{width:'100%', height:'300px', backgroundColor:'InactiveCaptionText'}}></div>
      <div style={{display:'flex'}}>
<div style={{width:'30%', height:'500px', backgroundColor:'blue'}}></div>
      <div className='containerCartArticle'>

      {data.map((d, i)=> <CardArticle
       slug={d.slug}
       mainTitle={d.mainTitle} 
       imgMain={d.imgMain} 
       createDate={'kk'} />)}
       </div>
       </div>
    </div>
  )
}
// width: 100%
// maxWidth: 1000px
// margin auto