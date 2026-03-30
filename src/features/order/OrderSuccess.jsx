import { useParams, Link } from "react-router-dom";

function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <div className="max-w-[300px] m-auto text-center mt-50 bg-white flex flex-col gap-5 items-center  p-10 rounded-xl shadow shadow-md laptop:max-w-xl laptop:mt-20">
      <h1 className="text-lg font-bold text-green-600  font-poppins laptop:text-3xl">
        🎉 Order Successful!
      </h1>
      <div>
        <p>Your order ID:</p>

        <p className="bg-pink-100 p-3 rounded my-4 font-mono font-poppins text-sm">
          {orderId}
        </p>
      </div>

      <Link
        to="/menu"
        className="bg-amber-900 text-white w-[170px] font-poppins px-6 py-3 rounded"
      >
        Back to Menu
      </Link>
    </div>
  );
}

export default OrderSuccess;
