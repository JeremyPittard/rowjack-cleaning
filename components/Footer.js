const Footer = props => {
    const year = new Date().getFullYear();
    return(

        <footer className="bg-rj-blue text-white py-10">
            <div className="container mx-auto text-sm flex items-center">
                <div className="w-1/3">
                        Rowjack &copy; {year}
                </div>
                <div className="w-1/3 text-center">
                   <img src="./img/footer-logo.svg" alt="rowjack cleaning logo" className="w-24 mx-auto block" />
                   <p>It's not clean until it's Rowjack cleaned.</p>
                </div>
                <div className="w-1/3 text-right">
                    site by <a href="https://jpittard.net" rel="nofollow noreferrer">this guy</a> <br/>
                    illustations <a href="http://www.freepik.com" target="_blank" rel="nofollow noreferrer">Designed by macrovector / Freepik</a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;