import React, { useCallback, useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type UseDotIndicatorType = {
  selectedIndex: number;
};

export const useDotIndicator = (
  carouselApi: CarouselApi | undefined
): UseDotIndicatorType => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onInit = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    onInit(carouselApi);

    carouselApi.on("reInit", onInit);
    carouselApi.on("select", onSelect);
  }, [carouselApi, onInit, onSelect]);

  return {
    selectedIndex,
  };
};

export const DotIndicator = ({ api }: { api: CarouselApi }) => {
  const { selectedIndex } = useDotIndicator(api);

  return (
    <div className="flex gap-1 transition-all duration-300">
      <span
        className={cn("rounded-full bg-gray-500 h-2 w-2", {
          "bg-brand-blue-200": selectedIndex === 0,
        })}
      />
      <span
        className={cn("rounded-full bg-gray-500 h-2 w-2", {
          "bg-brand-blue-200": selectedIndex === 1,
        })}
      />
      <span
        className={cn("rounded-full bg-gray-500 h-2 w-2", {
          "bg-brand-blue-200": selectedIndex === 2,
        })}
      />
    </div>
  );
};
