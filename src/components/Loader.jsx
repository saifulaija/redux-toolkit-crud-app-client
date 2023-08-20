
import { RiLoader4Line } from 'react-icons/ri';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-2">
        <RiLoader4Line className="text-4xl animate-spin" />
        <span className="text-lg">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
