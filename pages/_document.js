import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/about-us.css" />
        <link rel="stylesheet" href="/css/home.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/project.css" />
        <link rel="stylesheet" href="/css/class.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/projectHomeSlider.css" />
        <link rel="stylesheet" href="/css/sappleslider.multi.css" />
        <link rel="stylesheet" href="/css/jquery-fullsizable.css" />
        <link rel="stylesheet" href="/css/jquery-fullsizable-theme.css" />
        <link rel="stylesheet" href="/css/home.css" />
      </Head>
      <body className="overflowHidden">
        <Main />
        <NextScript />
        <Script async defer src="//assets.pinterest.com/js/pinit.js"></Script>
      </body>
    </Html>
  );
}
