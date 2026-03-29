import { HiOutlineStar, HiStar } from "react-icons/hi2";

function ReviewsList({ reviews }) {
  return (
    <div className="bg-white w-[300px] h-[130px] px-6 py-4 rounded-xl shadow shadow-lg laptop:shadow-xl">
      <div className="flex gap-4">
        <img src={reviews.img} className="rounded-full w-[50px] h-[50px]" />
        <div>
          <p className="text-pink-700 font-poppins text-md">
            <b>{reviews.name}</b>
          </p>
          <span className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <HiStar key={i} className="text-yellow-500" />
            ))}
          </span>
        </div>
      </div>

      <p className="text-amber-950 font-poppins text-sm">{reviews.review}</p>
    </div>
  );
}

export default ReviewsList;
