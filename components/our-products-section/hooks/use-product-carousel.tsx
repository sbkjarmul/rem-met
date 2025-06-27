import { useCallback, useEffect, useRef, useState } from "react";

import { CarouselApi } from "@/components/ui/carousel";

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const useProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const TWEEN_FACTOR_BASE = 0.52;

  const setTweenFactor = useCallback((api: CarouselApi) => {
    if (!api) return;
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const setTweenNodes = useCallback((carouselApi: CarouselApi): void => {
    if (!carouselApi) return;

    tweenNodes.current = carouselApi.slideNodes().map((slideNode) => {
      return (slideNode as HTMLElement).children[0] as HTMLElement;
    });
  }, []);

  const tweenOpacity = useCallback(
    (carouselApi: CarouselApi, eventName?: string) => {
      if (!carouselApi) return;

      const engine = carouselApi.internalEngine();
      const scrollProgress = carouselApi.scrollProgress();
      const slidesInView = carouselApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      carouselApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          carouselApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  const tweenScale = useCallback(
    (carouselApi: CarouselApi, eventName?: string) => {
      if (!carouselApi) return;

      const engine = carouselApi.internalEngine();
      const scrollProgress = carouselApi.scrollProgress();
      const slidesInView = carouselApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      carouselApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0.9, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!api) return;

    setTweenNodes(api);
    setTweenFactor(api);
    tweenOpacity(api);
    tweenScale(api);

    api
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("reInit", tweenScale)
      .on("scroll", tweenOpacity)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenOpacity)
      .on("slideFocus", tweenScale);
  }, [api, tweenOpacity, tweenScale, setTweenNodes, setTweenFactor]);

  return { current, setApi, count, api };
};
