import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { scrollAbout } from "../animations/animations";
import { useEffect } from "react";

const About = (props) => {

  useEffect(() => {
    scrollAbout();
  }, []);

  return (
    <section
      id="about"
      className="px-12 pb-12 xl:px-0 about md:flex items-start"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl xl:text-6xl my-12 about__heading opacity-0 shift-down">
          About Us
        </h2>
        <div className="md:flex items-start justify-between">
          <div
            className="md:w-1/2 text-xl md:pr-8 xl:pr-0 md:text-2xl xl:text-3xl about__content opacity-0 shift-down"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.content),
            }}
          ></div>
          <div className="about__img shift-down opacity-0">
            <img src="/img/cleaning-job.jpg" alt="" width="600" height="700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
