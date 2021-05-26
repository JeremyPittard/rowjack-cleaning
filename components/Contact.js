const Contact = props => {
    console.log('contactprops', props)
    return(
        <section className="container mx-auto flex items-center">

            <div>
            <h2 className="text-5xl mb-5">Get in Touch</h2>
            <div className="px-20 py-5 flex flex-wrap">

            <a href={`mailto:${props.email}`}><img src="/img/email.svg" className="block w-24 mr-24" /></a>
            <a href={`tel:${props.phoneNumber}`}><img src="/img/call.svg" className="block w-24 mr-24" /></a>
            <a href={`https:/www.instagram.com/rowjack.cleaning`}><img src="/img/insta.png" className="block w-24 mr-24" /></a>
            <a href={`https:/www.twitter.com`}><img src="/img/twitter.png" className="block w-24 mr-24" /></a>
            </div>
            </div>
        </ section>
    )
}

export default Contact