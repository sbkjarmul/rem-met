"use client";

import ProductCarouselDesktop from "./components/product-carousel-desktop";
import ProductCarouselMobile from "./components/product-carousel-mobile";

const OurProductsSection = () => {
  return (
    <section className="w-full bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="hidden lg:flex">
        <ProductCarouselDesktop />
      </div>

      <div className="lg:hidden w-full">
        <ProductCarouselMobile />
      </div>
    </section>
  );
};

export default OurProductsSection;
