import { set } from 'mongoose';
import articleModel from '../DL/article.model';
import connectToMongo from '../DL/connectToMongo';

import { getAllArticles } from '../DL/controllers/article.controller';

const creatData = (data) => articleModel.create(data)

const getData = ()=> articleModel.find()

const getByOrdet = ()=> articleModel.find().sort( { createDate : -1 } ) 



export const getAllCategories = async () => {
    const all = await getAllArticles()
    const categories = all.map(c => c.category)
    const uniqueCategory = [...new Set(categories)]
    console.log("F",uniqueCategory);
    return uniqueCategory
}

export const getSelectedArticle = async (slug)=>{
const article = await articleModel.findOne({slug:slug})
return article
}


export {creatData, getData, getByOrdet}



// const articles = [
//     {
//         mainTitle: "Why Cats Love Boxes",
//         subTitle: "The mystery of feline fascination with cardboard",
//         createDate: new Date(),
//         writer: "Jane Doe",
//         category: "Animals",
//         content: [
//             { type: 'title', fill: "Introduction" },
//             { type: 'text', fill: "Cats have a strange fascination with boxes..." },
//             { type: 'img', fill: "cat-in-box.jpg" }
//         ],
//         slug: "why-cats-love-boxes",
//         views: 123,
//         comments: [
//             {
//                 content: "I never knew why my cat loved boxes so much!",
//                 title: "Interesting read",
//                 user: "60c72b2f9b1d4c1dfc8b4567",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Best Homemade Pizza Recipes",
//         subTitle: "Make pizzeria-quality pizza at home",
//         createDate: new Date(),
//         writer: "John Smith",
//         category: "Food",
//         content: [
//             { type: 'title', fill: "Why Homemade Pizza?" },
//             { type: 'text', fill: "Making pizza at home is fun and rewarding..." },
//             { type: 'img', fill: "homemade-pizza.jpg" }
//         ],
//         slug: "best-homemade-pizza-recipes",
//         views: 456,
//         comments: [
//             {
//                 content: "I tried the Margherita recipe and it was fantastic!",
//                 title: "Delicious!",
//                 user: "60c72b2f9b1d4c1dfc8b4568",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Exploring the Amazon Rainforest",
//         subTitle: "An adventure into the wild",
//         createDate: new Date(),
//         writer: "Alex Johnson",
//         category: "Travel",
//         content: [
//             { type: 'title', fill: "The Journey Begins" },
//             { type: 'text', fill: "The Amazon Rainforest is a vast and mysterious place..." },
//             { type: 'img', fill: "amazon-rainforest.jpg" }
//         ],
//         slug: "exploring-the-amazon-rainforest",
//         views: 789,
//         comments: [
//             {
//                 content: "Amazing article! Makes me want to visit the Amazon.",
//                 title: "Inspiring",
//                 user: "60c72b2f9b1d4c1dfc8b4569",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Future of Electric Cars",
//         subTitle: "How electric vehicles are changing the world",
//         createDate: new Date(),
//         writer: "Emily White",
//         category: "Technology",
//         content: [
//             { type: 'title', fill: "A New Era of Transportation" },
//             { type: 'text', fill: "Electric cars are becoming more popular..." },
//             { type: 'img', fill: "electric-car.jpg" }
//         ],
//         slug: "future-of-electric-cars",
//         views: 321,
//         comments: [
//             {
//                 content: "Very informative article about electric vehicles.",
//                 title: "Great insights",
//                 user: "60c72b2f9b1d4c1dfc8b4570",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The History of Chocolate",
//         subTitle: "From ancient Mesoamerica to modern-day treats",
//         createDate: new Date(),
//         writer: "Sarah Green",
//         category: "Food",
//         content: [
//             { type: 'title', fill: "Origins of Chocolate" },
//             { type: 'text', fill: "Chocolate has a rich history dating back to ancient times..." },
//             { type: 'img', fill: "history-of-chocolate.jpg" }
//         ],
//         slug: "history-of-chocolate",
//         views: 654,
//         comments: [
//             {
//                 content: "I love chocolate and this article was fascinating!",
//                 title: "Yummy history",
//                 user: "60c72b2f9b1d4c1dfc8b4571",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Top 10 Yoga Poses for Beginners",
//         subTitle: "Start your yoga journey with these easy poses",
//         createDate: new Date(),
//         writer: "David Lee",
//         category: "Health",
//         content: [
//             { type: 'title', fill: "Getting Started with Yoga" },
//             { type: 'text', fill: "Yoga is a great way to improve flexibility and reduce stress..." },
//             { type: 'img', fill: "yoga-poses.jpg" }
//         ],
//         slug: "top-10-yoga-poses-for-beginners",
//         views: 987,
//         comments: [
//             {
//                 content: "These poses are perfect for beginners like me!",
//                 title: "Helpful guide",
//                 user: "60c72b2f9b1d4c1dfc8b4572",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "How to Start a Garden",
//         subTitle: "Tips and tricks for beginner gardeners",
//         createDate: new Date(),
//         writer: "Linda Brown",
//         category: "Lifestyle",
//         content: [
//             { type: 'title', fill: "Beginner's Guide to Gardening" },
//             { type: 'text', fill: "Gardening is a relaxing and rewarding hobby..." },
//             { type: 'img', fill: "starting-a-garden.jpg" }
//         ],
//         slug: "how-to-start-a-garden",
//         views: 432,
//         comments: [
//             {
//                 content: "Great tips for starting a garden!",
//                 title: "Very useful",
//                 user: "60c72b2f9b1d4c1dfc8b4573",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Understanding Quantum Physics",
//         subTitle: "A simplified guide to a complex topic",
//         createDate: new Date(),
//         writer: "Michael Clark",
//         category: "Science",
//         content: [
//             { type: 'title', fill: "What is Quantum Physics?" },
//             { type: 'text', fill: "Quantum physics is the study of particles at the atomic and subatomic levels..." },
//             { type: 'img', fill: "quantum-physics.jpg" }
//         ],
//         slug: "understanding-quantum-physics",
//         views: 765,
//         comments: [
//             {
//                 content: "This article made quantum physics easy to understand.",
//                 title: "Well explained",
//                 user: "60c72b2f9b1d4c1dfc8b4574",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "10 Must-Visit Places in Europe",
//         subTitle: "Top destinations for your European vacation",
//         createDate: new Date(),
//         writer: "Emma Wilson",
//         category: "Travel",
//         content: [
//             { type: 'title', fill: "European Highlights" },
//             { type: 'text', fill: "Europe is full of incredible destinations to explore..." },
//             { type: 'img', fill: "europe-destinations.jpg" }
//         ],
//         slug: "must-visit-places-in-europe",
//         views: 888,
//         comments: [
//             {
//                 content: "Can't wait to visit these places!",
//                 title: "Great travel tips",
//                 user: "60c72b2f9b1d4c1dfc8b4575",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Benefits of Meditation",
//         subTitle: "Why you should start meditating today",
//         createDate: new Date(),
//         writer: "Olivia Brown",
//         category: "Health",
//         content: [
//             { type: 'title', fill: "Why Meditate?" },
//             { type: 'text', fill: "Meditation offers numerous health benefits..." },
//             { type: 'img', fill: "benefits-of-meditation.jpg" }
//         ],
//         slug: "benefits-of-meditation",
//         views: 555,
//         comments: [
//             {
//                 content: "Meditation has really helped me relax.",
//                 title: "Life-changing",
//                 user: "60c72b2f9b1d4c1dfc8b4576",
//                 date: new Date()
//             }
//         ]
//     },
//     // Add 10 more articles in a similar fashion...
//     {
//         mainTitle: "Guide to Digital Marketing",
//         subTitle: "How to boost your business online",
//         createDate: new Date(),
//         writer: "Sophia Martinez",
//         category: "Business",
//         content: [
//             { type: 'title', fill: "Introduction to Digital Marketing" },
//             { type: 'text', fill: "Digital marketing is essential for businesses today..." },
//             { type: 'img', fill: "digital-marketing.jpg" }
//         ],
//         slug: "guide-to-digital-marketing",
//         views: 600,
//         comments: [
//             {
//                 content: "This guide helped me improve my online marketing strategy.",
//                 title: "Very useful",
//                 user: "60c72b2f9b1d4c1dfc8b4577",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Art of Minimalist Living",
//         subTitle: "Simplify your life and live with less",
//         createDate: new Date(),
//         writer: "Liam Anderson",
//         category: "Lifestyle",
//         content: [
//             { type: 'title', fill: "Embracing Minimalism" },
//             { type: 'text', fill: "Minimalism is about living with less and finding joy in simplicity..." },
//             { type: 'img', fill: "minimalist-living.jpg" }
//         ],
//         slug: "art-of-minimalist-living",
//         views: 410,
//         comments: [
//             {
//                 content: "Minimalism has made my life so much better.",
//                 title: "Inspiring",
//                 user: "60c72b2f9b1d4c1dfc8b4578",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Ultimate Hiking Gear Guide",
//         subTitle: "What you need for your next adventure",
//         createDate: new Date(),
//         writer: "Ethan Walker",
//         category: "Outdoors",
//         content: [
//             { type: 'title', fill: "Essential Hiking Gear" },
//             { type: 'text', fill: "Having the right gear can make or break your hiking experience..." },
//             { type: 'img', fill: "hiking-gear.jpg" }
//         ],
//         slug: "ultimate-hiking-gear-guide",
//         views: 700,
//         comments: [
//             {
//                 content: "Great list of essential hiking gear!",
//                 title: "Very helpful",
//                 user: "60c72b2f9b1d4c1dfc8b4579",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Understanding Artificial Intelligence",
//         subTitle: "What AI is and how it's changing the world",
//         createDate: new Date(),
//         writer: "Isabella Harris",
//         category: "Technology",
//         content: [
//             { type: 'title', fill: "What is AI?" },
//             { type: 'text', fill: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines..." },
//             { type: 'img', fill: "artificial-intelligence.jpg" }
//         ],
//         slug: "understanding-artificial-intelligence",
//         views: 830,
//         comments: [
//             {
//                 content: "AI is such a fascinating topic, great article!",
//                 title: "Informative",
//                 user: "60c72b2f9b1d4c1dfc8b4580",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Top 10 Coding Languages to Learn",
//         subTitle: "Which programming languages are in demand?",
//         createDate: new Date(),
//         writer: "Mia Robinson",
//         category: "Technology",
//         content: [
//             { type: 'title', fill: "Introduction" },
//             { type: 'text', fill: "Learning to code is a valuable skill in today's digital age..." },
//             { type: 'img', fill: "coding-languages.jpg" }
//         ],
//         slug: "top-10-coding-languages",
//         views: 920,
//         comments: [
//             {
//                 content: "This list helped me decide which language to learn next.",
//                 title: "Great recommendations",
//                 user: "60c72b2f9b1d4c1dfc8b4581",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Impact of Climate Change",
//         subTitle: "How climate change is affecting our planet",
//         createDate: new Date(),
//         writer: "Noah King",
//         category: "Science",
//         content: [
//             { type: 'title', fill: "Climate Change Overview" },
//             { type: 'text', fill: "Climate change is one of the most pressing issues of our time..." },
//             { type: 'img', fill: "climate-change.jpg" }
//         ],
//         slug: "impact-of-climate-change",
//         views: 780,
//         comments: [
//             {
//                 content: "It's important to understand the impact of climate change.",
//                 title: "Eye-opening",
//                 user: "60c72b2f9b1d4c1dfc8b4582",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Basics of Home Brewing",
//         subTitle: "How to brew your own beer at home",
//         createDate: new Date(),
//         writer: "William Lewis",
//         category: "Food",
//         content: [
//             { type: 'title', fill: "Introduction to Home Brewing" },
//             { type: 'text', fill: "Home brewing is a fun and rewarding hobby..." },
//             { type: 'img', fill: "home-brewing.jpg" }
//         ],
//         slug: "basics-of-home-brewing",
//         views: 340,
//         comments: [
//             {
//                 content: "Great tips for getting started with home brewing.",
//                 title: "Very helpful",
//                 user: "60c72b2f9b1d4c1dfc8b4583",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "Exploring the World of Virtual Reality",
//         subTitle: "How VR is changing the way we interact",
//         createDate: new Date(),
//         writer: "James Scott",
//         category: "Technology",
//         content: [
//             { type: 'title', fill: "What is Virtual Reality?" },
//             { type: 'text', fill: "Virtual Reality (VR) is a simulated experience that can be similar to or completely different from the real world..." },
//             { type: 'img', fill: "virtual-reality.jpg" }
//         ],
//         slug: "exploring-virtual-reality",
//         views: 620,
//         comments: [
//             {
//                 content: "VR is so cool, this article explains it well.",
//                 title: "Well-written",
//                 user: "60c72b2f9b1d4c1dfc8b4584",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Rise of Remote Work",
//         subTitle: "How remote work is transforming businesses",
//         createDate: new Date(),
//         writer: "Charlotte Young",
//         category: "Business",
//         content: [
//             { type: 'title', fill: "The Shift to Remote Work" },
//             { type: 'text', fill: "Remote work has become increasingly popular in recent years..." },
//             { type: 'img', fill: "remote-work.jpg" }
//         ],
//         slug: "rise-of-remote-work",
//         views: 850,
//         comments: [
//             {
//                 content: "Remote work has really changed my life for the better.",
//                 title: "Insightful",
//                 user: "60c72b2f9b1d4c1dfc8b4585",
//                 date: new Date()
//             }
//         ]
//     },
//     {
//         mainTitle: "The Power of Positive Thinking",
//         subTitle: "How a positive mindset can change your life",
//         createDate: new Date(),
//         writer: "Avery Green",
//         category: "Health",
//         content: [
//             { type: 'title', fill: "Why Think Positive?" },
//             { type: 'text', fill: "Positive thinking can have a profound impact on your mental and physical health..." },
//             { type: 'img', fill: "positive-thinking.jpg" }
//         ],
//         slug: "power-of-positive-thinking",
//         views: 530,
//         comments: [
//             {
//                 content: "This article really motivated me to stay positive.",
//                 title: "Uplifting",
//                 user: "60c72b2f9b1d4c1dfc8b4586",
//                 date: new Date()
//             }
//         ]
//     }
// ];



// const creatData= (data)=> articleModel.create(data)

// export let luli = async()=>{
//     await connectToMongo()
//     articles.map(i=>creatData(i))
    
//     console.log('😉');
// }



