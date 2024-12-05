import React, { useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Types = () => {
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
      id="category-types"
      className="w-full px-5 lg:px-20 py-[80px] grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <h1 className="text-themeYellow text-lg border rounded-lg border-themeYellow px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wireless
          <br /> Devices
        </h1>
        <button className="bg-themeYellow text-black font-semibold px-6 py-3 rounded-lg uppercase">
          shop now
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <h1 className="text-themeYellow text-lg border rounded-lg border-themeYellow px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wired
          <br /> Devices
        </h1>
        <button className="bg-themeYellow text-black font-semibold px-6 py-3 rounded-lg uppercase">
          shop now
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <h1 className="text-themeYellow text-lg border rounded-lg border-themeYellow px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Personal
          <br /> Gadgets
        </h1>
        <button className="bg-themeYellow text-black font-semibold px-6 py-3 rounded-lg uppercase">
          shop now
        </button>
      </div>
    </section>
  );
};

export default Types;
