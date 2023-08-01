import React from 'react';
import './CV.css'
const CV = () => {
  const handleDownload = () => {
    // get the relative path of pdf
   const cv_path = '../../MY_CV/my cv.docx'
   // fetch this path using fetch
   fetch(cv_path)
   // make response as a blob , blob represents raw binary data, typically used for handling binary data like images, audio, and in this case, a PDF file.
   .then((response) => response.blob())
   .then((blob) =>{
    // create temp_url for make it as a href for a tag
    const temp_url = URL.createObjectURL(blob) ;
    const a = document.createElement("a");
    a.href = temp_url ;
    a.download = "my cv.docx" ;
    a.target = "_blank" ;
    a.click() ;
    // remove the temp_url
    URL.revokeObjectURL(temp_url) ;
   })
   // handle error
   .catch((error) =>{
     console.log("Error downloading the CV:" + error );
   })
  };

  return (
    <div className='container'>
      <button
      onClick={handleDownload}>Download CV</button>
    </div>
  );
};

export default CV;
