import React, { useState, useEffect } from "react";
import Script from "next/script";
import AboutModalPopupMember from "./AboutModalPopupMember";
import { peopleInfo } from "./../pages/api/getPeople";

const AboutMembers = () => {
  const [people, setPeople] = useState(peopleInfo);
  const [man, setMan] = useState(null);

  const handleMan = (partner_id) => {
    const findMan = people.find((item) => item.partner_id === partner_id);
    setMan(findMan);
    $("#myModal").modal("show");
  };

  return (
    <>
      <AboutModalPopupMember data={man} />

      <div className="section team-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12   text-center">
              <div
                className="all-page-heading animated"
                style={{ opacity: 1 }}
                id="aboutPageSec4Heading1"
              >
                SENIOR LEADERSHIP{" "}
              </div>
              <h2
                className="text-center Meet-Our-Members animated"
                id="aboutPageSec4Heading2"
                style={{
                  opacity: 1,
                  margin: 0,
                  paddingTop: "7.5px",
                  paddingBottom: "0px",
                }}
              >
                Meet Our Team{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="members-all padd5_about1">
            <div
              className="row member-row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {people.length > 0 &&
                people.map((item, n) => {
                  if (n > 0) return;
                  return (
                    <div
                      key={item.partner_id}
                      className="col-xs-6 col-sm-6 col-md-2  leftAlign member animated paddLeftRight15"
                      style={{
                        opacity: 1,
                        marginTop: "0px",
                        padding: "0px",
                        paddingRight: "0.75%",
                        paddingLeft: "0.75%",
                        overflow: "hidden",
                      }}
                      id={`member${item.partner_id}`}
                    >
                      <div className="member-single">
                        <div className="member-hover-cont">
                          <div
                            data-member-id={item.partner_id}
                            className="member-hover"
                            onClick={() => {
                              handleMan(item.partner_id);
                            }}
                            data-toggle=""
                            data-target=""
                          >
                            <div className="hover-text">View bio</div>
                          </div>
                          <div className="member-info">
                            <img
                              className="member-img"
                              alt=" "
                              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/assets/uploads/partners/${item.image_1}`}
                            />
                          </div>
                        </div>
                        <div className="member-txt">
                          <div className="member-name">{item.name}</div>
                          <div className="member-title">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div
              className="row member-row"
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {people.length > 0 &&
                people.map((item, n) => {
                  if (n === 0) return;
                  return (
                    <div
                      key={item.partner_id}
                      className="col-xs-6 col-sm-6 col-md-2  leftAlign member animated paddLeftRight15"
                      style={{
                        opacity: 1,
                        marginTop: "0px",
                        padding: "0px",
                        paddingRight: "0.75%",
                        paddingLeft: "0.75%",
                        overflow: "hidden",
                      }}
                      id={`member${item.partner_id}`}
                    >
                      <div className="member-single">
                        <div className="member-hover-cont">
                          <div
                            data-member-id={item.partner_id}
                            className="member-hover"
                            onClick={() => {
                              handleMan(item.partner_id);
                            }}
                            data-toggle=""
                            data-target=""
                          >
                            <div className="hover-text">View bio</div>
                          </div>
                          <div className="member-info">
                            <img
                              className="member-img"
                              alt=" "
                              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/assets/uploads/partners/${item.image_1}`}
                            />
                          </div>
                        </div>
                        <div className="member-txt">
                          <div className="member-name">{item.name}</div>
                          <div className="member-title">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Script id="about-member-block" strategy="lazyOnload">{`


      `}</Script>
    </>
  );
};

export default AboutMembers;
