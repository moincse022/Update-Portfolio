import Image from "./Image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Slider = ({ imgList, ...rest }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  console.log(imgList);
  return (
    <div className="overflow-hidden relative" {...rest} ref={emblaRef}>
      <div className="flex">
        {imgList.map((src, idx) => (
          <div className="basis-full flex-shrink-0 flex-grow-0" key={idx}>
            <Image src={src} alt={src} />
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollPrev();
        }}
        className="absolute cursor-pointer shadow-sm top-[70%] left-4 rounded-full focus:ring hover:ring focus:ri hover:ri text-lg font-semibold bg-primary text-gray-50 dark:text-gray-900"
      >
        <ArrowLeft className="size-10 slider-icon slider-icon-prev" />
      </div>
      <div
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollNext();
        }}
        className="absolute cursor-pointer shadow-sm top-[70%] right-4 rounded-full focus:ring hover:ring focus:ri hover:ri text-lg font-semibold bg-primary text-gray-50 dark:text-gray-900"
      >
        <ArrowRight className="size-10 slider-icon slider-icon-next" />
      </div>
    </div>
  );
};

export default Slider;
