import articleModel from '../DL/article.model';
import connectToMongo from '../DL/connectToMongo';

const creatData= (data)=> articleModel.create(data)

const getData = ()=> articleModel.find()

const getByOrdet = ()=> articleModel.find().sort( { createDate : -1 } ) 


export let luli = async()=>{
    let data = await getData()
    console.log(data);
    data.forEach(d=> d.imgMain = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK63ZHVaCAJf3yeq0gl12tLrONJBM0Il3PQ&s')
    Promise.all(data.map(d=> d.save()))
    console.log(data);

    // Promise all 

    // data.save()
//     await connectToMongo()
//     const all = await Promise.all(articles.map(i=>creatData(i)))
//     console.log({all});
    console.log('😉');
}
export {creatData, getData, getByOrdet}