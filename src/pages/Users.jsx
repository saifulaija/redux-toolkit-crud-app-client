import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../redux/userSlice";
import { RiDeleteBin5Line, RiPencilLine } from "react-icons/ri";
import { Link, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import EmptyState from "./EmptyState";

const Users = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        dispatch(getUser(response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then((res) => {
        dispatch(deleteUser({ id }));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto my-20">
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
            >
              <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-2">Email: {user.email}</p>
              <p className="text-gray-600 mb-2">Age: {user.age}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  <RiDeleteBin5Line className="mr-1" />
                  Delete
                </button>
                <Link
                  to={`/update/${user.id}`}
                  className="flex items-center px-3 py-1 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <RiPencilLine className="mr-1" />
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Users;
