import '../styles/globals.scss'
import '../styles/import.scss'
import 'tailwindcss/tailwind.css'
import mailgo from 'mailgo'
import {useEffect} from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mailgo({
      showFooter: false
    });
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
