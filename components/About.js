import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const About = props => {

    
    return(
        <section id="about" className="about h-screen flex items-center">

        <div className="container mx-auto">
            <h2 className="text-5xl pb-5">About Us</h2>
            <div className="w-2/3" dangerouslySetInnerHTML={{ __html: documentToHtmlString(props.content) }}></div>
        </div>
        </section>
    )
}

export default About;