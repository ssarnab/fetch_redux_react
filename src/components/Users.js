import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userAdded } from "../store/users";
import User from "./User";

const Users = () => {
  const { data: users, loading } = useSelector((state) => state.entities.users);

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => dispatch(userAdded({ users: res.data })))
        .catch((e) => console.log(e));
    }, 2000);
  }, []);
  return (
    <div>
      {loading === true ? (
        <div className="spinner-border text-primary m-auto" role="status"></div>
      ) : (
        <div className="row">
          {users.map((user) => (
            <User user={user} key={user.id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
