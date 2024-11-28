const NewsLetter = () => {
    return (
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          {/* Heading and Description */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p className="text-gray-200">
              Subscribe to our newsletter to get the latest job listings and career tips delivered straight to your inbox.
            </p>
          </div>
  
          {/* Subscription Form */}
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-1/2 px-4 py-2 rounded-md text-gray-700"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-md font-medium transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default NewsLetter;
  