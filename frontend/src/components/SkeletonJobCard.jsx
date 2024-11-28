
const SkeletonJobCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 shadow-lg w-11/12 p-6 rounded-xl my-4 mx-auto transform transition-all hover:scale-105 hover:shadow-xl animate-pulse">
      <div className="flex justify-between items-center mb-4">
        {/* Placeholder for Job Title */}
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        {/* Placeholder for Job Type */}
        <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
      </div>
      <hr className="border-gray-200 my-2" />
      {/* Placeholder for Job Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>
      <hr className="border-gray-200 my-2" />
      {/* Placeholder for Location and Salary */}
      <div className="flex justify-between items-center text-sm text-gray-600 my-4">
        <div className="flex items-center">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </div>
      {/* Placeholder for Button */}
      <div className="h-10 bg-gray-300 rounded-lg"></div>
    </div>
  );
};

export default SkeletonJobCard;
