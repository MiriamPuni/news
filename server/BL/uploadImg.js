
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;
      const result = await cloudinary.uploader.upload(file);
      res.status(200).json(result);
    } catch (error) {
      console.error('שגיאה בהעלאת הקובץ:', error);
      res.status(500).json({ error: 'שגיאה בהעלאת הקובץ' });
    }
  } else {
    res.status(405).json({ error: 'שיטה לא מותרת' });
  }
}
// import {v2 as cloudinary} from 'cloudinary';
// const fs = require('fs');


// // cloudinary.config({ 
// //     cloud_name: process.env.CLOUD_NAME, 
// //     api_key: process.env.API_KEY , 
// //     api_secret:  process.env.API_KEY
// //   });

//   //3 fun 
//   //formdata or img base64
//   //get all images by folder cloud_name

// //   const uplodata = (img) => {
// //     cloudinary.v2.uploader
// //       .upload(img )
// //       .then((result) => console.log(result))
// //       .catch((error) => console.error(error));
// //   };

// const uploadImage = async (imagePath) => {
//   try {
//     // קריאת הקובץ לזיכרון
//     // const imageBuffer = fs.readFileSync(imagePath);
    
//     // הגדרות להעלאת הקובץ
//     const uploadOptions = {
//       folder: 'my_folder', // הספרייה שבה הקובץ יאוחסן
//       use_filename: true, // שימוש בשם הקובץ המקורי
//       unique_filename: false, // אי-יצירת שם קובץ ייחודי
//       overwrite: true, // החלפת הקובץ אם הוא כבר קיים
//       // ניתן להוסיף הגדרות נוספות כגון שינוי גודל, תגיות וכדומה
//     };

//     cloudinary.uploader.upload_stream()
//     // העלאת הקובץ לענן
//     const uploadResponse = await cloudinary.uploader.upload_stream(uploadOptions, (error, result) => {
//       if (error) {
//         return Promise.reject(error);
//       }
//       return Promise.resolve(result);
//     }).end(imageBuffer);

//     // החזרת תוצאת ההעלאה
//     return uploadResponse;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw error;
//   }
// };

// // שימוש בפונקציה
// uploadImage('shirt.jpg')
//   .then((result) => {
//     console.log('Image uploaded:', result.secure_url);
//   })
//   .catch((error) => {
//     console.error('Error uploading image:', error);
//   });