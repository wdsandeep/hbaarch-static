import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import AppLoader from "../../components/AppLoader";
import AppTopBar from "../../components/AppTopBar";
import AppMenu from "../../components/AppMenu";
import AppLogoBurger from "../../components/AppLogoBurger";
import AppModalPopupCareer from "../../components/AppModalPopupCareer";
import AppModalPopupContact from "../../components/AppModalPopupContact";
import AppFooterLocation from "../../components/AppFooterLocation";
import AppFooter from "../../components/AppFooter";

const Index = ({ data }) => {
  const [projects, setProjects] = useState(data.project_list);
  const [filterProjects, setFilterProjects] = useState([]);
  const [category, setCategory] = useState(data.project_category);
  const [filterId, setFilterId] = useState(
    data.project_category[0].project_type_id
  );
  useEffect(() => {
    setFilterProjects(
      projects.filter((pro) => {
        let pro_tags = pro.tags.filter((cat) => {
          // console.log(
          //   cat.project_type_id,
          //   filterId,
          //   cat.name,
          //   cat.project_type_id === filterId
          // );
          return cat.project_type_id === filterId;
        });
        // if (pro_tags.length) console.log(pro_tags.length > 0);
        return pro_tags.length > 0;
      })
    );
    console.log(filterId);
    // console.log(newList);
    // setFilterProjects(newList);
  }, [filterId]);

  const handleCategory = (id) => {
    setFilterId(id);
  };

  return (
    <>
      <Head>
        <title>HBAarchitecture - Project.</title>
        <meta
          name="description"
          content="HBAarchitecture creates inspirational Architecture for landmark projects of exceptional design and enduring quality and provides a personalised service tailored to suit the unique aspirations of discerning clients that mandate and achieve design excellence for their luxury projects and markets worldwide."
        />
        <meta
          name="keywords"
          content="HBAarchitecture, destination, Inspirational architecture"
        />
        <link
          rel="shortcut icon"
          href="https://hbaarchitecture.com/2022/assets/uploads/files/logo/f0360-favicon.ico"
        />
      </Head>
      <AppLoader />

      <div
        id="main_container"
        className="container-fluid"
        style={{ padding: 0 }}
      >
        <AppTopBar />
        <AppMenu />

        <div className="row-fluid">
          <style jsx>
            {`
              #project_navigation_bar sup {
                color: #000;
              }

              sup {
                /* top: -0.5em; */
                top: -0.3em;
                right: -0.2em;
                font-size: 30px;
                color: #fff;
                font-style: italic;
                font-family: BauerBodoniBT;
              }

              sub {
                color: #000;
              }

              em.total sub {
                font-size: 30px;
              }

              .btn_sub {
                margin-right: 12px;
                outline: none;
              }

              #product-bg-img-inner .pagination .counter .total {
                right: 33px;
                bottom: 0px;
              }

              #product-bg-img-inner .pagination .counter em {
                color: #fff;
                font-size: 28px;
                font-style: italic;
                line-height: 1em;
                position: absolute;
                text-indent: 0;
              }

              #product-bg-img-inner .pagination .counter .current {
                left: 27px !important;
                top: 9px;
              }

              #product-bg-img-inner .pagination {
                margin: 0 !important;
                position: relative;
                width: 106px;
                z-index: 100;
                display: block;
                float: right;
                right: 6.2%;
                left: -6.3%;
              }

              .body_search
                #keywordSearch
                .search_sub::-webkit-input-placeholder {
                /* Chrome/Opera/Safari */
                font-family: Avenir;
                font-style: oblique;
                color: #807d7b;
              }

              .body_search
                #keywordSearch
                .search_sub::-webkit-input-placeholder::-moz-placeholder {
                /* Firefox 19+ */
                font-family: Avenir;
                font-style: oblique;
                color: #807d7b;
              }

              .body_search
                #keywordSearch
                .search_sub::-webkit-input-placeholder:-ms-input-placeholder {
                /* IE 10+ */
                font-family: Avenir;
                font-style: italic;
                color: #807d7b;
              }

              .body_search
                #keywordSearch
                .search_sub::-webkit-input-placeholder:-moz-placeholder {
                /* Firefox 18- */
                font-family: Avenir;
                font-style: oblique;
                color: #807d7b;
              }

              .projecr_slider .left-arrow {
                transform: none;
                -webkit-transform: none;
                margin-right: 19px;
                cursor: pointer;
              }

              .projecr_slider .right-arrow {
                transform: none;
                -webkit-transform: none;
                cursor: pointer;
              }

              .location-dropdown .dropdown-toggle {
                width: 100%;
                text-align: left;
                background: transparent;
                padding-left: 0;
                border-top: none;
                border-left: none;
                border-right: none;
                border-radius: 0;
                border-color: #807d7b;
                text-transform: uppercase;
                font-family: Avenir;
                font-size: 12px;
                font-weight: 900;
                line-height: 1.67;
                letter-spacing: 0.8px;
                text-align: left;
                color: #807d7b;
                cursor: pointer;
              }

              .open > .dropdown-menu {
                display: block;
                width: 100%;
                text-align: left;
                background: #f0f0f0;
                padding-left: 10px;
              }

              .location-dropdown.btn-primary:hover,
              .btn-primary:focus,
              .btn-primary:active,
              .btn-primary.active,
              .open .dropdown-toggle.btn-primary {
                background: transparent;
                border-color: #807d7b;
                box-shadow: none;
              }

              .dropdown-menu li {
                margin-bottom: 10px;
                font-family: Avenir;
                font-size: 12px;
                font-weight: 900;
                line-height: 1.67;
                letter-spacing: 0.8px;
                text-align: left;
                color: #807d7b;
                text-transform: uppercase;
                padding-left: 3%;
                cursor: pointer;
              }

              .dropdown-menu li:hover {
                color: #807d7b;
              }

              #project_filter .btn {
                padding: 3px 0px;
              }

              #filter {
                margin-top: 0.7em;
              }

              ul#filter a {
                text-decoration: none;
                text-transform: uppercase;
              }

              ul#filter li.current a,
              ul#filter a:hover {
                text-decoration: none;
                font-weight: bold;
                /* text-shadow: 0 0 1px #807d7b, 0 0 1px #807d7b; */
                /* text-shadow: 1px 0 0 #807d7b; */
                color: #807d7b;
              }

              ul#filter li:first-child {
                padding-left: 0;
              }

              ul#filter li {
                display: inline-block;
                padding: 0 0.5em;
                border-right: 1px solid #999;
              }
              /*ul#filter li a{
                padding: 0 1em;
                border-right: 1px solid #999;
            }*/
              ul#filter li:last-child {
                border-right: none;
                margin-right: 0;
                padding-right: 0;
              }

              .SCROLL-DOWN {
                bottom: 12em;
              }

              @media (max-width: 1367px) {
                .SCROLL-DOWN {
                  bottom: 8em;
                }
              }

              @media (max-width: 1280px) {
                .btn_sub {
                  margin-right: 2px;
                  outline: none;
                }
              }

              @media (max-width: 767px) {
                ul#filter li:first-child {
                  padding-left: 1em;
                }

                ul#filter li {
                  border-right: 1px solid #999;
                  padding: 0 1em;
                  display: block;
                }

                .viewHover {
                  margin-top: 0px;
                  background-color: rgb(255 255 255 / 70%);
                  margin-left: 50%;
                  height: 1.8em;
                }
              }
              ul#filter > li {
                position: relative;
              }
              ul#filter > li > img {
                display: block;
                visibility: hidden;
                right: 0;
                position: absolute;
              }
              ul#filter li:hover img {
                visibility: visible;
              }

              .padd_carrer {
                padding-left: 6.3% !important;
                padding-right: 5.7% !important;
              }
              .padd_carrer_right {
                padding-left: 6.7% !important;
                padding-right: 6.3% !important;
                margin-bottom: 70px;
              }
              .carrer_head {
                padding-top: 0px;
              }
              .c_sub_head {
                margin-top: 24.5px;
              }
              .career_para {
                padding-top: 39px;
              }
              .applyBtn {
                width: 200px;
                margin: 31px 0;
              }
              .padd50_career {
                padding-top: 83px;
              }
              /* .Defining-Luxury-by-D{
                width: 888px !important;
                }*/

              .bookletDwn a {
                color: #fff;
              }
              .bookletDwn a:hover {
                color: #fff;
              }

              @media (max-width: 767px) {
                .about-heading-yellow {
                  font-size: 32px !important;
                }
              }
            `}
          </style>
          <Script id="career-page-banner" strategy="afterInteractive">{`
          
          var pagebannerheight="512px";

          `}</Script>

          <div
            className="modal fade"
            id="myModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content keyword_search">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{
                      marginRight: "93.5px",
                      paddingRight: "0px !important",
                    }}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body body_search ">
                  <div className="row">
                    <div style={{ width: "80%", margin: "auto" }}>
                      <p className="SEARCH-PROJECTS-BY">
                        <span style={{ color: "#6a6865 !important" }}>
                          SEARCH PROJECTS BY:
                        </span>
                        <span style={{ color: "#807d7b" }}> KEYWORDS</span>
                      </p>
                      <br />
                      <div>
                        <form
                          className="form-search"
                          method="POST"
                          id="keywordSearch"
                          // onSubmit="keywordSearchFormSubmit()"
                        >
                          <input
                            type="text"
                            className="search_sub"
                            autoFocus="on"
                            autoComplete="off"
                            name="search_by_keyword"
                            id="search_by_keyword"
                            placeholder="Type in keywords here&#133;"
                          />
                          <div className="search_icon">
                            <img
                              id="search_by_keyword_image"
                              src="https://hbaarchitecture.com/2022/images/search.png"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                          <div className="clearfix"></div>
                          <button
                            type="submit"
                            className="btn_search visible-xs "
                            value="Search"
                          >
                            Search
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ overflow: "hidden", background: "#ffffff" }}>
            <div style={{ overflow: "hidden" }} id="innerpagesoverflowdiv">
              <div
                className="col-md-12 "
                style={{
                  opacity: 1,
                  backgroundColor: "#ccc",
                  minHeight: "96vh",
                }}
                id="product-bg-img-inner"
              >
                <AppLogoBurger
                  slider={[
                    "project-main-image-01.jpg",
                    "project-main-image-02.jpg",
                    "project-main-image-03.jpg",
                    "project-main-image-04.jpg",
                  ]}
                />

                <div
                  className="col-md-9 Defining-Luxury-by-D feature-project"
                  style={{ opacity: "1", WebkitAnimationDuration: "4s" }}
                  id="home-bg-img-title-inner"
                >
                  <span
                    className="slider-content-section"
                    id="feature-project-1"
                  >
                    <h4
                      className="feature_proj"
                      id="home-bg-img-title1"
                      style={{ opacity: 0 }}
                    >
                      FEATURED PROJECTS
                    </h4>
                    <a href="https://hbaarchitecture.com/2022/project/chedi-xinchang-resort">
                      <h2
                        className="hilton_word"
                        id="home-bg-img-title"
                        style={{ opacity: 0 }}
                      >
                        Chedi Xinchang Resort
                      </h2>
                    </a>
                    <p
                      className="p_word"
                      id="home-bg-img-title2"
                      style={{ opacity: 0, clear: "both" }}
                    >
                      Zhejiang, China
                    </p>
                  </span>

                  <span
                    className="slider-content-section"
                    id="feature-project-2"
                    style={{ display: "none" }}
                  >
                    <h4 className="feature_proj" style={{ opacity: 0 }}>
                      FEATURED PROJECTS
                    </h4>
                    <a href="https://hbaarchitecture.com/2022/">
                      <h2 className="hilton_word">Thu Thiem</h2>
                    </a>
                    <p className="p_word" style={{ opacity: 0, clear: "both" }}>
                      Ho Chi Minh, Vietnam
                    </p>
                  </span>

                  <span
                    className="slider-content-section"
                    id="feature-project-3"
                    style={{ display: "none" }}
                  >
                    <h4 className="feature_proj" style={{ opacity: 0 }}>
                      FEATURED PROJECTS
                    </h4>
                    <a href="https://hbaarchitecture.com/2022/">
                      <h2 className="hilton_word">Nangang</h2>
                    </a>
                    <p className="p_word" style={{ opacity: 0, clear: "both" }}>
                      Taipei, Taiwan
                    </p>
                  </span>

                  <span
                    className="slider-content-section"
                    id="feature-project-4"
                    style={{ display: "none" }}
                  >
                    <h4 className="feature_proj" style={{ opacity: 0 }}>
                      FEATURED PROJECTS
                    </h4>
                    <a href="https://hbaarchitecture.com/2022/project/retail-xuhui-ase-mall-xuhui-china">
                      <h2 className="hilton_word">Xuhui ASE Mall</h2>
                    </a>
                    <p className="p_word" style={{ opacity: 0, clear: "both" }}>
                      Shanghai, China
                    </p>
                  </span>

                  <div className="clearfix"></div>
                </div>

                <div>
                  <div
                    className="SCROLL-DOWN"
                    id="scrolldown"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://hbaarchitecture.com/2022/images/scroll-down.png"
                      className="home-bg-scroll-down animated fadeInDown"
                      style={{ opacity: 0, WebkitAnimationDuration: "3s" }}
                    />
                  </div>
                </div>
                <div className="clearfix"></div>
                <div
                  className="col-md-12 projectPagination"
                  style={{
                    padding: 0,
                    position: "absolute",
                    top: "76.5%",
                    zIndex: 0,
                    visibility: "hidden",
                  }}
                >
                  <div className="pagination">
                    <a
                      href="#"
                      id="left-project-click"
                      className="prev arrow-left_project-hero"
                    >
                      Previous
                    </a>
                    <span className="counter">
                      <em className="current" id="project-current">
                        <sup>1</sup>
                      </em>{" "}
                      of
                      <em className="total">
                        {" "}
                        <sup>7</sup>{" "}
                      </em>
                    </span>
                    <a
                      href="#"
                      id="right-project-click"
                      className="next arrow-right_project-hero"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="container" style={{ padding: 0 }}>
              <div
                className="col-xs-12 col-sm-12 col-md-12 second-proj "
                style={{ padding: 0, opacity: 1, zIndex: "2" }}
                id="project-main-section"
              >
                <div className="row heading_project">
                  <div className="col-xs-12 col-sm-12 col-md-9 filter_heading">
                    <div
                      className="all-page-heading"
                      style={{ color: "#6a6865" }}
                      id="filter_mobile"
                    >
                      <span>FILTER BY:</span>
                      <span
                        id="project_arrow"
                        className="arrow-down_project"
                      ></span>
                    </div>

                    <div className="clearfix1"></div>
                    <form
                      name="project_search_form"
                      id="project_search_form"
                      method="POST"
                      action=""
                    >
                      <input
                        type="hidden"
                        name="mode"
                        id="mode"
                        value="project_search"
                      />
                      <input
                        type="hidden"
                        name="project_type"
                        id="project_type"
                        value="6"
                      />
                      <input
                        type="hidden"
                        name="project_country"
                        id="project_country"
                      />
                      <input
                        type="hidden"
                        name="office_location"
                        id="office_location"
                      />
                      <input
                        type="hidden"
                        name="year_completed"
                        id="year_completed"
                      />
                      <ul
                        id="project_filter"
                        className="row"
                        style={{ margin: 0, padding: 0 }}
                      >
                        <ul id="filter" className="project_type_filter">
                          {category &&
                            category.length > 0 &&
                            category.map((cat, index) => (
                              <li
                                key={cat.project_type_id}
                                data-id={cat.project_type_id}
                                className={
                                  cat.project_type_id === filterId
                                    ? "current"
                                    : ""
                                }
                              >
                                <a
                                  onClick={() => {
                                    handleCategory(cat.project_type_id);
                                  }}
                                  style={{ outline: "none", cursor: "pointer" }}
                                >
                                  {cat.name}{" "}
                                </a>
                              </li>
                            ))}
                        </ul>

                        <li
                          className="col-xs-12 col-sm-3 col-md-3 list_filter"
                          style={{ display: "none" }}
                        >
                          <div className="filterMenu">FILTER</div>
                        </li>
                      </ul>
                    </form>
                  </div>
                  <div
                    className="col-xs-12 col-sm-12 col-md-3 sub_right keyword_project"
                    id="search_project"
                  >
                    <div className="">
                      <p
                        className="col-sm-12 col-md-12 all-page-heading filter_heading1"
                        style={{
                          color: "#6a6865",
                          paddingLeft: "0",
                          paddingRight: "0",
                          textAlign: "left",
                        }}
                      >
                        SEARCH PROJECTS BY:
                      </p>

                      <div
                        className="col-sm-12 col-md-12 filter_heading1"
                        style={{
                          marginTop: "5px",
                          paddingRight: "0",
                          paddingLeft: "0",
                        }}
                      >
                        <span>
                          <input
                            type="button"
                            value="KEYWORDS"
                            className="btn_sub"
                            data-toggle="modal"
                            // onClick="setTimeout(function(){document.getElementById('search_by_keyword').focus()}, 1000);"
                            data-target="#myModal"
                          />{" "}
                        </span>
                        <a href="https://hbaarchitecture.com/2022/global-projects">
                          <span>
                            <input
                              type="button"
                              style={{ outline: "none" }}
                              value="MAP"
                              className="btn_sub_map"
                            />{" "}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div
                className="row featured_project_slider proj-thumb-space-lft"
                id="project-listing-section"
                style={{
                  opacity: 1,
                  background: "#ffffff",
                  margin: 0,
                  position: "relative",
                  minHeight: "49.6em",
                }}
              >
                {filterProjects && filterProjects && filterProjects.length > 0 && (
                  <div
                    id="slideItem"
                    className="projecr_slider  padd_proj_"
                    style={{ display: "block", opacity: 1 }}
                  >
                    {filterProjects.map((item) => (
                      <div
                        key={item.project_id}
                        className="col-xs-12 col-sm-4 col-md-4 project_div_display"
                        style={{ overflow: "hidden", height: "527px" }}
                      >
                        <div
                          className="col-xs-12 col-sm-12 col-md-12 animateBlock block_img animated fadeInUp85se"
                          style={{ maxWidth: "930px", opacity: 0 }}
                          id="feature_proj"
                        >
                          <div className="main_sub">
                            <div className="proj_img_m">
                              <Link href={`/project/${item.seo_Url}`}>
                                <a style={{ cursor: "pointer" }}>
                                  <figure className="proj-tint">
                                    <img
                                      src={`https://hbaarchitecture.com/2022/images/uploads/projects_images/${item.image_name}`}
                                      className="img-responsive project-img project_img"
                                    />
                                  </figure>
                                </a>
                              </Link>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 project_sub">
                              <div className="col-xs-12 col-sm-7 col-md-7 Project_subtitle project-heading">
                                <span>
                                  <Link href={`/project/${item.seo_Url}`}>
                                    <a style={{ cursor: "pointer" }}>
                                      {item.name}
                                    </a>
                                  </Link>
                                </span>
                              </div>
                              <div
                                className="col-xs-12 col-sm-5 col-md-5 pull-right"
                                style={{ padding: 0 }}
                              >
                                <div className="viewHover">
                                  <div className="p_line view_project project_info_line"></div>
                                  <Link href={`/project/${item.seo_Url}`}>
                                    <a style={{ cursor: "pointer" }}>
                                      <p className="View-Project_subtitle project_info_link">
                                        View Project &nbsp;
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 Proje sub_view project_info_block">
                              {item.city} / {item.location}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="clearfix" style={{ margin: 0 }}></div>
          <style jsx>
            {`
              .modal-dialog {
                width: 70% !important;
                padding-left: 0.9%;
              }
              .modal-dialog-bottom {
                top: 50%;
                bottom: 0;
                left: 0;
              }
              #serviceModal .modal-dialog {
                width: 90%;
              }
              #serviceModal.modal-body {
                position: relative;
                padding: 0px !important;
              }

              /*  FA social icons */

              ul {
                padding: 0;
                list-style: none;
              }
              .footer-social-icons {
                width: 350px;
                display: block;
                margin: 0 auto;
              }
              .social-icon {
                color: #6a6865;
              }
              ul.social-icons {
                margin-top: 10px;
              }
              .social-icons li {
                vertical-align: top;
                display: inline;
                height: 100px;
              }
              .social-icons a1 {
                color: #6a6865;
                text-decoration: none;
              }
              .fa {
                font-size: 18px;
                padding-top: 0px !important;
              }
              .fa-facebook {
                padding: 10px 14px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-facebook:hover {
                color: #807d7b;
              }
              .fa-twitter {
                padding: 10px 12px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-twitter:hover {
                color: #807d7b;
              }
              .fa-instagram {
                padding: 10px 14px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-instagram:hover {
                color: #807d7b;
              }
              .fa-pinterest {
                padding: 10px 14px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-pinterest:hover {
                color: #807d7b;
              }
              .fa-linkedin {
                padding: 10px 14px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-linkedin:hover {
                color: #807d7b;
              }
              .fa-google-plus {
                padding: 10px 9px;
                -o-transition: 0.5s;
                -ms-transition: 0.5s;
                -moz-transition: 0.5s;
                -webkit-transition: 0.5s;
                transition: 0.5s;
              }
              .fa-google-plus:hover {
                color: #807d7b;
              }

              @media (max-width: 1367px) {
                .modal-dialog {
                  width: 95% !important;
                  margin: 10px auto;
                  padding: 0;
                }
              }

              @media (max-width: 1280px) {
                .modal-dialog {
                  width: 99% !important;
                }
              }
            `}
          </style>

          <AppModalPopupContact />
          <AppModalPopupCareer />
          <AppFooterLocation />
          <AppFooter />
        </div>
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.2/ScrollMagic.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://hbaarchitecture.com/2022/public/js/jquery-1.10.2.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/js/bootstrap.min.js"></Script>
      <Script src="/js/bundle.js"></Script>
      <Script src="/js/jquery-form-validate.min.js"></Script>
      <Script src="/js/wow.min.js"></Script>
      <Script src="/js/jquery.vegas.min.js"></Script>
      <Script src="/js/TweenMax.min.js"></Script>
      <Script src="/js/jquery.appear.js"></Script>
      <Script src="/js/abhinav.js"></Script>
      {/* <Script
        src="/js/site.js?date=2020_05_26"
        strategy="afterInteractive"
      ></Script> */}
      <Script
        src="/js/projectHomeSlider.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/js/sappleslider.multi.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/js/jquery.popupwindow.js"></Script>
      <Script src="/js/jquery-fullsizable.js"></Script>

      <Script id="cookies_location_binding" strategy="lazyOnload">
        {`
      $(function() {

  

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
        function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 365);
                }
            }
        }
        
        
        
        $( ".close_tnc" ).bind( "click", function() {
            setCookie("accept_tnc",'1',100);
            $('.privacy-box').css('display','none');
        });
        
        $('#location-section li').click(function(){
                    if($(this).children('a').hasClass("select")){
                        $(this).children('a').removeClass('select');
                    }else{
                        $(this).children('a').addClass('select');
                        $('#location-error-msg').hide();
                        $('#location-error').removeClass('error-label');
                    }
        });
        
         var tnc = getCookie("accept_tnc");
         if(tnc!=''){
            $('.privacy-box').css('display','none');
            console.log('1');
         }else{
            $('.privacy-box').css('display','block');
            console.log('2');
         }

         $('a.fullsizable').fullsizable({
      
        });


        });

        
/* next js scripts below fullsizeable */

$(document).ready(function(){


  $(document).on('click', '.contact_member_email_popup', function() {
      event.preventDefault();
      var location_id = $(this).attr('data-member-id');
      $('ul[option-name="member_email_universal_form"]').siblings('button').children('label').text($('ul[option-name="member_email_universal_form"] li[data-id="'+location_id+'"]:first').text());
      $('#office_id').val(location_id);
      $("#request_type").val('contact_member');
      console.log('Member id is '+location_id);
      //console.log($('ul[option-name="member_email_universal_form"] li[data-id="'+location_id+'"]:first').text());
        //$('#locationModal').hide();
           $('#locationModal').modal('hide');
          $('#mediaFormHeader').hide();
          $('.location-section-form').hide();
          $('.partner-section-form').show();
          $('#projectFormHeader').show();
          $('.publication-section').hide();
          $('#projectModal').modal('show');
  });


  $("#contact-request-form").validate({
      onkeyup: false,
      errorPlacement: function(error, element) {         
          error.insertBefore(element);
      },
      rules: {
          office_id: {
              required: true
          },
          publication: {
              required: true
          },
          subject: {
              required: true
          },
          message: {
              required: true
          },
          name: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          phone: {
              required: true
          },
          address: {
              required: true
          },
          captcha: {
              required: true
          }
      },
      messages:{
          office_id:{
              required:"Office is required"
          },
          publication: {
              required: "Publication is required"
          },
          subject: {
              required:"Subject is required"
          },
          message: {
              required:"Message is required"
          },
          name: {
              required:"Name is required"
          },
          email: {
              required:"Email is required",
              email:"Invalid email Id"
          },
          phone: {
              required:"Phone is required"
          },
          address: {
              required:"Mailing address is required"
          },
          captcha: {
              required:"Captcha is required"
          }
      },
      highlight: function(element) {
          $('#'+$(element).attr('id')+'_label').addClass("error-label");
      },
      unhighlight: function(element) {
          $('#'+$(element).attr('id')+'_label').removeClass("error-label");
      }
  });




$("#uploadForm").validate({
      onkeyup: false,
      errorPlacement: function(error, element) { 
          if(element.context.name=='userResume'){
              console.log(element);
              console.log(element.context.name=='userResume');
              console.log(error);
              $("#userResume1_label").append(error);
              //error.wrap("<p>");
          }else{
              error.insertBefore(element);
          }
      },
      rules: {
          office_id: {
              required: true
          },
          subject: {
              required: true
          },
          message: {
              required: true
          },
          name: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          phone: {
              required: true
          },
          userResume: {
              required: true
          }
      },
      messages:{
          office_id:{
              required:"Office is required"
          },
          subject: {
              required:"Subject is required"
          },
          message: {
              required:"Message is required"
          },
          name: {
              required:"Name is required"
          },
          email: {
              required:"Email is required",
              email:"Invalid email Id"
          },
          phone: {
              required:"Phone is required"
             
          },
          userResume: {
              required: "Resume is required"
          }
      },
      highlight: function(element) {
          $('#'+$(element).attr('id')+'_label').addClass("error-label");
      },
      unhighlight: function(element) {
          $('#'+$(element).attr('id')+'_label').removeClass("error-label");
      }
  });    
  $('input[type=file]').change(function(e){
      var fileName = $('input[type=file]')[0].files[0].name;
      $('#uploadFile').val(fileName);
  });
  
$(".modal-submit-career").click(function(e){
      e.preventDefault();

      var values = $('#location-section li').map(function(){ 
          if($(this).children('a').hasClass("select")){
              return $(this).attr('location-id');
          }
      }).get().join(',');
      if(values == ''){
          $('#location-error').addClass('error-label');
          $('#location-error-msg').show();
          return false;
      }else{
          $('#location-error').removeClass('error-label');
          $('#location-error-msg').hide();
      }
      console.log('office_ids = '+values);
      $('#office_ids').val(values);            
      
      
       var careerFormData = $("#uploadForm").serialize();
       console.log('careerFormData');
       console.log(careerFormData);
      //alert('hi');
       if($("#uploadForm").valid()){

          $('#uploadForm').css({'opacity':'0.1'});
          $('#form_loader').css({'display':'block'});
          $('.btnSubmit').attr('disabled','true');

         
          

       }

});

$(".modal-submit").click(function(e){
      e.preventDefault();
      var contactFormData = $("#contact-request-form").serialize();
      var text = $('.selected-location').text();
      if($.trim(text)=='Select location'){
          $('#location-error-label').addClass('error-label');
          $('#location_error').addClass('custom-error');
          $('#location_error').show();
      }else{
          $('#location-error-label').removeClass('error-label');
          $('#location_error').removeClass('custom-error');
          $('#location_error').hide();
      }
      if($("#contact-request-form").valid()){
         
        
      }
  });
  
  $('.custom-select-option-contact li').click(function(){
      console.log("custom-select-option-contact li clicked");
      var id = $(this).attr('data-id');
      $('.office_id').val(id);
      $(this).parent('ul').siblings('button').children('label').text($(this).text());
  })        
  
  
   $('.universal_contact_form').click(function(){
      event.preventDefault();
      console.log('universal contact page clicked');
      $('.location-section-form').show();
      $('#projectModal').modal('show');
      $("#request_type").val('project_information');

  });
  
  
  
 
  
  
  
  
  
  
  
  $('#newsletter_email').keypress(function(){
      $('#newsletter_error').hide();
  });
});


 /* tarteucitron and modal body success  */

 $(window).load(function(){
  console.log('11');
  setTimeout(function(){
      if($('#tarteaucitronDotGreen')[0].style.width=='100%')
      console.log('close tarteaucitron');
      else{
          $('#tarteaucitronManager').css('display','block');
          console.log('open tarteaucitron'+$('#tarteaucitronDotGreen')[0].style.width);
      }
  }, 1000);
});
$(document).on('click', '#tarteaucitronmcb', function() {
    $('.tarteaucitronAlertBigBottom').css('display','none');
});


$(document).on('click', '.close', function() {
     console.log('close clicked');
     $('.modal-body-succes').css('display','none');
     $('.modal-body-form').css('display','block');
     $('#subject,#message,#name, #phone,#email, #publication, #captcha').val('');
});

      `}
      </Script>

      <Script id="about-fullsizeable" strategy="lazyOnload" jsx>
        {`    
  
  $(function() {
      $('a.fullsizable').fullsizable({
      
      });

       
    });
    `}
      </Script>

      <Script id="about-location-forms-validations" strategy="lazyOnload" jsx>
        {`



    $(document).ready(function(){


        $(document).on('click', '.contact_office_email_popup', function() {
            event.preventDefault();
            var location_id = $(this).attr('data-location-id');
            $('ul[option-name="office_location_universal_form"]').siblings('button').children('label').text($('ul[option-name="office_location_universal_form"] li[data-id="'+location_id+'"]:first').text());
            $('#office_id').val(location_id);
            $("#request_type").val('project_information');
            console.log('Location id is '+location_id);
            //console.log($('ul[option-name="office_location_universal_form"] li[data-id="'+location_id+'"]:first').text());
              //$('#locationModal').hide();
                 $('#locationModal').modal('hide');
                $('#mediaFormHeader').hide();
                $('.location-section-form').show();
                $('.partner-section-form').hide();
				$('#projectFormHeader').show();
                $('.publication-section').hide();
              $('.location-section-form').show();
                $('#projectModal').modal('show');
        });


        $(document).on('click', '.contact_member_email_popup', function() {
            event.preventDefault();
            var location_id = $(this).attr('data-member-id');
            $('ul[option-name="member_email_universal_form"]').siblings('button').children('label').text($('ul[option-name="member_email_universal_form"] li[data-id="'+location_id+'"]:first').text());
            $('#office_id').val(location_id);
            $("#request_type").val('contact_member');
            console.log('Member id is '+location_id);
            //console.log($('ul[option-name="member_email_universal_form"] li[data-id="'+location_id+'"]:first').text());
              //$('#locationModal').hide();
                 $('#locationModal').modal('hide');
                $('#mediaFormHeader').hide();
                $('.location-section-form').hide();
                $('.partner-section-form').show();
				$('#projectFormHeader').show();
                $('.publication-section').hide();
                $('#projectModal').modal('show');
        });


        
        
         
        $("#contact-request-form").validate({
            onkeyup: false,
            errorPlacement: function(error, element) {         
                error.insertBefore(element);
            },
            rules: {
                office_id: {
                    required: true
                },
                publication: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                address: {
                    required: true
                },
                captcha: {
                    required: true
                }
            },
            messages:{
                office_id:{
                    required:"Office is required"
                },
                publication: {
                    required: "Publication is required"
                },
                subject: {
                    required:"Subject is required"
                },
                message: {
                    required:"Message is required"
                },
                name: {
                    required:"Name is required"
                },
                email: {
                    required:"Email is required",
                    email:"Invalid email Id"
                },
                phone: {
                    required:"Phone is required"
                },
                address: {
                    required:"Mailing address is required"
                },
                captcha: {
                    required:"Captcha is required"
                }
            },
            highlight: function(element) {
                $('#'+$(element).attr('id')+'_label').addClass("error-label");
            },
            unhighlight: function(element) {
                $('#'+$(element).attr('id')+'_label').removeClass("error-label");
            }
        });
     



   $("#uploadForm").validate({
            onkeyup: false,
            errorPlacement: function(error, element) { 
                if(element.context.name=='userResume'){
                    console.log(element);
                    console.log(element.context.name=='userResume');
                    console.log(error);
                    $("#userResume1_label").append(error);
                    //error.wrap("<p>");
                }else{
                    error.insertBefore(element);
                }
            },
            rules: {
                office_id: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                userResume: {
                    required: true
                }
            },
            messages:{
                office_id:{
                    required:"Office is required"
                },
                subject: {
                    required:"Subject is required"
                },
                message: {
                    required:"Message is required"
                },
                name: {
                    required:"Name is required"
                },
                email: {
                    required:"Email is required",
                    email:"Invalid email Id"
                },
                phone: {
                    required:"Phone is required"
                   
                },
                userResume: {
                    required: "Resume is required"
                }
            },
            highlight: function(element) {
                $('#'+$(element).attr('id')+'_label').addClass("error-label");
            },
            unhighlight: function(element) {
                $('#'+$(element).attr('id')+'_label').removeClass("error-label");
            }
        });    
        $('input[type=file]').change(function(e){
            var fileName = $('input[type=file]')[0].files[0].name;
            $('#uploadFile').val(fileName);
        });
        
$(".modal-submit-career").click(function(e){
            e.preventDefault();

            var values = $('#location-section li').map(function(){ 
                if($(this).children('a').hasClass("select")){
                    return $(this).attr('location-id');
                }
            }).get().join(',');
            if(values == ''){
                $('#location-error').addClass('error-label');
                $('#location-error-msg').show();
                return false;
            }else{
                $('#location-error').removeClass('error-label');
                $('#location-error-msg').hide();
            }
            console.log('office_ids = '+values);
            $('#office_ids').val(values);            
            
            
             var careerFormData = $("#uploadForm").serialize();
             console.log('careerFormData');
             console.log(careerFormData);
            //alert('hi');
             if($("#uploadForm").valid()){

                $('#uploadForm').css({'opacity':'0.1'});
                $('#form_loader').css({'display':'block'});
                $('.btnSubmit').attr('disabled','true');

                
                
             }


});

$(".modal-submit").click(function(e){
            e.preventDefault();
            var contactFormData = $("#contact-request-form").serialize();
            var text = $('.selected-location').text();
            if($.trim(text)=='Select location'){
                $('#location-error-label').addClass('error-label');
                $('#location_error').addClass('custom-error');
                $('#location_error').show();
            }else{
                $('#location-error-label').removeClass('error-label');
                $('#location_error').removeClass('custom-error');
                $('#location_error').hide();
            }
            if($("#contact-request-form").valid()){
                
              
            }
        });
        $('.custom-select-option-contact li').click(function(){
            console.log("custom-select-option-contact li clicked");
            var id = $(this).attr('data-id');
            $('.office_id').val(id);
            $(this).parent('ul').siblings('button').children('label').text($(this).text());
        })        
        
        
         $('.universal_contact_form').click(function(){
            event.preventDefault();
            console.log('universal contact page clicked');
            $('.location-section-form').show();
            $('#projectModal').modal('show');
            $("#request_type").val('project_information');

        });
        
        
        
        $('#newsletter_email').keypress(function(){
            $('#newsletter_error').hide();
        });
    });
    `}
      </Script>

      <Script id="project_slider_js" strategy="lazyOnload">
        {`
    $(document).ready(function() {


        $('#scrolldown').click(function() {
            console.log('scrolldown clicked');
            $('html, body').animate({
                scrollTop: $("#project-main-section").offset().top - 30
            }, 2000);
        });

        $('.project_type_filter li').click(function() {
            //console.log('clicked');
            var id = $(this).attr('data-id');
            //console.log(id);
            $('#project_type').val(id);
            $('.project_type_filter li').removeClass('current');
            $(this).addClass('current');
            $('html, body').animate({
                scrollTop: ($("#project-main-section").offset().top) - 25
            }, 1000);

            //var option_id = $(this).parent('ul').attr('option-name');
            //$('#' + option_id).val(id);
            //$(this).parent('ul').siblings('button').children('label').text($(this).text());
            // bindEvent('project-page-search', $('#project_search_form').serialize());
        });



        setTimeout(function() {
            $('#project-main-section').addClass("animated fadeIn");
        }, 2000);
        $("#project_arrow").click(function() {
            $("#project_search_form").toggle();
            $("#search_project").toggle();
        });
                /*setTimeout(function () {
            $('#project-main-section').addClass("animated fadeIn");
        }, 4000);
        setTimeout(function () {
            $('#project-listing-section').addClass("animated fadeIn");
        }, 6000);*/
        var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
        var $window = $(window);

        $elements.each(function(i, elem) { //loop through each element
            if ($(this).hasClass('animated')) // check if already animated
                return;
            var that = this;

            setTimeout(function() {
                animateMe($(that));
            }, 1000 * i);
        });



        function animateMe(elem) {
            setTimeout(function() {
                $(elem).removeClass('notAnimated').addClass('animated fadeInUp1se');
                setTimeout(function() {
                    if (!/Android|webOS|iPhone|BlackBerry /i.test(navigator.userAgent)) {
                        $(elem).parent().css('height', '527', 'padding', '0');
                    } else {
                        $(elem).parent().css('height', 'auto', 'padding', '0');
                    }
                }, 100); //500
            }, 200); //1000
        }
        setTimeout(function() {
            // bindEvent('project-page-search', $('#project_search_form').serialize());
        }, 3800); //1000

        $('#left-project-click').click(function() {
            var current_value = $('#project-current').text();
            if (current_value == 1)
                current_value = 7;
            else
                current_value = parseInt(parseInt(current_value) - 1);

            if (current_value == 7)
                previous_value = 1;
            else
                previous_value = parseInt(parseInt(current_value) + 1);

            $('#project-current').html('<sup>' + current_value + '</sup>');
            projectSliderAnimation(current_value, previous_value);

        });
        $('#right-project-click').click(function() {
            var current_value = $('#project-current').text();
            console.log();
            var total_slides = $('.feature-project span').length;
            if (current_value == total_slides)
                current_value = 1;
            else
                current_value = parseInt(parseInt(current_value) + 1);

            //get image detail current and next

            if (current_value == 1)
                previous_value = total_slides;
            else
                previous_value = parseInt(parseInt(current_value) - 1);


            $('#project-current').html('<sup>' + current_value + '</sup>');


            projectSliderAnimation(current_value, previous_value);
            //$('#' + id).show();
        });

        setTimeout(function() {
            setInterval(function() {
                $('#right-project-click').click();
            }, 5000);
        }, 4000);

        $('#filter_mobile').click(function() {
            //project_arrow
            $("#project_arrow").removeClass();
            if (!$('#project_search_form').is(':visible')) {
                $('#project_arrow').addClass('arrow-down_project');
            } else {
                $('#project_arrow').addClass('arrow-up_project');
            }
        });
    });

    function projectSliderAnimation(current_value, previous_value) {

        $('.hilton_word').hide();
        $('.feature_proj').removeClass('animated fadeIn');
        $('.p_word').removeClass('animated fadeIn');
        $('.slider-content-section').css('display', 'none');


        var previous_img_div = ($('#desktop-slider-section div:nth-child(' + previous_value + ')'));
        var current_img_div = ($('#desktop-slider-section div:nth-child(' + current_value + ')'));

        //added animation between previous and next image
        previous_img_div.hide(1000);
        current_img_div.show(1000);
        $('.feature-project span:nth-child(' + current_value + ')').css('display', 'block');

        $('.slider-content-section:nth-child(' + current_value + ')').css('display', 'block');



        setTimeout(function() {
            $('.slider-content-section:nth-child(' + current_value + ') .feature_proj').addClass('animated fadeIn');
        }, 50);
        setTimeout(function() {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            var $el = $('.feature-project span:nth-child(' + current_value + ') .hilton_word'),
                text = $.trim($el.text()),
                words = text.split(" "),
                html = "";
            for (var i = 0; i < words.length; i++) {
                html += "<div style='    float: left;padding-right: 15px;'>" + words[i] + ((i + 1) === words.length ? "" : " ") + "</div>";
            }
            $el.html(html).children().css('display', 'none').each(function(i) {
                var my = this;
                setTimeout(function() {
                    $(my).css({
                        'display': 'block',
                        'opacity': '1'
                    }).addClass("animated fadeInUp85se");
                }, 300 * i);
                $('.feature-project span:nth-child(' + current_value + ') .hilton_word').show();
            });
        }, 500);
        setTimeout(function() {
            $('.feature-project span:nth-child(' + current_value + ') .p_word').addClass("animated fadeIn");
        }, 1200);





    }
    `}
      </Script>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://hbaarchitecture.com/2022/api/project`);
  const data = await res.json();
  //   console.log(projects);
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
