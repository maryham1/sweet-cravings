import { useState } from "react";
import { useComponent } from "../../context/ScrollContext";

function About() {
  const [show, setShow] = useState(false);
  const { aboutRef } = useComponent();
  return (
    <section
      id="about"
      ref={aboutRef}
      className="px-[35px] laptop:px-[150px] py-[20px]  bg-red-50/50 scroll-mt-20 laptop:scroll-mt-20 "
    >
      <div className="flex flex-col gap-10 justify-between m-auto tablet:flex-row laptop:flex-row laptop:items-center laptop:gap-0">
        <img
          src="\video\chef.jpeg"
          className={`${show ? "w-auto h-auto tablet:h-auto tablet:w-[350px] laptop:h-[550px] laptop:w-[320px]" : "h-auto w-auto tablet:w-[350px] tablet:h-auto laptop:w-[200px]  laptop:h-[300px]"}   border border-white border-8 order-2 tablet:order-1 laptop:order-1`}
        />

        <div
          className={`${show ? "w-auto laptop:w-[650px]" : "w-auto laptop:w-[750px]"} flex flex-col gap-[20px] order-1 laptop:order-2`}
        >
          <h2 className="font-logo underline text-4xl text-amber-950 text-center decoration-pink-500 decoration-2">
            our story
          </h2>

          <p className="text-amber-950 text-lg laptop:text-lg">
            At Sweet Cravings, we believe Dessert should be more than food -they
            should be an unforgettable experience. Every bite is designed to
            bring comfort, joy, and a little moment of indulgence. From rich
            chocolate cake to delicate pastries,every items is crafted with
            passion and care. We take pride in turning simple ingredients into
            beautiful, mouthwatering treats that not only taste amazing but also
            look stunning. Whether you’re celebrating a special occasion or just
            satisfying a sweet craving, our desserts are made to make every
            moment feel special.
          </p>
          <div>
            <p className="text-lg text-amber-950">
              <b>what we offer:</b>
            </p>
            <ul className="text-sm list-disc space-y-2 text-amber-950 ">
              <li>Freshly baked cakes, pastries, and cookies made daily</li>
              <li>Premium, high-quality ingredients for the best taste</li>

              <li>Handmade treats prepared with care every single day</li>

              {show && (
                <>
                  {" "}
                  <li>
                    Custom cakes for birthdays, weddings, and special events
                  </li>
                  <li>Unique dessert flavors you won’t find anywhere else</li>
                  <li>
                    Beautiful presentation perfect for gifting or celebrations
                  </li>
                  <li>Made with love and a passion for sweetness</li>{" "}
                </>
              )}
            </ul>
          </div>
          <button
            className="bg-pink-500 w-[100px] rounded-xl py-2 text-white shadow shadow-md text-center capitalize"
            onClick={() => setShow(!show)}
          >
            {show ? "show less" : "see more"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
