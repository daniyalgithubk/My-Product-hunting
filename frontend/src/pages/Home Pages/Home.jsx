import img from "../../Images/img.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-1 items-center justify-center w-full min-h-[100vh] lg:min-h-[100vh]"
    >
      <div className="flex flex-col gap-y-14">
        <h1 className="text-amber-700 font-extrabold text-3xl text-center">Welcome to Hunting Era</h1>
        <h1 className="text-3xl font-extrabold text-black mb-14 text-center">Home Page</h1>
      </div>
    
    </div>
  );
};

export default Home;