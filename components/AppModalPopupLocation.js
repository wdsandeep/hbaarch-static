import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

const AppModalPopupLocation = (props) => {
  useEffect(() => {
    // console.log("appmodalpopuplocation activated");
  }, []);

  return (
    <>
      <style jsx>
        {`
          .arrow-right {
            right: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid #b7b4b2;
            float: left;
            position: relative;
            top: 0.4em;
          }
          .overlay {
            background: #6a6865;
          }
          .pic-li {
            display: inline-block;
            margin-bottom: 0.3em;
          }

          .membergray {
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            max-height: 135px;
            max-width: 106.25px;
            transform: scale(1);
          }

          .pro-membergray {
            /* max-height: 68.9px;*/
            height: 80px;
            max-width: 100%;
            transform: scale(1);
            filter: grayscale(0);
            -webkit-filter: grayscale(0%);
          }

          .brRit {
            border-right: 2px solid #4d4b49;
          }
          .view-pro {
            padding: 0;
            position: fixed;
            bottom: 7.7%;
            float: left;
          }
          .member-padd {
            padding: 0 0 0 4%;
            z-index: 0;
          }
          .close-but-padd {
            padding: 0 !important;
            position: fixed;
            top: 7px;
            right: 20px;
            z-index: 1;
          }
          .fa-style {
            border: none;
            position: fixed;
            bottom: 8.9%;
          }

          .all-page-heading {
            font-size: 12px;
          }
          .fa {
            font-size: 18px;
            padding-top: 0px !important;
          }
          .fa-style {
            bottom: 7.5%;
          }

          .modal-content {
            border: none !important;
          }

          @media screen and (max-width: 1025px) {
            .brRit {
              border-right: 2px solid #4d4b49;
            }

            .pro-membergray {
              height: 65px;
            }
          }

          @media screen and (max-width: 900px) {
            .brRit {
              border-right: 0px solid #b7b4b2;
            }
          }

          @media screen and (max-width: 767px) {
            .brRit {
              border-right: 0px solid #b7b4b2;
            }
            .view-pro {
              padding: 0;
              position: fixed;
              bottom: 5%;
              float: left;
            }
            .member-padd {
              padding: 5% 0 0 5%;
              z-index: 0;
            }
            .close-but-padd {
              padding: 0 !important;
              position: fixed;
              top: 7px;
              right: 10px;
              z-index: 1;
            }
            .fa-style {
              border: none;
              position: fixed;
              bottom: 4.7%;
            }
          }
        `}
      </style>
      <div className="services-page">
        <div
          className="modal fade appmodalpopuplocation"
          id="locationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row-fluid">
                  <button
                    type="button"
                    className="close close-but-padd"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="col-md-12 col-xs-12 ">
                    <div
                      className="modal-row map-row col-xs-12 col-sm-12 col-md-3"
                      style={{ padding: 0 }}
                    >
                      <div className="modal-map" id="map_canvas">
                        <iframe
                          src="https://www.google.com/maps?q=5F%2C+Tower+A%2C+One+Financial+Street+1509+%0D%0AZhongxing+Road+%0D%0AShanghai%2C+China&output=embed"
                          style={{
                            width: "250px",
                            height: "219px",
                            WebkitFilter: "grayscale(1)",
                            filter: "grayscale(1)",
                            border: "none",
                          }}
                        ></iframe>
                      </div>
                    </div>

                    <div className="modal-row location-row col-xs-12 col-sm-12 col-md-3">
                      <div
                        className="all-page-heading"
                        style={{ marginBottom: "1%" }}
                      >
                        <p className="LOCATION"> Location:</p>
                      </div>
                      <div className="city Atlanta"> {props.data?.city} </div>
                      <div className="adress add_city">
                        {props.data?.address}
                      </div>

                      <div className="col-xs-12 col-sm-12 col-md-7 nonePadd view-pro">
                        <Link href={"/project"}>
                          <a
                            className="all-page-heading marginLeft2 col-xs-12 col-sm-12"
                            style={{
                              whiteSpace: "normal",
                              textTransform: "uppercase",
                              cursor: "pointer",
                            }}
                          >
                            View Our Projects All Around the World{" "}
                            <i
                              className="fa fa-caret-right fa-style"
                              style={{ color: "#807d7b", paddingLeft: "0.3em" }}
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="modal-row numbers-row col-xs-12 col-sm-12 col-md-3">
                      <div
                        className="col-xs-6 col-sm-12 single-nr"
                        style={{ padding: 0 }}
                      >
                        <div className="all-page-heading">
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            Phone:
                          </p>
                        </div>
                        <div className="nr add_city"> {props.data?.phone} </div>
                      </div>
                      <div
                        className="col-xs-6 col-sm-12 single-nr"
                        style={{ padding: 0 }}
                      >
                        <div className="all-page-heading">
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            FAX:
                          </p>
                        </div>
                        <div className="nr add_city">
                          {" "}
                          {props.data?.fax_number}{" "}
                        </div>
                      </div>
                    </div>

                    <div
                      className="buttons-container col-xs-12 col-md-2 col-sm-12"
                      style={{ padding: 0 }}
                    >
                      <div
                        className="col-xs-12 col-sm-6 col-md-12 nonePadd"
                        style={{ padding: 0 }}
                      >
                        {" "}
                        <a
                          data-location-id={props.data?.id}
                          className="btn modal-btn all-page-heading contact_office_email_popup "
                        >
                          Email us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <Script id="cookies_location_binding" strategy="lazyOnload">
        {`
        
        `}
      </Script>
    </>
  );
};

export default AppModalPopupLocation;
