import React from 'react'
const imageStyles = {
  width: '100vw', // Set width to 100% of viewport width
  height: '100vh', // Set height to 100% of viewport height
  objectFit: 'cover', // Scale the image while maintaining its aspect ratio to cover the entire container
};

export default function Home() {
  return (
    <div>
        <img src={process.env.PUBLIC_URL + '/Home.jpg'} alt="Description of your image" style={imageStyles}  />
    </div>
  )
}
