import { useEffect } from "react";
import { heroAnimations } from "../animations/animations";
import helpers from "../utils/helpers";
import Image from "next/image";

const Hero = (props) => {
  console.log("hero props", props);

  useEffect(() => {
    heroAnimations();
  }, []);

  return (
    <section className="hero p-3 md:p-8">
      <div className="mx-auto relative">
          <div id="scroll" className="scroll absolute z-10 right-8 bottom-11">
            <a
              href="#"
              className="p-5"
              onClick={(e, destination) => helpers.smoothScroll(e, "#about")}
            >
              <img
                src="/img/chevron.svg"
                alt="scroll down"
                className="block mx-auto scroll-img"
                width="100"
                height="65"
              />
            </a>
          </div>

        <div className='overflow-hidden'>
          <div
            className="hero__img relative w-full hero-img img-shift"
            style={{
              backgroundImage: `url(${props.bannerImage.fields.file.url})`,
            }}
          ></div>
          <div className="hero__logo z-10 absolute left-8 top-8">
            <picture>
              <source media="(max-width: 1200px)" srcSet={`https:${props.logo.fields.file.url}`} width="80" height="80" />
              <source media="(max-width: 410px)" srcSet={`https:${props.logo.fields.file.url}`} width="80" height="80" />

              <img
              src={`https:${props.logo.fields.file.url}`}
              alt=""
              width="125"
              height="125"
            />
            </picture>
        
          </div>
          <div className="hero__content z-10 absolute left-8 top-36 text-4xl md:text-5xl xl:text-6xl md:w-1/4 text-white">
            <h1 className="md:mt-12 mb-8 hero-title">{props.siteName}</h1>
            <a
              href={props.bookingLink}
              target="_blank"
              className="hero-book bg-rj-green text-white px-4 py-2 rounded-md text-2xl font-raleway uppercase btn"
              rel="nofollow noreferrer"
            >
              book now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
