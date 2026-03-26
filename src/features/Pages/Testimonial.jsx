import { Link } from "react-router-dom";
import ReviewsList from "./ReviewsList";
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
  return (
    <section
      id="textimonial"
      className="px-[35px] laptop:px-[150px] py-[20px] flex flex-col gap-5"
    >
      <h2 className="text-amber-950 capitalize font-logo text-center">
        ...what our customers says...
      </h2>
      <div className="flex flex-col  gap-5 laptop:flex-row laptop:justify-between">
        {customerReviews.map((reviews) => (
          <ReviewsList reviews={reviews} />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
