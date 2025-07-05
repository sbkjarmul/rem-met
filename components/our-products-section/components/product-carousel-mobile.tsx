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

  const t = useTranslations("ourProducts");
  const products = getProducts(t);

  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center py-16">
      <div className="flex flex-col gap-4 items-center mx-4">
        <div className="flex flex-col gap-2 items-center">
          <AccentText className="text-brand-blue-200 text-center">
            {t("accent")}
          </AccentText>
          <h2 className="text-2xl font-medium text-gray-900">{t("title")}</h2>
        </div>
        <p className="text-gray-600 text-center">{t("description")}</p>
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
                className={`basis-3/5 flex flex-col items-center justify-center relative aspect-11/7`}
              >
                <Image
                  src={product.image}
                  alt={`Wygrodzenie REM-MET ${product.name}`}
                  width={664}
                  height={422}
                  sizes="(max-width: 600px) 100vw, 280px"
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
