/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
const HeroCard = ({
  message1 = "Find Your Dream Tech Job",
  message2 = "Explore a wide range of tech and financial industry jobs and connect with top companies.",
  button = true,
}) => {

  const location = useLocation();
  const nameOfUser = location.state?.name;

  return (
    <div className="w-full h-[500px] bg-secondary grid place-items-center">
    {button && (
      <h1 className="text-2xl font-bold text-gray-800"><p className="text-white">Welcome, <span className="font-medium">{nameOfUser}</span></p></h1>
    )}
      <div className="text-center">

        <h1 className="text-4xl font-bold text-white">{message1}</h1>
        <p className="mt-4 text-xl text-white">{message2}</p>
        {button && (
          <button className="mt-8 px-6 py-3 bg-white text-secondary font-bold rounded-md shadow-md hover:bg-gray-100">
            <Link to="/jobs">Get Started</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
