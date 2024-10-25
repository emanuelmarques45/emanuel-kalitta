import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      Autoplay({
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
      AutoHeight(),
      ClassNames(),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    {
      path: "brava.jpg",
      alt: "Foto Praia Brava",
      desc: "Onde tudo começou...",
    },
    {
      path: "rico.jpg",
      alt: "Foto Rico Bar",
      desc: "Aqui eu já estava apaixonado",
    },
    {
      path: "casa-emanuel.jpg",
      alt: "Foto Casa Emanuel",
      desc: "Pensando em você o tempo todo",
    },
    {
      path: "casa-kalitta-1.jpg",
      alt: "Foto Casa Kálitta 1",
      desc: "Já podia entrar na sua casa 🙏",
    },
    {
      path: "casa-kalitta-2.jpg",
      alt: "Foto Casa Kálitta 2",
      desc: "E usar óculos",
    },
    {
      path: "charlestown.jpg",
      alt: "Foto Charlestown",
      desc: "Nesse dia conversamos muito e comemos uma pizza de Rap 10",
    },
    {
      path: "burgertown.jpg",
      alt: "Foto Burgertown",
      desc: "Dia dos namorados, em que tavas emburrada",
    },
    {
      path: "burgertown-1.jpg",
      alt: "Foto Burgertown 1",
      desc: "O olhar não nega",
    },
    {
      path: "hercilio.jpg",
      alt: "Foto Hercílio Luz",
      desc: "Sou completamente apaixonado por você",
    },
    {
      path: "hercilio-1.jpg",
      alt: "Foto Hercílio Luz 1",
      desc: "...",
    },
    {
      path: "molhes.jpg",
      alt: "Foto Molhes",
      desc: "Minha linda",
    },
    {
      path: "casa-kalitta.jpg",
      alt: "Foto Casa Kálitta",
      desc: "Eu te amo!",
    },
  ];

  return (
    <div className='embla mt-5 mx-auto flex flex-col items-center justify-center max-w-6xl'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container flex gap-x-16'>
          {images.map((image) => (
            <div className='embla__slide embla__class-names flex flex-col max-w-fit'>
              <img
                className='embla__slide__img object-contain'
                src={image.path}
                alt={image.alt}
                style={{ maxHeight: "28rem" }}
              />
              <p className='mt-2 text-xl text-center'>{image.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between w-80'>
        <button className='embla__prev text-8xl' onClick={scrollPrev}>
          &lt;
        </button>
        <button className='embla__next text-8xl' onClick={scrollNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}
