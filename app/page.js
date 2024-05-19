import CardArticle from '@/components/CardArticle';
import { getByOrdet, luli } from '@/server/BL/article.services';
import connectToMongo from '@/server/DL/connectToMongo';
import Image from 'next/image';
import React from 'react'
import Footer from '@/components/Fotter'
import Header from '@/components/Header'

export default async function page() {
  await connectToMongo()
  let data = await getByOrdet()
  console.log('🥳',new Date(data[0].createDate).getHours());
  return (
    <div className='containerCartArticle'>
      {data.map((d, i)=> <CardArticle
       slug={d.slug}
       mainTitle={d.mainTitle} 
       imgMain={d.imgMain} 
       createDate={'kk'} />)}
    </div>
  )
}
