import Image from 'next/image'

const Nav = props => {
    console.log('nav props', props)
    return(
        <header className='relative py-12'>

        <ul className="container mx-auto justify-between flex items-center">
            <li>
            <h1 className="sr-only text-5xl text-rj-blue mb-12">
              {props.siteName}
            </h1>
            <Image
              className="block md:mr-24"
              src={`https:${props.logo.fields.file.url}`}
              alt=""
              width="320"
              height="84"
              layout='intrinsic'
            />

            </li>
            <li>
            <a
              href={props.bookingLink}
              target="_blank"
              className="bg-rj-blue text-white px-4 py-2 rounded-md text-lg font-raleway uppercase md:ml-24"
              rel="nofollow noreferrer"
            >
              book now
            </a>
            </li>
        </ul>
        </header>

    )
}
export default Nav;

