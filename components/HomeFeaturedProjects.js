import React from "react";
import Link from "next/link";

const HomeFeaturedProjects = ({ featured_projects }) => {
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 767px) {
            .vap-btn {
              position: relative !important;
              padding: 2em !important;
            }
            .view-all-projects-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 0 23%;
              padding-bottom: 1.7em;
            }
          }
          .colItem:hover .p_line {
            width: 30px;
          }
        `}
      </style>
      <div className="row">
        <div id="relatedProjectsId" className="relatedProjects-home col-md-12">
          <h2 style={{ opacity: 1 }}>Featured Projects</h2>

          <div className="colBox">
            {featured_projects &&
              featured_projects.length > 0 &&
              featured_projects.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="colItem col-md-6"
                    style={{ opacity: 1, paddingRight: "2em" }}
                  >
                    <Link href={`/project/${item.seo_Url}`}>
                      <a style={{ cursor: "pointer" }}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/uploads/projects_images/${item.image_name}`}
                          alt={item.name}
                          className="visual img-responsive"
                        />

                        <div className="desc-home col-xs-7 col-sm-8 col-md-7 col-lg-8">
                          <p>
                            {item?.tags.map((tag) =>
                              tag.project_type_id != 6 ? (
                                <span key={tag.project_type_id}>
                                  {tag.name}{" "}
                                </span>
                              ) : (
                                ""
                              )
                            )}{" "}
                          </p>
                          <h3 className="heading_style">{item.name}</h3>
                          <p className="city">
                            {" "}
                            {item.city} / {item.location}
                          </p>
                        </div>

                        <div
                          className="col-xs-5 col-sm-4 col-md-5 col-lg-4 pull-right"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="viewHover"
                            style={{ marginTop: "3.35em" }}
                          >
                            <div className="p_line view_project project_info_line"></div>

                            <p
                              className="View-Project_subtitle project_info_link"
                              style={{
                                textAlign: "right",
                                height: "22px",
                                fontFamily: "BauerBodoniStd-Roman",
                                fontSize: "18px",
                                textTransform: "unset",
                                textTransform: "unset",
                                fontWeight: "normal",
                                letterSpacing: "normal",
                              }}
                            >
                              View Project &nbsp;
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="row vap-btn">
        <div
          className="custom-page services-page pull-right"
          style={{ paddingRight: "6.3%" }}
        >
          <div
            className="col-xs-12 col-sm-6 col-md-6 view-all-projects-btn"
            id="view_all_projects_button"
            style={{ opacity: 1 }}
          >
            <Link href={"/project"}>
              <a
                style={{ cursor: "pointer" }}
                className="btn form-request-btn all-page-heading contact-form-popup"
              >
                View All projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeaturedProjects;
