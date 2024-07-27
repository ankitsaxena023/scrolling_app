import React from "react";
import { avatars, images } from "../data/data";

const Scrolling = () => {
  return (
    <>
      {/* Avatar Section */}
      <div className="relative w-full max-w-full mb-8">
        <div className="flex whitespace-nowrap overflow-y-auto">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              className="w-16 h-16 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
      {/* Images Section */}
      <div className="flex flex-col overflow-y-auto max-h-80 w-full">
        {images.map((image, index) => (
          <div key={index} className="mb-2">
            <img src={image} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Scrolling;
