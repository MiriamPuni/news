'use client';
import React, { useState } from 'react';

export default function ClientComponent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    // שליחת בקשת fetch לנתיב API בצד השרת עם נתוני הקובץ
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('server/BL/uploadImg.js', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('שגיאה בהעלאת הקובץ:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>העלה</button>
    </div>
  );
}
// 'use client'
// import React from 'react'
// const cloudinary = require('cloudinary').v2;

// export default function index() {
//     cloudinary.config({
//         secure: true
//       });

//       console.log(cloudinary.config());
//  const uploadImage = async (imagePath) => {
//         const options = {
//             use_filename: true,
//             unique_filename: false,
//             overwrite: true,
//           };
//           try {
//             // Upload the image
//             const result = await cloudinary.uploader.upload(imagePath, options);
//             console.log(result);
//             return result.public_id;
//           } catch (error) {
//             console.error(error);
//           }
//       };

//       const getAssetInfo = async (publicId) => {

//         // Return colors in the response
//         const options = {
//           colors: true,
//         };
    
//         try {
//             // Get details about the asset
//             const result = await cloudinary.api.resource(publicId, options);
//             console.log(result);
//             return result.colors;
//             } catch (error) {
//             console.error(error);
//         }
//     };
    
//     const mainFunction = async()=>{
//         const imagePath = 'public\lumi.jpg';
//         const publicId = await uploadImage(imagePath);
//         const colors = await getAssetInfo(publicId);
//         console.log(colors);
//     }
    
 
//     return (
//         // <form onSubmit={uploadToCloudinary}>
//         <form onSubmit={()=>mainFunction()}>

//         <input type="file" 
//         // onChange={handleFileChange}
//          />
//         <button type="submit">Upload</button>
//       </form>
//     )
// }

// import React, { useState } from 'react'


// export default function index() {
//     const [file, setFile] = useState(null);
//     const uploadToCloudinary = async (e) => {
//         e.preventDefault();
    
//         if (!file) {
//           return;
//         }
   
        
//             const formData = new FormData();
//             formData.append('file', file);
//             formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);
        
//             try {
//               const response = await fetch(
//                 `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
//                 {
//                   method: 'POST',
//                   body: formData,
//                 }
//               );
        
//               const data = await response.json();
//               console.log(data);
//             } catch (error) {
//               console.error('Error uploading file:', error);
//             }
//           };
        
//           const handleFileChange = (e) => {
//             setFile(e.target.files[0]);
//           };
    
//     // async function uploadToCloudinary(formData) {
//     //     formData.append("upload_preset", "my_preset")
//     //     fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
//     //         method: "POST",
//     //         body: formData, headers: { 'Content-Type': "multipart/form-data'" }
//     //     })
//     // }
// }

// // cloudinary.v2.uploader
// // .text(text)
// // .then(result=>console.log(result));

// // cloudinary.v2.uploader
// // .upload("/home/sample.jpg")
// // .then(result=>console.log(result));