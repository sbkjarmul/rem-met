"use client";

import ProductCarouselDesktop from "./components/product-carousel-desktop";
import ProductCarouselMobile from "./components/product-carousel-mobile";

const OurProductsSection = () => {
  return (
    <section
      id="produkty"
      className="w-full bg-gray-200 md:min-h-[800px] flex flex-col items-center justify-center py-16 md:py-0"
    >
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
