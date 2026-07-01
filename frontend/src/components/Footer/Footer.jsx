import { Link } from 'react-router-dom'
import log from '../../images/log.png'

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white p-6">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* first part */}
        <div className="flex flex-col">
          <img src={log} alt="Hunting Era" className="w-60 h-12 lg:w-80" />
          <p className="text-xs lg:text-xl lg:mt-2">
            At Hunting Era, we are committed to <br /> providing our users with the best<br /> possible experience.
          </p>
        </div>

        {/* second part */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-sm lg:text-2xl">Quick Links</h3>
          <div className="text-xs flex flex-col gap-3 lg:text-base lg:mt-2">
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/competitor">Competitor</Link>
            <Link to="/products">Products</Link>
            <Link to="/vendors">Vendors</Link>
          </div>
        </div>

        {/* third part */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm lg:text-2xl">Head Office</h3>
<<<<<<< HEAD
          <div className="text-xs flex flex-col gap-3 lg:text-base">
            <p>Islamabad, Pakistan</p>
            <p>Phone: +92 3025454696</p>
            <p>Email: khattakd87@gmail.com</p>
            <p>Office Time: 9:00AM - 6:00PM</p>
=======
          <div className="text-xs flex flex-col gap-3 lg:text-base lg:mt-2">
            <h5>Islamabad, Pakistan</h5>
            <h5>Phone: +92 3025454696</h5>
            <h5>Email: khattakd87@gmail.com</h5>
            <h5>Office Time: 9:00AM - 6:00PM</h5>

>>>>>>> a064230408e92e7fbca6218d3f76e9215bef7aa8
          </div>
        </div>

        {/* fourth part */}
        <div className="flex flex-col gap-2 lg:mr-16">
          <h3 className="font-bold text-sm lg:text-2xl">Newsletter</h3>
          <p className="text-orange-400 text-xs lg:text-base lg:mt-4">Subscribe our newsletter</p>
          <div className="flex gap-2">
            <input
              type="email"
              className="rounded-lg p-2 text-black bg-white lg:w-70 w-full"
              placeholder="Email"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-black px-4 rounded-lg font-semibold text-sm transition">
              Send
            </button>
          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="text-center mt-6 text-orange-400">
        @Daniyal Khattak
      </div>

    </div>
  )
}

export default Footer