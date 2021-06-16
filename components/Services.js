import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useEffect } from "react";
import { scrollServices } from "../animations/animations";

const Services = (props) => {

  useEffect(() => {
    scrollServices();
  }, [])

  const serviceList = props.serviceList;
  const serviceContent = props.serviceContent.servicesContent;

  console.log(props);

  return (
    <section className="px-12 pb-12 xl:px-0 about md:flex items-start services">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl xl:text-6xl my-12 services__heading opacity-0 shift-down">Services</h2>
        <div className="md:flex items-start justify-between">
        <div className="mb-12 md:mb-0 services__img opacity-0 shift-down">
          <img src="/img/window-clean.jpg" alt="" width="600" height="700" />
        </div>
          <div className="services__content md:w-1/2 text-xl xl:text-3xl md:pl-8 xl:pl-0 md:text-2xl opacity-0 shift-down">
            <div dangerouslySetInnerHTML={{
                __html: documentToHtmlString(serviceContent),
              }}
            ></div>

            <div>
              <h4 className="pb-5">We Specialise in</h4>

              <ul className="">
                {Object.values(serviceList).map((service) => {
                  return (
                    <li key={service.fields.serviceTitle} className="">
                      {service.fields.serviceTitle}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
