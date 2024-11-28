import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import API_URL from "../constants/constant"

const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${API_URL}/users/login`, {
                email,
                password
            })

            console.log(response.data)
            const nameOfUser = response.data.user.name
            navigate('/home', { state: { name: nameOfUser } })
        } catch (error) {
            console.error(error.response?.data?.message || "An error occurred");
            alert(error.response?.data?.message || "Login failed. Please try again.");
        }
    }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
          <input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          className="w-full py-2 mt-4 text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-primary"
          type="submit"
        >
           Login
        </button>
      </form>
      <p className="mt-6 text-sm text-center">
          Are you new?{' '}
          <Link to="/register" className="text-primary hover:underline">
            Go back
          </Link>
        </p>
    </div>
  </div>
    </>
  )
}

export default LoginPage