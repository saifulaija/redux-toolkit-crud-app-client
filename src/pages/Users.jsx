import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../redux/userSlice";
import { RiDeleteBin5Line, RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const Users = () => {
      const dispatch = useDispatch();
      const users = useSelector(state=>state.users.users)
      useEffect(()=>{
            const fetchData = async()=>{
                 
                  try {
                        const response = await axios.get('http://localhost:5000/users');
                        dispatch(getUser(response.data));
                        console.log(response.data);
                  } catch (error) {
                        console.log(error);
                  }

            }
            fetchData()
      },[])


  const handleDelete=(id)=>{

      axios.delete('http://localhost:5000/delete/'+id)
      .then(res=>{
            dispatch(deleteUser({id}))
            console.log(res);
      })
      .catch(err=>{
            console.log(err);
      })

  }

      return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded-lg border border-gray-300">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600 mb-2">Email: {user.email}</p>
                <p className="text-gray-600 mb-2">Age: {user.age}</p>
                <div className="flex justify-end">
                 
                <button onClick={()=>handleDelete(user.id)}>
                        
                        <RiDeleteBin5Line
                          className="text-red-600 cursor-pointer mr-2"
                          
                        /></button>
                  <Link to={`/update/${user.id}`}>
                  <RiPencilLine
                    className="text-blue-600 cursor-pointer"
                   
                  /></Link>
                </div>
              </div>
            ))}
          </div>
      );
};

export default Users;