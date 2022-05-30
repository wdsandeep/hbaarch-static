import React, { useEffect } from "react";
import Script from "next/script";
const AppLoader = () => {
  useEffect(() => {
    $(".loader1").fadeOut(2000);
    $(".loader").fadeOut(1000);
  }, []);

  return (
    <>
      <style jsx>
        {`
          .loader {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: black;
            opacity: 1;
            display: none;
          }
        `}
      </style>
      <div
        style={{
          backgroundColor: "black",
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
          background: "#6a6865",
          opacity: 1,
        }}
        className="loader1"
      >
        <img width="1" height="1" src="/images/Loader-Gif-Small.gif" />
        <div
          className="loader"
          style={{
            background:
              "url('/images/Ripple-2.6s-200px.svg') 50% 50% no-repeat #6a6865",
            display: "block",
          }}
        ></div>
      </div>
      <div className="services-page">
        <div
          className="modal fade"
          id="locationModalUnknown"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <Script id="cookies_location_binding" strategy="lazyOnload">
        {`

        $(".loader1").fadeOut(2000);
        $(".loader").fadeOut(1000);

        `}
      </Script>
    </>
  );
};

export default AppLoader;
