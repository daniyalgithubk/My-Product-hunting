
import img5 from "../../images/img5.jpg";
import img2 from "../../images/img2.jpg";
import img6 from "../../images/img6.png";

const About = ({isOpen , setIsOpen}) => {
  return (
    <div>

      {/* First Part */}
      <div
  style={{
    backgroundImage: `url(${img5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "34vh",
  }}
  className="flex items-center justify-center relative"
>
  <div className="absolute inset-0 bg-blue-300/40"></div>
  <h1 className="relative text-white text-3xl font-extrabold z-10">About Page</h1>
</div>

      {/* Second Part */}
      <div className="flex flex-row p-4 gap-6 md:gap-10 mt-10">
        <div>
          <h3 className="text-orange-400 font-extrabold">About Us</h3>
          <h2 className="text-amber-700 font-bold">Welcome to Hunting Era</h2>

          <p className="text-[10px] text-justify max-w-xs leading-6">
            Hunting Era is a comprehensive website that helps users find the
            best deals on products, analyze keywords, and locate vendors. Our
            platform allows users to easily search for competitors of different
            products, giving them a better understanding of the market and helping
            them make more informed purchasing decisions.
          </p>

          <ul className="grid grid-cols-2 gap-4 pt-4 text-xs">
            <li>Find Trendings</li>
            <li>Find Compitators</li>
            <li>Find Vendors</li>
            <li>Book Products</li>
          </ul>
        </div>

        <div>
          <img
            src={img2}
            alt="image"
            className="w-90 h-60 md:w-78 md:h-64"
          />
        </div>
      </div>

      {/* Third Part */}
      <div className="flex gap-6 p-4 mt-10">

        <div>
          <img
            src={img5}
            alt="hands and desk"
            className="w-90 h-60 md:w-74 md:h-64"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-sm text-justify max-w-sm text-amber-700 font-bold">
            We Are Committed To Provide<br />
            Safe Purchasing Environment
          </h2>

          <p className="text-[10px] text-justify max-w-xs leading-6">
            At Hunting Era, we are committed to providing our users with the best possible
            experience. Whether you are a consumer looking for the best deal on a product
            or a business looking to improve your online presence, Hunting Era has the tools
            and resources you need to succeed.
            In addition to product comparisons, Hunting Era also offers a powerful keyword
            analysis tool that allows users to identify the most relevant and popular keywords
            for their products.
          </p>

          <h2 className="text-sm text-yellow-600">Need Any Help? 24/7</h2>
          <h3 className="text-xs">+92 3025454696</h3>
        </div>

      </div>

      {/* Fourth Part  */}
      <div
        className="mt-28 flex items-center justify-center relative bg-red-500 mt-10"
        style={{
            backgroundImage: `url(${img6})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            height: "70vh",
          }}
        >

        <div className="absolute inset-0 bg-black/40"></div>

     
        <div className="relative text-center text-white">
          <h1 className="font-bold text-4xl">
            Do You Want to Earn<br />
            With Us? So Don't Be<br />
            Late
          </h1>

          <div className="flex gap-6 justify-center mt-4">
            <button className="border px-4 py-2 rounded-md">
              Become Dropshipper
            </button>
            <button className="border px-4 py-2 rounded-md">
              Become Vendor
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;