const Footer = props => {
    const year = new Date().getFullYear();
    return(

        <footer className="bg-rj-blue text-white py-12">
            <div className="container mx-auto text-sm flex flex-col md:flex-row md:px-8 xl:px-0 items-center">
                <div className="md:w-1/3 mb-12 md:mb-0 text-lg">
                        Rowjack &copy; {year}
                </div>
                <div className="md:w-1/3 text-center">
                   <img src="./img/footer-logo.svg" alt="rowjack cleaning logo" className="w-24 mx-auto block" />
                   <p className='mt-12 text-lg'>It's not clean until it's Rowjack cleaned.</p>
                </div>
                <div className="md:w-1/3 text-right text-lg">
                    site by <a href="https://jpittard.net" rel="nofollow noreferrer">this guy</a> <br/>
                </div>
            </div>

        </footer>
    );
}

export default Footer;