import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-full py-10 px-4">
      <form
        className="
          flex flex-col gap-3
          bg-white text-black
          rounded-2xl shadow-2xl
          p-4 md:p-5 lg:p-8
          w-full max-w-xs md:max-w-sm lg:max-w-md
          border border-gray-100
        "
      >
        <h1 className="text-2xl md:text-xl lg:text-3xl font-extrabold text-center text-gray-800 mb-1">
          Sign Up
        </h1>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-xs lg:text-sm font-semibold text-gray-600">
            Name
          </label>
          <input
            placeholder="Enter name"
            className="
              border border-gray-300 rounded-lg
              px-3 py-2 md:px-2 md:py-1.5 lg:px-3 lg:py-2
              text-sm md:text-xs lg:text-base
              outline-none focus:ring-2 focus:ring-blue-500 transition
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-xs lg:text-sm font-semibold text-gray-600">
            Email Address
          </label>
          <input
            placeholder="Enter email"
            className="
              border border-gray-300 rounded-lg
              px-3 py-2 md:px-2 md:py-1.5 lg:px-3 lg:py-2
              text-sm md:text-xs lg:text-base
              outline-none focus:ring-2 focus:ring-blue-500 transition
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-xs lg:text-sm font-semibold text-gray-600">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="
              border border-gray-300 rounded-lg
              px-3 py-2 md:px-2 md:py-1.5 lg:px-3 lg:py-2
              text-sm md:text-xs lg:text-base
              outline-none focus:ring-2 focus:ring-blue-500 transition
            "
          />

          <div className="text-xs md:text-[10px] lg:text-xs mt-1 flex flex-col gap-1">
            <p className="text-red-500">
              ❌ Password has special characters.
            </p>
            <p className="text-red-500">
              ❌ Password has a number.
            </p>
            <p className="text-red-500">
              ❌ Password has a capital letter.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm md:text-xs lg:text-sm font-semibold text-gray-600">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="
              border border-gray-300 rounded-lg
              px-3 py-2 md:px-2 md:py-1.5 lg:px-3 lg:py-2
              text-sm md:text-xs lg:text-base
              outline-none focus:ring-2 focus:ring-blue-500 transition
            "
          />
        </div>

        <button
          className="
            rounded-lg
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold transition
            h-9 md:h-8 lg:h-10
            text-sm md:text-xs lg:text-base
            mt-2
          "
        >
          Register
        </button>

        <h2 className="text-sm md:text-xs lg:text-sm text-center text-gray-600 mt-2">
          Register As a Vendor?{" "}
          <Link
            to="/vendor-signup"
            className="text-blue-500 underline"
          >
            Register
          </Link>
        </h2>

        <h2 className="text-sm md:text-xs lg:text-sm text-center text-gray-600">
          Have an Account?{" "}
          <Link
            to="/signin"
            className="text-blue-500 underline"
          >
            Login
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Signup;