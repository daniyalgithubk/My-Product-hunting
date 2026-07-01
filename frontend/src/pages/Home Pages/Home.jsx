import img from "../../Images/img.jpg";
import Search from "../../components/Search/Search";

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
<<<<<<< HEAD
      <div className="flex flex-col gap-y-14">
        <h1 className="text-amber-700 font-extrabold text-3xl text-center">Welcome to Hunting Era</h1>
        <h1 className="text-3xl font-extrabold text-black mb-14 text-center">Home Page</h1>
      </div>
    
=======
      <div >
        <label className="text-2xl font-bold">Search here</label>
        <Search />
      </div>

>>>>>>> a064230408e92e7fbca6218d3f76e9215bef7aa8
    </div>
  );
};

export default Home;