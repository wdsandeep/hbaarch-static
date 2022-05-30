import React from "react";

const AboutMethodology = () => {
  return (
    <>
      <style id="about-methodology-block" jsx>
        {`
          .section-5 {
            padding: 0;
            margin: 0;
          }
          .left.animated {
            /*left: 11.7%;*/
            left: 6.3%;
            opacity: 1;
            filter: alpha(opacity=100);
            z-index: 99;
          }
          .section-5 {
            padding: 3em 0;
            margin: 0;
          }
          .Path-10 {
            width: 58.5px !important;
            border: solid 1px #b8b8b8;
            position: absolute;
            left: 0;
            bottom: 80px;
          }
          .Path-9 {
            /*width: 215.5px !important;*/
            width: 62.5% !important;
            border: solid 4px #807d7b;
            position: absolute;
            left: 58px !important;
            bottom: 77px;
          }

          .metho-div {
            padding: 0 5.7% 0 0;
            margin-top: 36px;
          }
          .metho-img-1 {
            max-width: 25em;
            width: 100%;
            margin-bottom: 1em;
          }
          .metho-img-2 {
            padding: 1em 1% 1em 0;
          }
          .metho-img-3 {
            padding: 1em 0;
          }
          .metho-img-wth li {
            padding-bottom: 0.5em;
          }
          .metho-img-wth {
            width: 19%;
            margin-right: 1%;
            float: left;
          }
          .metho-img-wth img {
            padding-bottom: 1.5em;
          }

          .metho-img-wth h1 {
            font-family: BauerBodoniStd-Roman;
            font-size: 30px;
            line-height: 1.2;
            text-align: left;
            color: #807d7b;
            margin: 0;
            text-transform: uppercase;
          }

          .metho-img-wth h2 {
            font-family: BauerBodoniStd-Roman;
            font-size: 20px;
            line-height: 1.3;
            text-align: left;
            color: #6a6865;
            text-transform: uppercase;
            /*height: 2.5em;*/
          }
          .custom-page .design-descr {
            height: 7em;
          }
          ul {
            padding: 0;
            list-style: none;
          }

          @media (max-width: 1400px) {
            .metho-img-wth {
              width: 30%;
              margin-right: 3%;
              margin-bottom: 2em;
              float: left;
            }
            .metho-img-wth h1 {
              font-size: 25px;
            }
            .metho-img-wth h2 {
              font-size: 20px;
            }
          }

          @media (max-width: 1024px) {
            .metho-img-wth {
              width: 46%;
              margin-right: 4%;
              float: left;
            }
          }
          @media (max-width: 767px) {
            .metho-div {
              padding: 0 0 0 0;
              margin-top: 2em !important;
            }
            .metho-img-1 {
              margin-bottom: 1em;
              margin-right: 1em;
            }
            .metho-img-2 {
              padding: 1em 2em 1em 0;
            }
            .metho-img-3 {
              padding: 1em 0;
              margin-right: 1em;
            }
          }
          @media (max-width: 600px) {
            .metho-img-wth {
              width: 96%;
              margin-right: 4%;
              float: left;
            }

            .metho-img-wth img {
              padding-bottom: 1.5em;
              max-height: 350px;
            }
          }
        `}
      </style>
      <div className="section section-5">
        <div className="img-with-title">
          <div className="container txt-overlap-container">
            <div
              className="left-txt col-xs-12  col-sm-5  col-md-5  left animated"
              id="text_heading"
            >
              <div
                className="all-page-heading animated"
                style={{ marginBottom: "12%", opacity: 1 }}
                id="aboutPageSecServiceHeading1"
              >
                METHODOLOGY{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="design-descr padd5 content_a_padd"
          style={{ paddingRight: "0 !important" }}
        >
          <div className="col-sm-12 col-md-4 about_img_">
            <div
              className="title-progress-bar animated"
              id="aboutPageSecServiceHeading6"
              style={{ opacity: 1 }}
            >
              <div
                className="Path-10 home-bg-img-title-underline animated fadeIn"
                style={{ opacity: 1, WebkitAnimationDuration: "4s" }}
              ></div>
              <div
                className="Path-9 home-bg-img-title-underline animated fadeIn"
                style={{ opacity: 1, WebkitAnimationDuration: "4s" }}
              ></div>
              <div
                className="Path-9 home-bg-img-title-underline home-bg-img-title-underline-extra animated fadeIn"
                style={{
                  opacity: 1,
                  WebkitAnimationDuration: "4s",
                  left: "80px",
                  width: "78px",
                }}
              ></div>
            </div>
          </div>
          <br />
          <div className="metho-div design-descr-txt ">
            <div className="metho-img-wth">
              <h1>Phase 1</h1>
              <h2>Concept Design</h2>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/metho-img-01.jpg`}
              />

              <ul style={{ listStyle: "disc", marginLeft: "1em" }}>
                <li>Confirmation of Project Scope</li>
                <li>Presentation of Concept sketches and planning</li>
                <li>Budget evacuation and review</li>
              </ul>
            </div>

            <div className="metho-img-wth">
              <h1>Phase 2</h1>
              <h2>Schematic Design</h2>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/metho-img-02.jpg`}
              />

              <ul style={{ listStyle: "disc", marginLeft: "1em" }}>
                <li>Integration of all project components</li>
                <li>
                  Preparation of design drawings for coordination with other
                  disciplines
                </li>
              </ul>
            </div>

            <div className="metho-img-wth">
              <h1>Phase 3</h1>
              <h2>Design Development</h2>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/metho-img-03.jpg`}
              />
              <ul style={{ listStyle: "disc", marginLeft: "1em" }}>
                <li>
                  Development of design drawings to describe the design intent
                  sufficiently for coordination with all consultants
                </li>
              </ul>
            </div>

            <div className="metho-img-wth">
              <h1>Phase 4</h1>
              <h2>Construction Documents</h2>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/metho-img-04.jpg`}
              />
              <ul style={{ listStyle: "disc", marginLeft: "1em" }}>
                <li>
                  Review Construction Documents prepared by the Local Architects
                </li>
                <li>Review of contractor submittals</li>
              </ul>
            </div>

            <div className="metho-img-wth">
              <h1>Phase 5</h1>
              <h2>Authorship Review</h2>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/metho-img-05.jpg`}
              />
              <ul
                style={{
                  listStyle: "disc",
                  marginLeft: "1em",
                  paddingBottom: "0.5em",
                }}
              >
                <li>
                  Visit the project site for review of work as it relates to
                  design conformance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMethodology;
