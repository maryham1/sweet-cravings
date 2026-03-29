import { Link } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import { useComponent } from "../../context/ScrollContext";
const customerReviews = [
  {
    name: "Aisha T.",
    img: "/Customers/aisha.webp",
    review:
      "Absolutely the best dessert I have tasted! The cupcake are heavenly.",
  },
  {
    name: "Daniel K.",
    img: "/Customers/daniel.webp",
    review:
      "Increadible treat and great service. I will be coming back for more",
  },
  {
    name: "Chioma O.",
    img: "/Customers/chioma.jpg",
    review: "The pastries are to die for! Highly recommend the place.",
  },
];
function Testimonial() {
  const { testmoniesRef } = useComponent();
  return (
    <section
      id="textimonial"
      ref={testmoniesRef}
      className="px-[35px] laptop:px-[150px] py-[20px] flex flex-col gap-5 scroll-mt-[300px] "
    >
      <h2 className="text-amber-950 capitalize font-logo text-center text-2xl">
        ...what our customers says...
      </h2>
      <div className="flex flex-col items-center gap-5 laptop:flex-row laptop:justify-between ">
        {customerReviews.map((reviews) => (
          <ReviewsList reviews={reviews} />
        ))}
      </div>
      <div className=" flex flex-col gap-3 items-center justify-center mt-10">
        <h2 className="font-logo text-amber-950  text-xl laptop:text-2xl">
          Ready to satisfy your sweet cravings?
        </h2>
        <button className="bg-pink-600 text-center text-white font-poppins w-[150px] py-2 rounded-md cursor-pointer">
          <Link to="/login">Order Now</Link>
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
