import { Link } from 'react-router-dom'
import log from '../../images/log.png'

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white p-6 ">

      <div className="flex flex-row justify-between gap-10">

        {/* first part */}
        <div className="flex flex-col">
          <img src={log} alt="Hunting Era" className="w-60 h-12" />
          <p className="text-xs">
            At Hunting Era, we are committed to <br/> providing our users with the best<br/> possible experience.
          </p>
        </div>

        {/* second part */}
        <div className="flex flex-col gap-2 ">
          <h3 className="font-bold text-sm">Quick Links</h3>
          <div className="text-xs flex flex-col gap-3">
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/competitor">Competitor</Link>
            <Link to="/products">Products</Link>
            <Link to="/vendors">Vendors</Link>
          </div>
          
        </div>

        {/* third part */}
        <div className="flex flex-col gap-1 ">
          <h3 className="font-bold text-sm">Head Office</h3>
          <div className="text-xs flex flex-col gap-3">
            <h5>Islamabad, Pakistan</h5>
            <h5>Phone: +92 3025454696</h5>
            <h5>Email: khattakd87@gmail.com</h5>
            <h5>Office Time: 9:00AM - 6:00PM</h5>

          </div>
          
        </div>

        {/* fourth part */}
        <div className="flex flex-col gap-2  ">
          <h3 className="text-sm">Newsletter</h3>
          <h5 className="text-orange-400 text-xs">Subscribe our newsletter</h5>
          <input className="rounded-lg p-2 text-black bg-white" placeholder="Email" />
        </div>

      </div>

      {/* bottom */}
      <div className="text-center mt-6 text-orange-400 ">
        @Daniyal Khattak
      </div>

    </div>
  )
}

export default Footer