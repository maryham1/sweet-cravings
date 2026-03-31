import { useSelector } from "react-redux";

function CreateUser() {
  // const username = useSelector((state) => state.user.username);
  // if (!username) return null;
  return (
    <div>
      <h1 className="text-black text-lg laptop:text-3xl w-[160px] tablet:w-auto laptop:w-auto font-poppins">
        Welcome to the <span className="text-red-800">Dessert</span> Menu
      </h1>
    </div>
  );
}

export default CreateUser;
