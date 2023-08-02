import React from 'react';
import cv_img from '../../images/Screenshot (160).png';
import './CV.css';

const CV = () => {
  const handleDownload = () => {
    // Define the relative path to the CV document
    const cv_path = '../../MY_CV/my cv.docx';

    // Fetch the CV document using the defined path
    fetch(cv_path)
      .then((response) => response.blob()) // Convert response to a Blob
      .then((blob) => {
        // Create a temporary URL for the Blob
        const temp_url = URL.createObjectURL(blob);

        // Create an <a> element to initiate download
        const a = document.createElement("a");
        a.href = temp_url;
        a.download = "my cv.docx"; // Set the download filename
        a.target = "_blank"; // Open in a new tab
        a.click(); // Programmatically click the <a> element

        // Revoke the temporary URL to free up memory
        URL.revokeObjectURL(temp_url);
      })
      .catch((error) => {
        console.log("Error downloading the CV: " + error);
      });
  };

  return (
    <div className='container' >
      {/* Display CV image */}
      <img src={cv_img} alt='cv-img' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />

      {/* Button to trigger the CV download */}
      <button onClick={handleDownload} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Download CV</button>
    </div>
  );
};

export default CV;
