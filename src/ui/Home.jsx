import { Link } from "react-router-dom";
import PageNav from "../features/Pages/PageNav";
import styles from "./Home.module.css";
import About from "../features/Pages/About";
import Testimonial from "../features/Pages/Testimonial";
import Contact from "../features/Pages/Contact";
function Home() {
  return (
    <div className=" flex flex-col justify-between">
      <main className="">
        <PageNav />
        <section className="relative w-full h-[300px] overflow-hidden">
          <video
            className="absolute  left-0 w-full h-full  object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="\video\dessert.mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3 text-white h-full px-4">
            <h1 className="text-3xl font-poppins">
              Welcome to{" "}
              <span className="font-logo text-pink-600">Dessert</span> Heaven
            </h1>
            <p>Every bite is a little celebration of sweetness</p>
            <button className="bg-red-100 rounded-lg px-4 py-2.5 text-center w-[150px]">
              <Link to="/menu" className="text-amber-950 font-poppins">
                Explore menu
              </Link>
            </button>
          </div>
        </section>
        <About />
        <Testimonial />
      </main>
      <Contact />
    </div>
  );
}

export default Home;
