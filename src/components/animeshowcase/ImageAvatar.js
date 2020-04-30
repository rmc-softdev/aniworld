import React from "react";

const ImageAvatar = ({ image }) => {
  return (
    <div className="img box">
      <img src={image} className="anime image" alt="" />
    </div>
  );
};

export default ImageAvatar;
