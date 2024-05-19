const puppeteer = require("puppeteer");

export async function start() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.now14.co.il/tag/%D7%9E%D7%91%D7%96%D7%A7%D7%99%D7%9D/#518837', { waitUntil: 'networkidle0' });
    const trData = await page.$$eval('.archive-post-unit', units => {
      return units.map(unit => {
        // const visiblePart = unit.querySelector('.visible-part') ? unit.querySelector('.visible-part').innerHTML : '';
        const title = unit.querySelector('a').innerHTML.trim()
        const time = unit.querySelector('.time').innerHTML.trim()
        const text = unit.querySelector('p').innerHTML.trim()

        const link = unit.querySelector('a').href
        // const hiddenPart = unit.querySelector('.hidden-part') ? unit.querySelector('.hidden-part').innerHTML : '';
        return { link, title ,time , text};
      });
    });

    await browser.close();
    return trData
}


// export async function start() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(
//         "https://rotter.net/news/news.php"
//     );

//     setTimeout(async () => {
//         await getData(page);
//         await browser.close();
//         // page.click(".load-more-events").then(() => {
//         //   setTimeout(async () => {
//         //   }, 2000);
//         // });
//     }, 2000);
// }

// import axios from "axios"
// import Cheerio, { load } from "cheerio";
// import fs from "fs";

// const getData = async (page) => {
//     console.log({ page });
//     const events = await page.evaluate(() => {
//         const data = Array.from(document.querySelectorAll('tr'));
//         return data
//             .map((event) => {
//                 console.log(event);
//             })
//             .filter((event) => event);
//         });
//         console.log(events);
//     };
    
    
    
//     (async () => {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
        
//         // Navigate to the URL
//         await page.goto('https://rotter.net/news/news.php');
//         console.log('1');
//         // Wait for the dynamic content to load
//         await page.waitForSelector('tbody', { timeout: 30000 }); // Wait for up to 30 seconds for the 'tr' selector to appear
//         console.log('2');
        
//         // Extract data from <tr> elements
//         const trData = await page.$$eval('tr', trs => trs.map(tr => tr.innerHTML));
//         console.log('3');
        
//         console.log({ trData });
        
//         await browser.close();
//     })();
    
    // cron.schedule('59 * * * * *', () => {
        //   start();
        // });
        
        // export const getDataFromRoter = async () => {
//     try {
//         const { data } = await axios('https://rotter.net/news/news.php')
//         console.log(data);

//     } catch (error) {
    
    //         console.log({ error: error.response.data });
    //         const $ = load(error.response.data);
    //         fs.writeFileSync('./m.html', error.response.data)
    //         const tr = $('<tr>')
    //         console.log({ tr });
    
    //     }
    // }
    // if (
    //   !event.children[0].children[1].children[3].innerHTML.includes(
    //     "אירוע שהיה"
    //   )
    // ) {
    //   const imge = event.children[0].children[0].style.backgroundImage
    //     .replace('url("', "")
    //     .replace('")', "");
    //   const title = event.children[0].children[1].children[0].innerText;
    //   const description =
    //     event.children[0].children[1].children[1].innerText;
    //   const location = event.children[0].children[1].children[2].innerText;
    //   const tempDate =
    //     event.children[0].children[1].children[3];
    //   const fullDate =
    //     tempDate.children[2] && tempDate.innerHTML !== "null"
    //       ? tempDate.innerHTML.split(".").join("/")
    //       : null;
    //   const time  =  tempDate.children[3]?tempDate.children[3].innerHTML:null
    //   const ticketLink =
    //     event.children[0].children[1].children[4].children[5].href;
    //   return { imge, title, description, fullDate,time, location, ticketLink };
    // }