
import { Link } from "react-router-dom"; // If you're using React Router

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-60vh">
      <h2 className="text-2xl font-semibold mb-4">No Users Found</h2>
      <p className="text-gray-500 mb-8">There are currently no users available.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Back Home
      </Link>
    </div>
  );
};

export default EmptyState;
