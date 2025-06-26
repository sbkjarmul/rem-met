import Image from "next/image";

import Button from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useProductCarousel } from "../hooks/use-product-carousel";
import { AccentText } from "@/components/ui/accent-text";
import useTranslations from "@/hooks/useTranslations";

import { DotIndicator } from "./dot-indicator";
import { getProducts } from "../constants";
import Link from "next/link";

const ProductCarouselMobile = () => {
  const { current, setApi, api } = useProductCarousel();

  const t = useTranslations("ourProductsSection");
  const products = getProducts(t);

  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="flex flex-col gap-4 items-center mx-4">
        <div className="flex flex-col gap-0 items-center">
          <AccentText className="text-brand-blue-200 text-center">
            Nasze produkty
          </AccentText>
          <h2 className="text-2xl font-medium text-gray-900">
            Wygrodzenia przemysłowe
          </h2>
        </div>
        <p className="text-gray-600 text-center">
          Wybierz wygrodzenia bezpieczeństwa dostosowane do Twoich potrzeb!
        </p>
      </div>

      <div className="relative flex-1 flex flex-col items-center w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
          }}
          orientation="horizontal"
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <CarouselContent className="h-full w-screen m-0">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className={`basis-3/5 flex flex-col items-center justify-center relative aspect-video`}
              >
                <Image
                  src={product.image}
                  alt={`Wygrodzenie REM-MET ${product.name}`}
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <DotIndicator api={api} />

      <div className="flex flex-col justify-center items-center w-full gap-4 mx-4">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl uppercase text-gray-600 text-center">
            {products[current - 1].title}
          </h2>
          <h1 className="text-6xl text-center font-bold leading-none text-brand-blue-200 mb-4">
            {products[current - 1].name}
          </h1>
        </div>

        <Button className="w-full max-w-xs" asChild>
          <Link href={products[current - 1].path}>
            {products[current - 1].cta}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCarouselMobile;
