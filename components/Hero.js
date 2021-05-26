import { useEffect } from "react";
import { heroAnimations } from "../animations/animations";
import helpers from "../utils/helpers";

const Hero = (props) => {
  console.log("hero props", props);

  useEffect(() => {
    heroAnimations();
  }, []);

  return (
    <section className="hero h-screen">
      <div className="container mx-auto flex h-full items-center justify-around">
        <div className="hero__img relative">
          <div
            id="green-tile"
            className="bg-rj-green h-full w-full absolute z-0 green-tile rounded-md"
          ></div>
          <div
            id="blue-tile"
            className="bg-rj-blue h-full w-full absolute z-10 blue-tile rounded-md"
          ></div>
          <div
            id="yellow-tile"
            className="bg-rj-yellow h-full w-full absolute z-20 yellow-tile rounded-md"
          ></div>
          <div
            id="img-tile"
            className="img-tile z-30 relative rounded-md overflow-hidden"
          >
            <img
              src={`${props.bannerImage.fields.file.url}`}
              className="img-shift"
              alt=""
            />
          </div>
        </div>
        <div className="hero__content text-center px-32">
          <h1 className="sr-only text-5xl text-rj-blue mb-12">
            {props.siteName}
          </h1>
          <img
            className="block mx-auto mb-12"
            src={props.logo.fields.file.url}
            alt=""
          />
          <a
            href={props.bookingLink}
            target="_blank"
            className="bg-rj-blue text-white px-4 py-2 rounded-md text-lg font-raleway uppercase"
            rel="nofollow noreferrer"
          >
            book now
          </a>
          <div id="scroll" className="scroll mt-24">
            <a
              href="#"
              className="p-5"
              onClick={(e, destination) => helpers.smoothScroll(e, "#about")}
            >
              <img
                src="/img/chevron.svg"
                alt="scroll down"
                className="block mx-auto"
                width="40"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
