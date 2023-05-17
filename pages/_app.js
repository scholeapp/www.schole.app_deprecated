import Script from 'next/script'
import '../styles/globals.css'
import Head from 'next/head'

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID || '' 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Schole（スコレ）| 本格的プログラミング学習</title>
        <script async src="https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LGX89LF33R"
        ></script>
      </Head>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
