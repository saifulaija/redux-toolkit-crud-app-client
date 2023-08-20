import axios from "axios";
import { RiAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    console.log(age, email, name);
    axios
      .post("http://localhost:5000/user", {name, email, age })
      .then((res) => {
        dispatch(addUser(res.data));
        console.log(res);
        navigate("/show-users");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white p-6 max-w-[800px] mx-auto my-20 rounded-lg border-[1px]">
      <h2 className="text-lg font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          <RiAddLine className="mr-2" />
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
