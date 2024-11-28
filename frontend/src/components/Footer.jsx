import {  Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-gray-400">
                JobConnect is your go-to platform for connecting talented
                individuals with exceptional career opportunities. Discover your
                dream job today!
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/home" className="text-gray-400 hover:text-yellow-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/view-jobs" className="text-gray-400 hover:text-yellow-400">
                    View Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/all-jobs" className="text-gray-400 hover:text-yellow-400">
                    Add Job
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <Link
                  to="https://facebook.com"
                  className="text-gray-400 hover:text-blue-500"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://twitter.com"
                  className="text-gray-400 hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="https://linkedin.com"
                  className="text-gray-400 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  to="https://instagram.com"
                  className="text-gray-400 hover:text-pink-500"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} JobConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  