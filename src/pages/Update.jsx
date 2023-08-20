import axios from "axios";
import { RiAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const user = users.find((u) => u.id === id);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    console.log(age, email, name);
    axios
      .put("http://localhost:5000/update/" + id, { name, email, age })
      .then((res) => {
        dispatch(updateUser({ id, name, email, age }));
        console.log(res);
        navigate("/show-users");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white p-6 max-w-[800px] mx-auto my-20 rounded-lg border-[1px]">
      <h2 className="text-lg font-semibold mb-4">Update User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            name="name"
            defaultValue={user?.name}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            name="email"
            defaultValue={user?.email}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            name="age"
            defaultValue={user?.age}
          />
        </div>
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          <RiAddLine className="mr-2" />
          Update User
        </button>
      </form>
    </div>
  );
};

export default Update;
