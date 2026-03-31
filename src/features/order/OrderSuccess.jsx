import { useParams, Link, useSearchParams } from "react-router-dom";

function OrderSuccess() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  return (
    <div className="max-w-[300px] m-auto text-center mt-50 bg-white flex flex-col gap-5 items-center p-10 rounded-xl shadow shadow-md tablet:max-w-xl tablet:mt-20 laptop:max-w-xl laptop:mt-20">
      {/* ✅ Email success message */}
      {status === "success" && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
          📩 Email sent successfully!
        </div>
      )}

      <h1 className="text-lg font-bold text-green-600 font-poppins tablet:text-xl laptop:text-3xl">
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
