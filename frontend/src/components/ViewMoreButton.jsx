import { Link } from "react-router-dom";
const ViewMoreButton = () => {
  return (
    <>
      <div className="p-5 grid place-items-center">
      <Link
      to="/jobs"
      className="inline-block bg-black text-white rounded-lg px-4 py-3 w-full max-w-lg text-center hover:bg-gray-700"
    >
      View More Jobs
    </Link>
      </div>
    </>
  );
};

export default ViewMoreButton;
