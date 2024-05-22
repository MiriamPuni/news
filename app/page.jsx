import Mivzakim from '@/components/Mivzakim'
import CardArticle from '@/components/CardArticle';
import { getByOrdet, luli } from '@/server/BL/article.services';
import connectToMongo from '@/server/DL/connectToMongo';
import Image from 'next/image';
import React, { Suspense } from 'react'
import Footer from '@/components/Fotter'
import Header from '@/components/Header'

export default async function page() {
  await connectToMongo()
  let data = await getByOrdet()
  console.log('🥳', new Date(data[0].createDate).getHours());
  return (
    <div className='container'>
      <div style={{ width: '100%', height: '300px', backgroundColor: 'InactiveCaptionText' }}></div>
      <div style={{ display: 'flex' }}>
        <Suspense fallback={<div>loading</div>}>
          {/* <div style={{ width: '30%', height: '500px', backgroundColor: 'blue' }}><Mivzakim /></div> */}
        </Suspense>
        <div className='containerCartArticle'>

          {data.map((d, i) => <CardArticle
            slug={d.slug}
            mainTitle={d.mainTitle}
            imgMain={d.imgMain}
            createDate={'kk'} />)}
        </div>
      </div>

    </div>
  )
}

