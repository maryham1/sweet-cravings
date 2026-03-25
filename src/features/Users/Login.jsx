import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./usersSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(name));
    if (!name) return null;
    navigate("/menu");
  }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        className="bg-amber-950 p-[20px] w-[300px] h-[200px] flex items-center justify-around flex-col rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Input your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-pink-200 p-[10px] rounded-xl outline-none border-2 placeholder:text-gray-200/50"
        />
        <button className="bg-pink-100 p-[10px] rounded-xl w-[100px] text-amber-950 text-lg border ">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
