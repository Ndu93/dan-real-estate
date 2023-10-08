import React from "react";

// import image
import Image from "../assets/img/house-banner.jpg";

// import components
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className=" text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className=" text-blue-700">Buy or Rent</span> Your{" "}
            <span className=" text-blue-700">Dream House</span> With Us.
          </h1>
          <p className="max-w-[480px] mb-8 text-left">
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
            chocolate cake pastry brownie. Oat cake halvah sweet roll cotton
            candy croissant lollipop. Macaroon tiramisu chocolate bar candy
            candy carrot cake jelly sweet. Gummies croissant macaroon dessert.
            Chocolate cake dragée pie.
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end">
          <img className="house-banner" src={Image} alt="img" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
