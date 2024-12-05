import React, { useEffect } from "react";
import deal from "../assets/deal-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <section id="banner" className="w-full px-5 lg:px-20 py-[80px]">
      <div
        className="w-full h-[300px] rounded-lg bg-cover   flex flex-col justify-center items-center p-4 gap-3"
        style={{ backgroundImage: `url(${deal}` }}
      >
        <h1 className="text-themeYellow text-xl font-semibold ">
          Everyday Shopping
        </h1>
        <h1 className="text-white font-bold text-[42px] leading-[50px] text-center">
          Deal of the Day
        </h1>
      </div>
    </section>
  );
};

export default Banner;
