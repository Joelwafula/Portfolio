import React from "react";

import ImageAssest from '../assests/myImage.jpg'



const ImageProp = () => {
  return (
    <div className="bg-sky-400 h-100 w-60 object-fit relative  pt-11 rounded-t-3xl">
      <img className=" w-25 h-25" src={ImageAssest} alt="image"/>     
    </div>
  )
}

export default ImageProp
