
import img from "../../Images/img.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
      className="flex-1 flex items-center justify-center w-full"
    >
      <h1 className="text-3xl text-black font-extrabold">Home Page</h1>
    </div>
  );
};

export default Home;