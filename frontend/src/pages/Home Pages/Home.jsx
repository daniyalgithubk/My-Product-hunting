
import img from "../../Images/img.jpg";
import Search from "../../components/Search/Search";

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
      <div >
        <label className="text-2xl font-bold">Search here</label>
        <Search />
      </div>

    </div>
  );
};

export default Home;