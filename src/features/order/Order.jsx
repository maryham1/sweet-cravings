import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, clearCart } from "../cart/CartSlice";
import store from "../../store";
import EmptyCart from "../cart/EmptyCart";

// ✅ phone validation
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function Order() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalCartPrice);

  // ✅ prevent empty cart
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-[320px] mx-auto p-6 bg-white rounded-xl shadow shadow-xl mt-10 font-poppins laptop:max-w-md">
      <h2 className="text-lg font-semibold mb-6 text-pink-600 font-poppins laptop:text-2xl">
        Checkout
      </h2>

      {/* 🔥 Order summary */}
      <div className="mb-6 border-b border-amber-950 pb-4">
        {cart.map((item) => (
          <div
            key={item.dessertId}
            className="flex justify-between text-sm text-pink-600 font-poppins"
          >
            <p>
              {item.name} × {item.quantity}
            </p>
            <p>${item.totalPrice}</p>
          </div>
        ))}

        <p className="mt-3 font-bold text-lg text-amber-950 font-poppins">
          Total: ${totalPrice}
        </p>
      </div>

      {/* 🔥 FORM */}
      <Form method="POST" className="space-y-4">
        {/* send cart */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <label className="text-amber-950 font-poppins">Full Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="w-full border border-pink-600 px-4 py-2 rounded text-pink-600 outline-0 font-poppins"
          />
        </div>

        <div>
          <label className="text-amber-950 font-poppins">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border border-pink-600 px-4 py-2 rounded text-pink-600 outline-0 font-poppins"
          />
          {formErrors?.phone && (
            <p className="text-red-500 text-sm font-poppins">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="text-amber-950 font-poppins">Address</label>
          <input
            type="text"
            name="address"
            required
            className="w-full border border-pink-600 px-4 py-2 rounded text-pink-600 outline-0 font-poppins"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-amber-900 text-white py-3 text-xl font-poppins rounded"
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </Form>
    </div>
  );
}

export default Order;

//////////////////////////////////////////////////////
// 🔥 ACTION (CONNECTED TO THIS PAGE)
//////////////////////////////////////////////////////

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    id: crypto.randomUUID(), // 🔥 unique ID
    createdAt: new Date().toISOString(),
  };

  console.log("ORDER:", order);

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Enter a valid phone number";

  if (Object.keys(errors).length > 0) return errors;

  // ✅ clear cart
  store.dispatch(clearCart());

  // ✅ redirect to success page
  return redirect(`/order/success/${order.id}`);
}
