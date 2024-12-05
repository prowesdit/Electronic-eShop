import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import dslr from "../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false,
  };
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
      id="hero"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px] overflow-x-hidden"
    >
      <Slider className="w-full {...settings}">
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-xl"
            >
              Get Upto 80% Discounts!
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              dslr <br />
              camera
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl capitalize"
            >
              100% authentic{" "}
              <span className="text-themeYellow font-semi-bold">
                electronic gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-themeYellow text-black px-6 py-4 rounded-lg font-semibold text-lg"
            >
              Online Collections
            </button>
          </div>
        </div>
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center no-repeate"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-xl"
            >
              Get Upto 80% Discounts!
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              wireless <br />
              headset
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl capitalize"
            >
              100% authentic{" "}
              <span className="text-themeYellow font-semi-bold">
                electronic gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-themeYellow text-black px-6 py-4 rounded-lg font-semibold text-lg"
            >
              Online Collections
            </button>
          </div>
        </div>
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center no-repeate"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-xl"
            >
              Get Upto 80% Discounts!
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              premium <br />
              earbuds
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl capitalize"
            >
              100% authentic{" "}
              <span className="text-themeYellow font-semi-bold">
                electronic gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-themeYellow text-black px-6 py-4 rounded-lg font-semibold text-lg"
            >
              Online Collections
            </button>
          </div>
        </div>
      </Slider>
    </section>
  );
};
export default Hero;
