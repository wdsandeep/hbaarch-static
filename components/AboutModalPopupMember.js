import React from "react";
import Script from "next/script";
const AboutModalPopupMember = (props) => {
  return (
    <>
      <style id="member-ul-li" jsx>
        {`
          .member-ul ul {
            list-style-type: circle;
            padding-inline-start: 30px;
          }
          .member-ul ul li {
            list-style-type: circle;
            margin: 0.5px !important;
          }

          .member-content {
            padding-left: 1%;
            margin-top: 1em;
          }
          .modal-header .close {
            padding-right: 50px !important;
          }

          @media (max-width: 767px) {
            .member-content {
              padding-left: 4%;
              margin-top: 1em;
            }
          }
        `}
      </style>
      <div className="member-modal">
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="modal-left col-md-4 col-sm-6 col-xs-12">
                    <div
                      id="carousel-example-generic"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* <!-- Indicators --> */}
                      <ol className="carousel-indicators"></ol>
                      {/* <!-- Wrapper for slides --> */}
                      <div className="carousel-inner" role="listbox">
                        <div className="item active ">
                          {props.data?.image_1 && (
                            <img
                              alt=" "
                              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/assets/uploads/partners/${props.data?.image_1}`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-right member-content col-md-8 col-sm-6 col-xs-12">
                    <div className="modal-top-sect">
                      <div className="modal-right-header">
                        <div className="member-name">{props.data?.name}</div>
                        <div className="member-title">{props.data?.title}</div>
                        <div
                          className="member-title"
                          style={{ margin: 0, display: "none" }}
                        >
                          <span> </span>
                          <span></span>
                        </div>
                      </div>
                      <div className="modal-button">
                        <a
                          href="#"
                          data-member-id="23"
                          className="contact-btn all-page-heading contact_member_email_popup"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="modal-text">
                      <p
                        id="modal-text_member"
                        dangerouslySetInnerHTML={{
                          __html: props.data?.bio,
                        }}
                      ></p>
                    </div>

                    {props.data?.notable_project && (
                      <div className="modal-bottom">
                        <div className="all-page-heading">
                          Selected Project History{" "}
                        </div>
                        <div id="member_project_history">
                          <ul
                            className="member-ul"
                            style={{ listStyle: "disc" }}
                          >
                            <div
                              className="all-page-heading"
                              style={{
                                marginBottom: "0.5em",
                                fontSize: "12px",
                                display: "none",
                              }}
                            >
                              {" "}
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: props.data?.notable_project,
                              }}
                            ></div>

                            <br />
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script id="about-modal-popup-member" strategy="lazyOnload">
        {`
            $(document).ready(function(){
                $('.carousel').carousel({
                interval: 2000
                })
            });    
      `}
      </Script>
    </>
  );
};

export default AboutModalPopupMember;
