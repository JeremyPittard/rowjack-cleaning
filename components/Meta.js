import Head from "next/head";
import { LocalBusiness } from "schema-dts";
import { JsonLd, jsonLdScriptProps } from "react-schemaorg";

const SiteHead = (props) => {
  console.log(props, 'site settings')
  return (
    <Head>
      <title>{props.siteTitleUsedForSeo}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@600&display=swap"
        rel="stylesheet"
      />
      <script
        {...(jsonLdScriptProps <
          LocalBusiness >
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rowjack Commercial Cleaning",
            image: "",
            "@id": "https://rowjack.com.au",
            url: "https://rowjack.com.au",
            telephone: "0419 981 037",
            priceRange: "",
            address: {
              "@type": "PostalAddress",
              streetAddress: "",
              addressLocality: "Perth",
              addressRegion: "WA",
              postalCode: "6027",
              addressCountry: "AU",
            },
            sameAs: "https://www.facebook.com/RowjackEnviro/",
            knowsAbout: ["vacate cleans", "pressure washing"],
          })}
      />
    </Head>
  );
};

export default SiteHead;
