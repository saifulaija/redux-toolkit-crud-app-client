
import { Link } from "react-router-dom"; // If you're using React Router
import { RiHome2Line, RiUserLine, RiAddLine } from "react-icons/ri";
import { FaUserGraduate} from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
      const users = useSelector(state=> state.users.users)
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <FaUserGraduate className="w-8 h-8 mr-2" />
          <span className="text-lg font-semibold">User Management</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="flex items-center">
              <RiHome2Line className="mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/show-users" className="flex items-center">
              <RiUserLine className="mr-1" />
              Show Users({users.length})
            </Link>
          </li>
          <li>
            <Link to="/create-user" className="flex items-center">
              <RiAddLine className="mr-1" />
              Add User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
