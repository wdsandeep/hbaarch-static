import React from "react";

const AboutMissionContent = () => {
  return (
    <>
      <style id="about-mission-content-block" jsx>
        {`
          .head_about {
            padding: 0;
            margin: 0;
            padding-left: 6.3%;
            padding-right: 6.3%;
            padding-top: 55px;
            padding-bottom: 3em;
          }
          .slid_about_img {
            padding: 0 7%;
            margin: 0;
          }
          .custom-page .design-descr {
            height: 7em;
          }
        `}
      </style>
      <div
        className="section-4 section"
        style={{ overflow: "hidden", paddingBottom: "3em" }}
      >
        <div>
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center head_about">
              <div
                className="all-page-heading animated "
                style={{
                  marginBottom: "3%",
                  textAlign: "left",
                  paddingLeft: "0.7%",
                  opacity: 1,
                }}
                id="aboutPageSec2Heading1"
              >
                OUR MISSION{" "}
              </div>
              <h4
                className="Hba_design_head animated"
                style={{ paddingLeft: "0.7%", opacity: 1 }}
                id="aboutPageSec3Heading1"
              >
                &#34;Our mission is to create Architecture with innovative
                design solutions.&#34;
              </h4>
            </div>
          </div>

          <div className="steps-img">
            <div>
              <div className="row">
                <div
                  className=" col-xs-12 col-sm-12 col-md-12 slid_about_img animated"
                  style={{ opacity: 1 }}
                  id="aboutPageSec3Heading3"
                >
                  <img
                    alt=" "
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/about/about-mission-img.jpg`}
                  />
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
                id="aboutPageSec1Heading6"
                style={{ opacity: 0 }}
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
                    animationDuration: "4s",
                    left: "80px",
                    width: "78px",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 p_about">
              <div
                className="design-descr-txt animated "
                id="aboutPageSec1Heading5"
                style={{ opacity: 1 }}
              >
                Our mission is to create Architecture with innovative design
                solutions of enduring quality that proudly celebrate, respect
                and embody the unique heritage of each community and offer
                valuable, sustainable and enriching visions for its future.
                <br />
                <br />
                HBAarchitecture creates inspirational Architecture for landmark
                projects of exceptional design and enduring quality and provides
                a personalised service tailored to suit the unique aspirations
                of discerning clients that mandate and achieve design excellence
                for their luxury projects and markets worldwide.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMissionContent;
