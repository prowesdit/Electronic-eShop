import React, { useEffect } from "react";
import payment from "../assets/payment.png";
import shipping from "../assets/shipping.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      id="services"
      className="w-full px-5 lg:px-20 pb-[80px] pt-[0px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Worldwide Shipping</h1>
        <p className="text-[17px] text-gray-500">
          On the time product delivery
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={payment} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">
          100% Secure payment
        </h1>
        <p className="text-[17px] text-gray-500">
          Pay with card or mobile banking
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={refund} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Refund Policy</h1>
        <p className="text-[17px] text-gray-500">We care about our customer</p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={gift} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Send Gift</h1>
        <p className="text-[17px] text-gray-500">
          Send gift to your favorite one
        </p>
      </div>
    </section>
  );
};

export default Services;
