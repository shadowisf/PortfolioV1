import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function Test() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="container embla" ref={emblaRef}>
        <div className="embla_container">
          <div className="embla_slide">Slide 1</div>
          <div className="embla_slide">Slide 2</div>
          <div className="embla_slide">Slide 3</div>
        </div>

        <button className="button" onClick={scrollNext}>
          next
        </button>

        <button className="button" onClick={scrollPrev}>
          previous
        </button>
      </div>
    </>
  );
}
