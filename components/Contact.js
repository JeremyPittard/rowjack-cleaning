import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect } from 'react';
import { scrollContact } from '../animations/animations';

const Contact = props => {

    useEffect(() => {
        scrollContact();
    }, [])
    
    return(
        <section id="contact" className="px-12 pb-12 xl:px-0 contact md:flex items-start contact">

        <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl xl:text-6xl mt-12 mb-12 md:mb-24 contact__heading opacity-0 shift-down">Get Clean!</h2>
            <div className="flex flex-col md:flex-row items-center justify-center mb-24 contact__content opacity-0 shift-down">
                {props.email != null && <a href={`mailto:${props.email}`}><img src="/img/email.svg" className="block w-24 mx-12 my-12 md:my-0" /></a>}
                {props.phoneNumber != null && <a href={`tel:${props.phoneNumber}`}><img src="/img/call.svg" className="block w-24 mx-12 my-12 md:my-0" /></a>}
                {props.instagramUrl != null && <a href={props.instagramUrl}><img src="/img/insta.png" className="block w-24 mx-12 my-12 md:my-0" /></a>}
                {props.twitterUrl != null && <a href={props.twitterUrl}><img src="/img/twitter.png" className="block w-24 mx-12 my-12 md:my-0" /></a>}
            </div>
            <a
              href={props.bookingLink}
              target="_blank"
              className="contact__book opacity-0 shift-down bg-rj-green text-white px-4 py-2 rounded-md text-2xl font-raleway uppercase btn"
              rel="nofollow noreferrer"
            >
              book now
            </a>
        </div>
        </section>
    )
}

export default Contact;