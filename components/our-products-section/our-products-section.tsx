"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useProductCarousel } from "./hooks/useProductCarousel";
import { products } from "./constants";

export const OurProductsSection = () => {
  const { current, setApi, count } = useProductCarousel();

  return (
    <section className="flex w-full bg-gray-200 min-h-screen py-16 gap-8">
      <div className="ml-20 flex flex-col lg:flex-row gap-16 w-full">
        <div className="flex flex-col justify-center w-1/3">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl uppercase text-brand-blue-200">
              {products[current - 1].title}
            </h2>
            <h1 className="text-[92px] font-bold leading-none text-brand-blue-300 mb-4">
              {products[current - 1].name}
            </h1>
          </div>
          <p className="text-[20px] text-gray-600">
            {products[current - 1].description}
          </p>
          <Button className="mt-8 w-full max-w-xs">
            {products[current - 1].cta}
          </Button>
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
              <CarouselItem
                key={"falcon"}
                className={`md:basis-4/5 flex flex-col items-center justify-center`}
              >
                <Image
                  src={"/images/products/rem-met-falcon-hero.png"}
                  alt={`Wygrodzenie REM-MET FALCON`}
                  width={1920}
                  height={1080}
                />
              </CarouselItem>
              <CarouselItem
                key={"rhino"}
                className={`md:basis-4/5 flex flex-col items-center justify-center`}
              >
                <Image
                  src={"/images/products/rem-met-rhino-hero.png"}
                  alt={`Wygrodzenie REM-MET RHINO`}
                  width={1920}
                  height={1080}
                />
              </CarouselItem>
              <CarouselItem
                key={"gecko"}
                className={`md:basis-4/5 flex flex-col items-start justify-center`}
              >
                <Image
                  src={"/images/products/rem-met-gecko-hero.png"}
                  alt={`Wygrodzenie REM-MET GECKO`}
                  width={1920}
                  height={1080}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-0 left-0 flex gap-2">
              <div className="text-gray-100 text-base">
                0{current} / 0{count}
              </div>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
