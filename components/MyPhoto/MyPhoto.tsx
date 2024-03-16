import React from "react";

const MyPhoto = () => {
  return (
    <div
      className="sm:w-1/5 w-2/5 h-[350px] rounded-md"
      style={{
        backgroundImage: "url('/images/my_photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default MyPhoto;
