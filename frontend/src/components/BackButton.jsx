import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <>
    <div className="p-5">
    <Link
    to="/home"
    className="inline-block bg-black text-white rounded-lg px-10 py-3 text-center hover:bg-gray-700"
  >
    Go Back
  </Link>
    </div>
    </>
  )
}

export default BackButton