import { useSelector } from "react-redux";

function CreateUser() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div>
      <h1 className="text-black text-lg laptop:text-3xl w-[160px] laptop:w-auto">
        <span className="capitalize text-red-800">{username}</span> , welcome to
        the Dessert Menu
      </h1>
    </div>
  );
}

export default CreateUser;
