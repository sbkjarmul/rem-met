import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { useProductCarousel } from "../hooks/use-product-carousel";
import { products } from "../constants";

const ProductCarouselDesktop = () => {
  const { current, setApi, count } = useProductCarousel();

  return (
    <div className="ml-20 flex flex-col lg:flex-row gap-10 w-full">
      <div className="flex flex-col justify-start w-1/3 h-full gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl uppercase text-brand-blue-200">
            {products[current - 1].title}
          </h3>
          <h2 className="text-[92px] font-bold leading-none text-brand-blue-300">
            {products[current - 1].name}
          </h2>
        </div>
        <p className="text-[20px] text-gray-600 leading-tight h-32">
          {products[current - 1].description}
        </p>
        <Button className="w-full">{products[current - 1].cta}</Button>
      </div>

      <div className="relative flex-1 flex flex-col items-center h-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
          orientation="horizontal"
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <CarouselContent className="h-full">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className={`md:basis-4/5 flex flex-col items-center justify-center`}
              >
                <Image
                  src={product.image}
                  alt={`Wygrodzenie REM-MET ${product.name}`}
                  width={1920}
                  height={1080}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-[-64] right-20 flex gap-2 items-center">
            <CarouselPrevious />
            <div className="text-gray-900 text-base">
              0{current} / 0{count}
            </div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarouselDesktop;
