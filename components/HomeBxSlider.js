import React, { useEffect } from "react";
import Script from "next/script";

const HomeBxSlider = ({ effectKey }) => {
  useEffect(() => {
    $(document).ready(function () {
      setTimeout(() => {
        var homeSlider = $("#home_bxslider")
          .show()
          .bxSlider({
            auto: true,
            pager: false,
            controls: false,
            captions: true,
            mode: "fade",
            speed: 1000,
            pause: 5000,
            responsive: true,
            preloadImages: "all",
            onSliderLoad: function () {
              $("#home_bxslider").css("visibility", "visible");
            },
          });
        //homeSlider.stopAuto();
      }, 1500);
    });
  }, [effectKey]);

  return (
    <>
      <style jsx>{`
        @media (max-width: 1280px) {
          .bx-wrapper,
          .bx-viewport,
          .bx-wrapper img {
            height: 100vh !important;
          }
        }

        @media (max-width: 767px) {
          .bx-wrapper,
          .bx-viewport,
          .bx-wrapper img {
            height: 585px !important;
            width: auto !important;
            max-width: inherit;
          }

          .bx-wrapper img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0%);
          }
        }

        @media (max-width: 737px) {
          .bx-wrapper,
          .bx-viewport,
          .bx-wrapper img {
            height: 360px !important;
          }
        }

        @media (max-width: 480px) {
          .bx-wrapper,
          .bx-viewport,
          .bx-wrapper img {
            height: 93vh !important;
          }
        }

        .bx-wrapper img {
          min-width: 100%;
        }
        @media (min-width: 768px) {
          .Defining-Luxury-by-D {
            display: -webkit-box;
          }
        }
        .Defining-Luxury-by-D {
          z-index: 55;
        }
        .SCROLL-DOWN {
          z-index: 55;
        }
        .home_slide_title {
          position: absolute;
          bottom: 3%;
          right: 6.3%;
          opacity: 0;
          font-family: Avenir;
          font-size: 12px;
          color: #ffffff;
          font-weight: 900;
          line-height: 1.67;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .home-bg-img-title-underline {
          z-index: 55;
        }
      `}</style>
      <div className="col-md-9 Defining-Luxury-by-D ">
        <h1
          className="Defining-text"
          id="home-bg-img-title"
          style={{
            height: "175px",
            overflow: "hidden",
            display: "block", //none
          }}
        >
          We create unique destinations that deliver lasting value for our
          clients
        </h1>
      </div>

      <div>
        <div
          className="SCROLL-DOWN"
          id="scrolldown"
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/scroll-down.png"
            className="home-bg-scroll-down"
            style={{ opacity: 1, WebkitAnimationDuration: "3s" }} // opacity 0
          />
        </div>
      </div>

      <div className="hidden-xs">
        <div
          className="Path-10 home-bg-img-title-underline  "
          style={{ opacity: 1, WebkitAnimationDuration: "4s" }} //opacity 0
        ></div>
        <div
          className="Path-9 home-bg-img-title-underline  "
          style={{
            opacity: 1, // opacity 0
            WebkitAnimationDuration: "4s",
            left: "6.3%",
          }}
        ></div>
      </div>
      <div id="home_bxslider" className="slider" style={{ display: "none" }}>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-1.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/sirru-fen-fushi-fairmont-maldives">
              FAIRMONT SIRRU FEN FUSHI, MALDIVES
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-6.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/vintage-house-napa-california-usa">
              VINTAGE HOUSE, CALIFORNIA, U.S.
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-2.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/explorer-suite-at-natural-history-museum-london">
              EXPLORER SUITE AT NATURAL HISTORY MUSEUM, LONDON
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-3.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/sifang">
              ARTYZEN SIFANG, NANJING, CHINA
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-4.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/alley-50-ho-chi-minh-vietnam">
              ALLEY 50, HO CHI MINH, VIETNAM
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/home/HBA-Home-Hero-Image-mock-5.jpg"
            className="img-responsive"
            title=""
          />
          <div className="home_slide_title" style={{ display: "block" }}>
            <a href="https://hbaarchitecture.com/2022/project/sirru-fen-fushi-fairmont-maldives">
              FAIRMONT SIRRU FEN FUSHI, MALDIVES
            </a>
          </div>
        </div>
      </div>
      <Script
        src="/js/jquery.bxslider.min.js"
        strategy="afterInteractive"
        rel="preload"
      ></Script>

      <Script
        id="home_bx_slider_scripts"
        strategy="afterInteractive"
        defer
        async
        dangerouslySetInnerHTML={{
          __html: `

          $(document).ready(function(){
      //       console.log("i am declared");
      //       var homeSlider = $('#home_bxslider').show().bxSlider({
      //    auto:false,
      //    pager:false,
      //    controls:false,
      //    captions:true,
      //    mode:'fade',
      //    speed:1000,
      //    pause:5000,
      //    responsive:true,
      //    preloadImages:'all',
      //    onSliderLoad: function(){
      //        $("#home_bxslider").css("visibility", "visible");

             
      //      }
     
      //  });
      //  homeSlider.stopAuto();
       
       setTimeout(function () {
             $('.home_slide_title').addClass('animated fadeIn');
       }, 2500);   
       
       setTimeout(function () {
            //  homeSlider.startAuto();
       }, 4500);   
     
       $('#scrolldown').click(function() {
        $('html, body').animate({
            scrollTop: $("#relatedProjectsId").offset().top + 10
        }, 2000);
      });


     });`,
        }}
      ></Script>
    </>
  );
};

export default HomeBxSlider;
