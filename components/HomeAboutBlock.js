import React from "react";
import Link from "next/link";

const HomeAboutBlock = () => {
  return (
    <>
      <style jsx>
        {`
          .home-group {
            padding: 0px 5%;
          }

          .home-group p {
            font-family: Avenir;
            font-size: 17px;
            line-height: 1.5;
            color: #8f8f8f;
            letter-spacing: 2px;
            padding-right: 5%;
            padding-left: 0;
            padding-top: 0em;
          }

          .home-group h2 {
            padding: 1.24em 0 0.5em 0 !important;
          }

          .group-img {
            padding: 3.9em 0 5em 9.3%;
          }

          @media (max-width: 1280px) {
            .home-group h2 {
              padding: 1.54em 0 0.5em 0 !important;
            }
          }

          @media (max-width: 737px) {
            .home-group p {
              font-size: 15px;
              letter-spacing: 1px;
              padding-right: 5%;
              padding-left: 0%;
              padding-top: 1em;
              padding-bottom: 1em;
            }

            .group-img {
              padding: 3.9em 0 1em 0;
            }

            .home-group h2 {
              padding: 0.54em 0 0em 0 !important;
            }
          }
        `}
      </style>
      <div
        className="row"
        id="home_about_us_block"
        style={{ background: "#ffffff", paddingTop: "0em" }}
      >
        <div className="col-md-12">
          <div className="col-md-7 col-sm-12">
            <img
              src="/images/home/Group-Photo.jpg"
              className="img-responsive group-img"
            />
          </div>
          <div className="home-group col-md-5 col-sm-12">
            <div className="col-md-5 col-sm-hidden">&nbsp;</div>
            <div
              className="col-md-7 col-sm-12"
              style={{ padding: 0, margin: 0 }}
            >
              <div className="about_us_block_heading" style={{ opacity: 1 }}>
                <h2 style={{ padding: 0, margin: 0 }}>COLLECTIVE STRENGTH</h2>
              </div>

              <div
                className="about_us_block_content"
                style={{ opacity: 1, padding: 0 }}
              >
                <p>
                  We rely on the collective strength of 30+ architects,
                  designers and planners in our combined Asia studio. Covering
                  many nationalities, languages and local knowledge, we work
                  seamlessly together to ensure that the most relevant expertise
                  is brought to each project. We currently have teams in China,
                  Singapore and Vietnam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 y-ovr" style={{ padding: 0 }}>
          <Link href={"/about"}>
            <a style={{ cursor: "pointer" }}>
              <div className="col-md-1 vertical-text" style={{ opacity: 1 }}>
                <div>
                  &nbsp;/&nbsp; <strong>About Us</strong>
                </div>
              </div>
              <div className="home-about col-md-12 pull-right">
                <div
                  className="about_us_block_heading col-md-6 col-sm-12"
                  style={{ opacity: 1 }}
                >
                  <div
                    className="col-md-11 col-sm-12"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <h2 style={{ padding: 0, margin: 0 }}>
                      HBAarchitecture is a global design practice
                      strategically-positioned for the new era of Architecture
                      design, development and brand interaction.
                    </h2>
                  </div>
                </div>

                <div
                  className="about_us_block_content col-md-6 col-sm-12"
                  style={{ opacity: 1, textAlign: "justify" }}
                >
                  <p>
                    Our mission is to create Architecture with innovative design
                    solutions of enduring quality that proudly celebrate,
                    respect and embody the unique heritage of each community and
                    offer valuable, sustainable and enriching visions for its
                    future.
                  </p>
                  <br className="hide-xs" />
                  <p>
                    HBAarchitecture creates inspirational Architecture for
                    landmark projects of exceptional design and enduring quality
                    and provides a personalised service tailored to suit the
                    unique aspirations of discerning clients that mandate and
                    achieve design excellence for their luxury projects and
                    markets worldwide.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div
        className="row"
        style={{ background: "#ffffff", paddingBottom: "2.9em" }}
      >
        <div
          className="home-about-img pull-right y-ovr about_page_template"
          style={{ opacity: 1 }}
        >
          <Link href={"/about"}>
            <a style={{ cursor: "pointer" }}>
              <img
                src="/images/home/about.jpg"
                align="right"
                className="img-responsive"
              />
              <div className="home-about-title" style={{ opacity: 1 }}>
                <h2
                  className="home-project-title-head-h1"
                  id="firstSlideHeading"
                >
                  Go To About Page
                </h2>
                <div className="about-button-arrow"></div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAboutBlock;
