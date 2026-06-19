import React from "react";
import img from "../../Images/img.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center"
    >
     <h1 className=" text-3xl text-black font-extrabold">Home Page</h1>
    </div>
  );
};

export default Home;