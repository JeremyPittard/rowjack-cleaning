import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import client from '../lib/api'
import SiteHead from '../components/Meta'
import About from '../components/About'

export default function Home({results}) {

  const heroProps = {...results.siteSettings}
  const serviceProps = {...results.services }
  const siteSettings = {...results.siteSettings}
  const aboutProps = {...results.about}
  return (

    <>
      <SiteHead />
      <Nav { ...siteSettings }/>
      <Hero { ...heroProps }/>
      <About { ...aboutProps} />
      <Services serviceList={serviceProps} serviceContent={aboutProps }/>
      <Contact {...siteSettings }/>
      <Footer {...siteSettings }/>
    </>
  )
}

export async function getStaticProps() {

  const aboutResults = await client.getEntry(process.env.SECTION_CONTENT_ID)
  const servicesResults = await client.getEntries({
    content_type: 'services' 
  })
  const settingsResults = await client.getEntry(process.env.SITE_SETTINGS_ID)




  return {
    props: {
      results: {
        about: aboutResults.fields,
        services: servicesResults.items,
        siteSettings: settingsResults.fields
      }
    }
  }
}