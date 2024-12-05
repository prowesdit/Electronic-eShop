import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <section
      id="category"
      className="w-full px-5 lg:px-20 pt-[130px] pb-[80px] flex flex-col lg:flex-row justify-center items-center gap-20 bg-gray-100"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="w-full lg:w-[15%] flex flex-col justify-center items-start gap-[20px]"
      >
        <h1 className="text-themePurple text-xl font-semibold text-center capitalize">
          favorite items
        </h1>
        <h1 className="text-black font-semibold text-3xl md:text-[42px]  leading-[50px] text-center lg:text-start capitalize">
          popular category
        </h1>
        <button className="uppercase bg-themePurple px-6 py-3 rounded-lg text-white hover:bg-themeYellow hover:text-black font-semibold mt-[60px]">
          view all
        </button>
      </div>
      <div className="w-full lg:w-[85%] grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-5 justify-center items-start  gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat1} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black hover:text-themePurple text-xl font-semibold cursor-pointer">
            Portable Speaker
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat2} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black hover:text-themePurple text-xl font-semibold cursor-pointer">
            Outdoor Speaker
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat3} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black hover:text-themePurple text-xl font-semibold cursor-pointer">
            Cables
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat4} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black hover:text-themePurple text-xl font-semibold cursor-pointer">
            Computer Accessories
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat5} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black hover:text-themePurple text-xl font-semibold cursor-pointer">
            Camera
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Category;
