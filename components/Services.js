import { documentToHtmlString } from '@contentful/rich-text-html-renderer';



const Services = (props) => {
    const serviceList = props.serviceList;
    const serviceContent = props.serviceContent.servicesContent;

    console.log(props)

    
    return (
      <section className="container mx-auto services">
        <h2 className="text-5xl pb-5">Services</h2>

        <div>
        <div className="w-2/3" dangerouslySetInnerHTML={{ __html: documentToHtmlString(serviceContent) }}></div>

        <div className="px-20 py-5">
          <h4 className="pb-5">We Specialise in</h4>
          
        <ul className="flex flex-wrap">
          {Object.values(serviceList).map((service) => {
            return (
              <li key={service.fields.serviceTitle} className='w-1/3 text-center mb-10'>
                <img src={service.fields.serviceImage.fields.file.url} alt="#" className="mx-auto block max-w-full h-56 mb-5"/>
                {service.fields.serviceTitle}
              </li>
            );
          })}
        </ul>
          </div>
        </div>
      </section>
    );
}

export default Services;