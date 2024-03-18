import React from "react";

const MyPhoto = () => {
  return (
    <div
      className="sm:w-[500px] w-4/5 sm:h-[450px] h-[350px] rounded-md "
      style={{
        backgroundImage: "url('/images/my_photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default MyPhoto;
