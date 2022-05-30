import React, { useEffect } from "react";
import Script from "next/script";
const AppTopBar = () => {
  useEffect(() => {
    setTimeout(function () {
      $(".header_strip").addClass("animated fadeInDown5x");
    }, 4000); //5500
    setTimeout(function () {
      $(".header_strip_logo").addClass("animated fadeIn");
    }, 4750); //5500
    setTimeout(function () {
      $(".header_strip_hba").addClass("animated fadeIn");
    }, 4850); //5500
    setTimeout(function () {
      $(".header_strip_other").addClass("animated fadeIn");
    }, 4950); //5500
  }, []);

  return (
    <>
      <style jsx>{`
        .logo3 {
          background-image: url(/images/services/35c8a-hba-canvas-white.png);
          background-repeat: no-repeat;
          height: 28.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo3:hover,
        .logo3.select {
          background-image: url(/images/services/83f47-hba-canvas-color.png);
          background-repeat: no-repeat;
          height: 28.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-3 {
          background-image: url(/images/services/c85c3-canvas.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo2 {
          background-image: url(/images/services/d71bb-hba-graphics-white.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo2:hover,
        .logo2.select {
          background-image: url(/images/services/02a18-hba-graphics-color.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-2 {
          background-image: url(/images/services/becf9-graphics.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo8 {
          background-image: url(/images/services/ca731-hba-pro-white.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo8:hover,
        .logo8.select {
          background-image: url(/images/services/04407-hba-pro-color.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-8 {
          background-image: url(/images/services/396b6-procurement.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo4 {
          background-image: url(/images/services/f0199-hba-illuminate-white.png);
          background-repeat: no-repeat;
          height: 45px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo4:hover,
        .logo4.select {
          background-image: url(/images/services/3efe8-hba-illuminate-color.png);
          background-repeat: no-repeat;
          height: 45px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-4 {
          background-image: url(/images/services/6bb3d-illuminate.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo6 {
          background-image: url(/images/services/81e58-hba-residential-white.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo6:hover,
        .logo6.select {
          background-image: url(/images/services/3a6a4-hba-residential-color.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-6 {
          background-image: url(/images/services/e1fc8-residential.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo7 {
          background-image: url(/images/services/09238-hba-resort-white.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo7:hover,
        .logo7.select {
          background-image: url(/images/services/86e80-hba-resort-color.png);
          background-repeat: no-repeat;
          height: 30px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-7 {
          background-image: url(/images/services/dc10a-resort.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo5 {
          background-image: url(/images/services/a83b2-hba-studio-white.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo5:hover,
        .logo5.select {
          background-image: url(/images/services/04f29-hba-studio-color.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-5 {
          background-image: url(/images/services/5056f-studio.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo10 {
          background-image: url(/images/services/349e0-hba-social-white.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo10:hover,
        .logo10.select {
          background-image: url(/images/services/0e620-hba-social-color.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-10 {
          background-image: url(/images/services/384c6-social-fb.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }

        .logo11 {
          background-image: url(/images/services/ac172-hba-dna-white.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .logo11:hover,
        .logo11.select {
          background-image: url(/images/services/0d3e5-hba-dna-color.png);
          background-repeat: no-repeat;
          height: 27.5px;
          display: block !important;
          background-position: center left;
          background-size: contain;
        }
        .navHover.list-11 {
          background-image: url(/images/services/32055-dna.jpg);
          margin-left: 24.3%;
          margin-top: 0px;
          max-width: 1004px;
        }
        .iconClose {
          opacity: 1;
          border: 2px solid #807d7b;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: block;
          margin-left: 9px;
        }
        .iconClose:hover {
          opacity: 1;
        }
        .iconClose:before,
        .iconClose:after {
          position: absolute;
          left: 20px;
          top: 7px;
          content: " ";
          height: 12px;
          width: 3px;
          background-color: #807d7b;
        }
        .iconClose:before {
          transform: rotate(45deg);
        }
        .iconClose:after {
          transform: rotate(-45deg);
        }
        .closeText {
          font-family: Avenir;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
          text-align: center;
          color: #ffffff;
        }
        .closePopup {
          display: inline-block;
          right: -10%;
          top: 50%;
          position: absolute;
          transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          cursor: pointer;
          z-index: 9999;
        }
      `}</style>
      <div className="hidden-xs row-fluid header_strip" style={{ opacity: 0 }}>
        <div className="main-top-div">
          <img
            src="/images/small-logo.png"
            className="header_strip_logo"
            style={{ opacity: 0, paddingBottom: "0.3em" }}
          />
          <a
            href="http://hba.com/"
            className="header_strip_hba hide-xs"
            target="_blank"
            style={{ opacity: 0 }}
            rel="noreferrer"
          >
            &nbsp;Back to main HBA &nbsp;&nbsp; |
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="#nolink"
            id="header_strip_hba_services"
            className="header_strip_other"
            style={{ opacity: 0 }}
          >
            Other HBA Services
          </a>
        </div>
      </div>
      <div className="custom-page hba-other-services-page">
        <div
          className="modal fade"
          id="otherServicesModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          style={{ overflowY: "auto", paddingTop: "7.4em" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content  modal-body-form">
              <div className="modal-body" style={{ padding: 0 }}>
                <ul
                  className="leftLogos"
                  style={{ background: "#322e2d", marginTop: 0 }}
                >
                  <li className="list-9 defaultActive">
                    <a
                      href="#"
                      data-service-id="9"
                      className="logo9 select"
                    ></a>
                  </li>

                  <li className="list-3">
                    <a
                      href="#"
                      data-service-id="3"
                      className="logo3 service-description-popup dynamic-Art Consultation"
                    ></a>
                  </li>
                  <li className="list-2">
                    <a
                      href="#"
                      data-service-id="2"
                      className="logo2 service-description-popup dynamic-Graphic Design"
                    ></a>
                  </li>
                  <li className="list-8">
                    <a
                      href="#"
                      data-service-id="8"
                      className="logo8 service-description-popup dynamic-Procurement"
                    ></a>
                  </li>
                  <li className="list-4">
                    <a
                      href="#"
                      data-service-id="4"
                      className="logo4 service-description-popup dynamic-Illuminate"
                    ></a>
                  </li>
                  <li className="list-6">
                    <a
                      href="#"
                      data-service-id="6"
                      className="logo6 service-description-popup dynamic-Residential"
                    ></a>
                  </li>
                  <li className="list-7">
                    <a
                      href="#"
                      data-service-id="7"
                      className="logo7 service-description-popup dynamic-Resort"
                    ></a>
                  </li>
                  <li className="list-5">
                    <a
                      href="#"
                      data-service-id="5"
                      className="logo5 service-description-popup dynamic-Studio"
                    ></a>
                  </li>
                  <li className="list-10">
                    <a
                      href="#"
                      data-service-id="10"
                      className="logo10 service-description-popup dynamic-Social F+b"
                    ></a>
                  </li>
                  <li className="list-11">
                    <a
                      href="#"
                      data-service-id="11"
                      className="logo11 service-description-popup dynamic-HBA DNA"
                    ></a>
                  </li>
                </ul>

                <div
                  id="slideImg"
                  className="listMainImg navHover list-9 leftActive"
                  style={{ top: "0px" }}
                >
                  <div className="logosOnImage">
                    <div style={{ marginBottom: "-29px" }}>
                      <div
                        className="list-9-div hide-section"
                        data-service-id=""
                        href="#nolink"
                        style={{ display: "block" }}
                      >
                        <span className="all-page-heading">SERVICES</span>
                        <span className="textOnImage">
                          <img src="/images/logos/hba-white-ser.png" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="list-1-div hide-section service-description-popup"
                      data-service-id="1"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBAarchitecture</span>
                    </div>
                    <div
                      className="list-3-div hide-section service-description-popup"
                      data-service-id="3"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">Illuminate</span>
                    </div>
                    <div
                      className="list-2-div hide-section service-description-popup"
                      data-service-id="2"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBA Graphics</span>
                    </div>
                    <div
                      className="list-4-div hide-section service-description-popup"
                      data-service-id="4"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">illuminate</span>
                    </div>
                    <div
                      className="list-8-div hide-section service-description-popup"
                      data-service-id="8"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBA Procurement</span>
                    </div>
                    <div
                      className="list-6-div hide-section service-description-popup"
                      data-service-id="6"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBA Residential</span>
                    </div>
                    <div
                      className="list-7-div hide-section service-description-popup"
                      data-service-id="7"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBA Resort</span>
                    </div>
                    <div
                      className="list-5-div hide-section service-description-popup"
                      data-service-id="5"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">Studio HBA</span>
                    </div>
                    <div
                      className="list-10-div hide-section service-description-popup"
                      data-service-id="10"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">Social F+B</span>
                    </div>
                    <div
                      className="list-11-div hide-section service-description-popup"
                      data-service-id="11"
                      href="#nolink"
                      style={{ display: "none" }}
                    >
                      <span className="all-page-heading">SERVICES</span>
                      <span className="textOnImage">HBA DNA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="closeDisplayNone">
              <div className="closePopup">
                {" "}
                <a
                  href="#"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="iconClose"
                ></a>{" "}
                <span className="closeText">CLOSE</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="leftBar">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-md-2 bgLeft">
              <ul className="leftLogos">
                <li className="list-1 defaultActive">
                  <a href="#" data-service-id="9" className="logo9 select"></a>
                </li>
                <li className="list-1a">
                  DDD
                  <a
                    href="#"
                    data-service-id="1"
                    className="logo1 service-description-popup"
                  ></a>
                </li>
                <li className="list-2">
                  AAA
                  <a
                    href="#"
                    data-service-id="3"
                    className="logo2 service-description-popup"
                  >
                    CCC
                  </a>
                </li>
                <li className="list-3">
                  <a
                    href="#"
                    data-service-id="2"
                    className="logo3 service-description-popup"
                  ></a>
                </li>
                <li className="list-4">
                  <a
                    href="#"
                    data-service-id="8"
                    className="logo4 service-description-popup"
                  ></a>
                </li>
                <li className="list-8">
                  <a
                    href="#"
                    data-service-id="4"
                    className="logo8 service-description-popup"
                  ></a>
                </li>
                <li className="list-5">
                  <a
                    href="#"
                    data-service-id="6"
                    className="logo5 service-description-popup"
                  ></a>
                </li>
                <li className="list-6">
                  <a
                    href="#"
                    data-service-id="7"
                    className="logo6 service-description-popup"
                  ></a>
                </li>
                <li className="list-7">
                  <a
                    href="#"
                    data-service-id="5"
                    className="logo7 service-description-popup"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script
        id="bx_slider_jquery_scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          
        //   setTimeout(function () {
        //     $('.header_strip').addClass("animated fadeInDown5x");
        // }, 4000);   //5500
        // setTimeout(function () {
        //     $('.header_strip_logo').addClass("animated fadeIn");
        // }, 4750);   //5500
        // setTimeout(function () {
        //     $('.header_strip_hba').addClass("animated fadeIn");
        // }, 4850);   //5500
        // setTimeout(function () {
        //     $('.header_strip_other').addClass("animated fadeIn");
        // }, 4950);   //5500
        

        
            $(document).on('click', '#header_strip_hba_services', function() {
              console.log('hi - otherServicesModal');
            $('#otherServicesModal').modal('show');
            });


            
          `,
        }}
      ></Script>
    </>
  );
};

export default AppTopBar;
