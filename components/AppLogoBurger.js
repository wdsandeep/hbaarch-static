import React from "react";
import Link from "next/link";
import sliceIntoChunks from "../utils/sliceIntoChunks";
import Script from "next/script";

const AppLogoBurger = ({ slider, project_images }) => {
  const handleBurgerClick = () => {
    console.log("clicked burger");
    $("#project").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#offices").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#about").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#brand_partners").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#serviceNav").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#news").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#career").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#contact").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#language_menu").removeClass("animated fadeOutUp1").css("opacity", "0");
    $(".topBar").slideDown(400);
    $("#burgernavbar").hide(1000);
    $("#burgernavbarcancel").show(1000);
    $("#home-bg-img-inner").css("opacity", "1");
    $("#home-bg-img-inner").removeClass("animated fadeIn");
    setTimeout(function () {
      $("#project").addClass("animated fadeInDown1").css("opacity", "0");
    }, 100); //200
    setTimeout(function () {
      $("#offices").addClass("animated fadeInDown1").css("opacity", "0");
    }, 200); //400
    setTimeout(function () {
      $("#about").addClass("animated fadeInDown1").css("opacity", "0");
    }, 300); //600
    setTimeout(function () {
      $("#brand_partners").addClass("animated fadeInDown1").css("opacity", "0");
    }, 400); //600
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeInDown1").css("opacity", "0");
    }, 500); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeInDown1").css("opacity", "0");
    }, 600); //1000
    setTimeout(function () {
      $("#career").addClass("animated fadeInDown1").css("opacity", "0");
    }, 700); //1200
    setTimeout(function () {
      $("#contact").addClass("animated fadeInDown1").css("opacity", "0");
    }, 800); //300
    setTimeout(function () {
      $("#language_menu").addClass("animated fadeInDown1").css("opacity", "0");
    }, 150); //300
  };

  const handleBurgerCancelClick = () => {
    $("#project").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#offices").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#about").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#brand_partners")
      .removeClass("animated fadeInDown1")
      .css("opacity", "1");
    $("#serviceNav").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#news").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#career").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#language_menu").removeClass("animated fadeInDown1").css("opacity", "1");

    setTimeout(function () {
      $("#project").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 900); //1400
    setTimeout(function () {
      $("#offices").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 800); //1200
    setTimeout(function () {
      $("#about").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 700); //1000
    setTimeout(function () {
      $("#brand_partners").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 600); //1000
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 500); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 400); //600
    setTimeout(function () {
      $("#career").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 300); //400
    setTimeout(function () {
      $("#contact").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 200); //200

    setTimeout(function () {
      $("#language_menu").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100); //200

    setTimeout(function () {
      $(".topBar").slideUp(400); //400
      // showServiceImageDiv(1);
      jQuery(".logo1").removeClass("select");
      jQuery(".logo2").removeClass("select");
      jQuery(".logo3").removeClass("select");
      jQuery(".logo4").removeClass("select");
      jQuery(".logo5").removeClass("select");
      jQuery(".logo6").removeClass("select");
      jQuery(".logo7").removeClass("select");
      jQuery(".logo8").removeClass("select");
      jQuery(".logo9").addClass("select");
      jQuery(".service-description-popup").css("display", "none");
      jQuery(".list-9-div").css("display", "block");

      // $("#burgernavbar").show(1000);
      //$("#burgernavbarcancel").hide(1000);
    }, 1200); //1800

    setTimeout(function () {
      //$(".topBar").slideUp(400);
      $("#burgernavbar").show(800); //800
      $("#burgernavbarcancel").hide(800); //800
    }, 575); //1150

    //$('#slideImg').removeAttr('class');
    //$('#slideImg').addClass('listMainImg navHover list-1');
    $("body").css("overflow-y", "auto");

    if ($(window).width() < 768) {
      $("#project_filter").hide();
      $("#search_project").hide();
    }
    $(document).on("click", "#project_arrow", function () {
      $("#project_filter").toggle();
      $("#search_project").toggle();
    });
  };

  const handleSliderClickRight = () => {
    var current_selected = $(".banner-slider div:visible").attr("item-count");
    var current_next = parseInt(parseInt(current_selected) + 1);

    //by sandeep arrow count
    var total_images = $(".thumb-listing .sapple-slider-item-thumb").length;
    var left_arrow_count = current_next;
    $(".left-slider-section-").find(".digitProject").text(left_arrow_count);
    var right_arrow_count = current_next + 2;
    if (right_arrow_count == total_images + 1) right_arrow_count = 1;
    if (right_arrow_count == total_images + 2) right_arrow_count = 2;
    $(".right-slider-section-").find(".digitProject").text(right_arrow_count);

    $(".sapple-slider-item").css({ display: "none" });
    $(".sapple-slider-item").removeClass("animated fadeIn");
    if ($("#sapple-slider-item-" + current_next).length) {
      $("#sapple-slider-item-" + current_next).css({ display: "block" });
      $("#sapple-slider-item-" + current_next).addClass("animated fadeIn1");
      $(".sapple-slider-thumb").css({ display: "none" });
      $(".sapple-slider-thumb").removeClass("animated fadeIn");
      $("#sapple-slider-thumb-item-" + current_next)
        .parent("div")
        .css({ display: "block" });
      $(".current").text(
        parseInt(
          $("#sapple-slider-thumb-item-" + current_next)
            .parent("div")
            .attr("thumb-parent-count")
        )
      );
      $("#sapple-slider-thumb-item-" + current_next)
        .parent("div")
        .addClass("animated fadeIn");
    } else {
      $("#sapple-slider-item-0").css({ display: "block" });
      $("#sapple-slider-item-0").addClass("animated fadeIn1");
      $(".sapple-slider-thumb").css({ display: "none" });
      $(".sapple-slider-thumb").removeClass("animated fadeIn");
      $("#sapple-slider-thumb-item-0").parent("div").css({ display: "block" });
      $("#sapple-slider-thumb-item-0")
        .parent("div")
        .addClass("animated fadeIn");
      $(".current").text(
        parseInt(
          $("#sapple-slider-thumb-item-0")
            .parent("div")
            .attr("thumb-parent-count")
        )
      );
    }
    $(".sapple-slider-item-thumb").removeClass("slider-active-thumb");
    $("#sapple-slider-thumb-item-" + current_next).addClass(
      "slider-active-thumb"
    );
  };

  const handleSliderClickLeft = () => {
    var current_selected = $(".banner-slider div:visible").attr("item-count");
    var current_prev = parseInt(parseInt(current_selected) - 1);

    //by sandeep arrow count
    var total_images = $(".thumb-listing .sapple-slider-item-thumb").length;
    var left_arrow_count = current_prev;
    if (left_arrow_count == 0) left_arrow_count = total_images;
    if (left_arrow_count == -1) left_arrow_count = total_images - 1;
    $(".left-slider-section-").find(".digitProject").text(left_arrow_count);
    var right_arrow_count = current_prev + 2;
    $(".right-slider-section-").find(".digitProject").text(right_arrow_count);

    $(".sapple-slider-item").css({ display: "none" });
    $(".sapple-slider-item").removeClass("animated fadeIn");
    if ($("#sapple-slider-item-" + current_prev).length) {
      $("#sapple-slider-item-" + current_prev).css({ display: "block" });
      $("#sapple-slider-item-" + current_prev).addClass("animated fadeIn1");
      $(".sapple-slider-thumb").css({ display: "none" });
      $(".sapple-slider-thumb").removeClass("animated fadeIn");
      $("#sapple-slider-thumb-item-" + current_prev)
        .parent("div")
        .css({ display: "block" });
      $("#sapple-slider-thumb-item-" + current_prev)
        .parent("div")
        .addClass("animated fadeIn");
      $(".current").text(
        parseInt(
          $("#sapple-slider-thumb-item-" + current_prev)
            .parent("div")
            .attr("thumb-parent-count")
        )
      );
    } else {
      $(".sapple-slider-item:last").css({ display: "block" });
      $(".sapple-slider-item:last").addClass("animated fadeIn1");
      var last_item_index = parseInt(
        $(".sapple-slider-item:last").attr("item-count")
      );
      $(".sapple-slider-thumb").css({ display: "none" });
      $(".sapple-slider-thumb").removeClass("animated fadeIn");
      $("#sapple-slider-thumb-item-" + last_item_index)
        .parent("div")
        .css({ display: "block" });
      $("#sapple-slider-thumb-item-" + last_item_index)
        .parent("div")
        .addClass("animated fadeIn");
      $(".current").text(
        parseInt(
          $("#sapple-slider-thumb-item-" + last_item_index)
            .parent("div")
            .attr("thumb-parent-count")
        )
      );
    }
    $(".sapple-slider-item-thumb").removeClass("slider-active-thumb");
    $("#sapple-slider-thumb-item-" + current_prev).addClass(
      "slider-active-thumb"
    );
  };

  const handleViewMorePicture = () => {
    console.log("handle view more picture clicked");
    $(".thumb-listing").show();
    $("#view-more-picture").hide();
    $("#hide-slider-thumb").show();
  };

  const handleHideMorePicture = () => {
    $(".thumb-listing").hide();
    $("#view-more-picture").show();
    $("#hide-slider-thumb").hide();
  };

  const handleThumbClick = (data_count) => {
    var clickedThumb = data_count;
    $(".sapple-slider-item").css({ display: "none" });
    $(".sapple-slider-item").removeClass("animated fadeIn");
    $("#sapple-slider-item-" + clickedThumb).css({ display: "block" });
    $("#sapple-slider-item-" + clickedThumb).addClass("animated fadeIn1");
    $(".sapple-slider-item-thumb").removeClass("slider-active-thumb");
    $("#sapple-slider-thumb-item-" + clickedThumb).addClass(
      "slider-active-thumb"
    );

    var total_images = $(".thumb-listing .sapple-slider-item-thumb").length;
    var left_arrow_count = clickedThumb;
    if (left_arrow_count == 0) left_arrow_count = total_images;
    $(".left-slider-section-").find(".digitProject").text(left_arrow_count);
    var right_arrow_count = parseInt(clickedThumb);
    right_arrow_count += 2;
    if (right_arrow_count == total_images + 1) right_arrow_count = 1;
    $(".right-slider-section-").find(".digitProject").text(right_arrow_count);
  };

  const handleThumbRightArrow = () => {
    var current_value = $(".current").text();
    var total_thumb_page = $(".sapple-slider-thumb").length;
    if (current_value == total_thumb_page) current_value = 1;
    else current_value = parseInt(parseInt(current_value) + 1);
    $(".sapple-slider-thumb").css({ display: "none" });
    $(".sapple-slider-thumb").removeClass("animated fadeIn");
    $("#thumb-list-" + current_value).css({ display: "block" });
    $("#thumb-list-" + current_value).addClass("animated fadeIn");
    $(".current").text(current_value);
  };

  const handleThumbLeftArrow = () => {
    var current_value = $(".current").text();
    var total_thumb_page = $(".sapple-slider-thumb").length;
    if (current_value == 1) current_value = total_thumb_page;
    else current_value = parseInt(parseInt(current_value) - 1);
    $(".sapple-slider-thumb").css({ display: "none" });
    $(".sapple-slider-thumb").removeClass("animated fadeIn");
    $("#thumb-list-" + current_value).css({ display: "block" });
    $("#thumb-list-" + current_value).addClass("animated fadeIn");
    $(".current").text(current_value);
  };

  const handleMaximiseClick = () => {
    console.log("clicked");
    var n = $(".sapple-slider-item-thumb").length;
    var act = 0;
    act = $(".slider-active-thumb img").attr("data-count");
    console.log("n=", n);
    console.log("act", act);
    $("#div_fullsizable a:eq(" + act + ")").trigger("click");

    $(".sapple-slider-item").each(function () {
      if ($(this).css("display") == "block") {
        var imageObj = $(this).children("img").attr("src");
        //alert(imageObj);
        if (/Android|iPhone|BlackBerry /i.test(navigator.userAgent)) {
          var imageObj = imageObj.replace(
            "_desktop-slider",
            "_mobile-landscape"
          );
        } else {
          var imageObj = imageObj.replace("_desktop-slider", "");
        }
        //console.log(imageObj); return false;
        $(".fullWidthESC").show();
        $("#full-image-content").attr("src", imageObj);
        $("#full-width-image-popup").modal("show");
        setTimeout(function () {
          $(".fullWidthESC").hide("slow");
        }, 5000);
      }
    });
  };

  return (
    <>
      <style jsx>
        {`
          .sapple-slider-thumb {
            height: 78px;
            display: none;
            width: 505px;
            margin: 0px auto;
          }
          .sapple-slider-item-thumb {
            height: 56px;
            width: 89px;
            float: left;
            margin-left: 10px;
            margin-top: 10px;
          }
          .sapple-thumb-list {
            width: 100%;
            height: 100%;
          }
          #view-more-picture {
            text-align: center;
            cursor: pointer;
            position: absolute;
            z-index: 999999999;
            left: 50%;
            bottom: 0px;
            transform: translateX(-50%);
            display: block;
            z-index: 0;
          }
          .thumb-section {
            padding: 0px;
          }
          sub,
          sup {
            color: #807d7b;
          }
          .right-arrow:hover,
          .left-arrow:hover {
            opacity: 0.4;
            border-left-color: #807d7b;
            border-right-color: #807d7b;
          }
          .maximise {
            cursor: pointer;
          }
          .slider-active-thumb {
            border: solid 2px #807d7b;
          }
          /*.left-slider-section{z-index: 9;}*/
          .banner-slider {
            position: inherit;
          }
          .sapple-slider-banner {
            height: 602px;
            width: 1332px;
          }

          .right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            right: 3.8% !important;
            left: 0;
          }

          .left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }

          .leftLine {
            background: #807d7b;
            height: 2px;
            width: 148px;
            position: absolute;
            top: 15px;
            left: 0;
            transition: 0.6s;
          }

          .rightLine {
            background: #807d7b;
            height: 2px;
            width: 148px;
            position: absolute;
            top: 15px;
            left: 0;
            transition: 0.6s;
          }

          .arrowLeft {
            position: absolute;
            top: -27px;
            height: 30px;
            left: 10px;
            width: 148px;
          }

          .arrowRight {
            position: absolute;
            top: -27px;
            height: 30px;
            right: 10px;
            width: 148px;
          }

          .left-slider-section:hover .leftLine {
            left: -34px;
            width: 181px;
          }
          .right-slider-section:hover .rightLine {
            left: 0px;
            width: 181px;
          }

          .digitProject {
            font-family: BauerBodoniBT;
            font-size: 30px;
            letter-spacing: 1px;
            color: #807d7b;
            position: relative;
            text-align: center;
            top: -30px;
          }
          i {
            border: solid #807d7b;
            border-top-width: medium;
            border-right-width: medium;
            border-bottom-width: medium;
            border-left-width: medium;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 10px !important;
          }
        `}
      </style>
      <div className="row topHeader">
        <div
          className="col-md-6 main-logo"
          style={{ opacity: 1, zIndex: 56 }}
          id="main-logo"
        >
          <Link href={"/"}>
            <a href="#">
              <img src="/images/HBA-Logo-Illuminate-White.svg" />
            </a>
          </Link>
        </div>

        <div className="col-md-6 nav-bar" style={{ padding: 0, zIndex: 65 }}>
          <div
            id="burgernavbar"
            onClick={() => {
              handleBurgerClick();
            }}
          >
            <div className="nav-bar1 hamburger1" style={{ opacity: 1 }}></div>
            <div className="nav-bar2 hamburger2" style={{ opacity: 1 }}></div>
            <div className="nav-bar3 hamburger3" style={{ opacity: 1 }}></div>
          </div>
          <div
            id="burgernavbarcancel"
            style={{
              display: "none",
              zIndex: 3,
              top: "-20px",
              position: "absolute",
            }}
            className="navCanel"
          >
            <a
              onClick={() => {
                handleBurgerCancelClick();
              }}
              className="iconCancel"
            ></a>
          </div>
        </div>

        {slider && slider.length > 0 && (
          <div id="desktop-slider-section" style={{ display: "block" }}>
            {slider.map((slide, index) => {
              return (
                <div
                  key={Math.random()}
                  className="sapple-slider-item"
                  id={`sapple-slider-item-${index + 1}`}
                  item-count={index}
                  style={{ display: "block" }}
                >
                  <img
                    id="slider-image-1"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/projects/${slide}`}
                    alt="slider-image"
                  />
                </div>
              );
            })}
          </div>
        )}

        {project_images && project_images.length > 0 && (
          <div id="desktop-slider-section" style={{ display: "block" }}>
            <div className="sapple-slider">
              <div className="sapple-slider-banner">
                <div className="banner-slider">
                  {project_images.map((slide, index) => {
                    return (
                      <div
                        key={Math.random()}
                        className="sapple-slider-item"
                        id={`sapple-slider-item-${index}`}
                        item-count={index}
                        style={{ display: index === 0 ? "block" : "none" }}
                      >
                        <img
                          id={`slider-image-${index}`}
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/uploads/projects_images/${slide.desktop_slider}`}
                          alt="slider-image"
                        />
                      </div>
                    );
                  })}
                  <a
                    onClick={() => handleSliderClickLeft()}
                    className="left-slider-section-"
                    align="left"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="left-slider-section">
                      <div className="arrowLeft">
                        <div className="digitProject">
                          {project_images.length}
                        </div>
                        <div className="leftLine"></div>
                      </div>
                      <i className="arrow left"></i>
                    </div>
                  </a>
                  <a
                    onClick={() => handleSliderClickRight()}
                    className="right-slider-section-"
                    align="right"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="right-slider-section">
                      <div className="arrowRight">
                        <div className="digitProject">2</div>
                        <div className="rightLine"></div>
                      </div>
                      <i className="arrow right"></i>
                    </div>
                  </a>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    id="view-more-picture"
                    onClick={() => {
                      handleViewMorePicture();
                    }}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/view-more-pictures.png`}
                    alt="View more pictures"
                  />
                </div>

                <div className="thumb-section">
                  <div
                    onClick={() => {
                      handleHideMorePicture();
                    }}
                    id="hide-slider-thumb"
                    style={{
                      textAlign: "center",
                      display: "none",
                      marginTop: "-14px",
                    }}
                  >
                    <img
                      style={{ cursor: "pointer" }}
                      id="hide-more-picture"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/hide-slider.png`}
                      alt="hide slider"
                    />
                  </div>

                  <div className="thumb-listing" style={{ display: "none" }}>
                    {sliceIntoChunks(project_images, 5).map(
                      (arr_group, index) => {
                        // console.log("inside", arr_group);
                        let inside_return = arr_group.map(
                          (item, indexinside) => {
                            return (
                              <div
                                key={index * 5 + indexinside}
                                className="sapple-slider-item-thumb"
                                id={`sapple-slider-thumb-item-${
                                  index * 5 + indexinside
                                }`}
                              >
                                <img
                                  onClick={() => {
                                    handleThumbClick(index * 5 + indexinside);
                                  }}
                                  className="sapple-thumb-list"
                                  data-count={index * 5 + indexinside}
                                  id={`slider-thumb-image-${
                                    index * 5 + indexinside
                                  }`}
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/uploads/projects_images/${item.slider_thumb}`}
                                  alt="slider-image"
                                />
                              </div>
                            );
                          }
                        );
                        return (
                          <div
                            className="sapple-slider-thumb"
                            id={`thumb-list-${index + 1}`}
                            thumb-parent-count={index + 1}
                            key={index}
                            style={{ display: index === 0 ? "block" : "none" }}
                          >
                            {inside_return}
                          </div>
                        );
                      }
                    )}

                    <div
                      className="left-arrow-section"
                      onClick={() => {
                        handleThumbLeftArrow();
                      }}
                    >
                      <i className="left-arrow"></i>
                    </div>
                    <div
                      className="right-arrow-section"
                      onClick={() => {
                        handleThumbRightArrow();
                      }}
                    >
                      <i className="right-arrow"></i>
                    </div>
                    <div className="pagination-counter">
                      <span className="counter">
                        <sup className="current">1</sup>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/line.png`}
                          alt="line"
                        />
                        <sub className="total">
                          {Math.ceil(project_images.length / 5)}
                        </sub>
                      </span>
                    </div>

                    <div
                      className="maximise"
                      onClick={() => {
                        handleMaximiseClick();
                      }}
                    >
                      <img
                        height="30"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/maximise.png`}
                        alt="maximise image"
                      />
                    </div>

                    <div id="div_fullsizable">
                      {project_images &&
                        project_images.length > 0 &&
                        project_images.map((item) => (
                          <a
                            key={item.id}
                            href={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/uploads/projects_images/${item.image_name}`}
                          ></a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="mobile-slider-section" style={{ display: "none" }}>
          <div className="sapple-mobile-slider">
            <div className="banner-mobile-slider">
              {project_images &&
                project_images.length > 0 &&
                project_images.map((item, index) => (
                  <div
                    key={index}
                    className="sapple-mobile-slider-item"
                    id={`sapple-mobile-slider-item-${index}`}
                    item-count={index}
                    style={{ display: "none" }}
                  >
                    <img
                      className="mobile-image-slider-img"
                      id={`mobile-slider-image-${index}`}
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/uploads/projects_images/${item.desktop_slider}`}
                      alt="slider-image"
                    />
                  </div>
                ))}

              <div
                className="col-md-12 projectPagination"
                style={{
                  padding: 0,
                  position: "absolute",
                  top: "76.5%",
                  zIndex: 0,
                }}
              >
                <div className="pagination">
                  <a
                    href="#"
                    id="left-mobile-slider-click"
                    className="prev arrow-left_project"
                  >
                    Previous
                  </a>
                  <span className="counter">
                    <em
                      className="current-mobile"
                      id="project-current"
                      style={{ right: "65px", bottom: "10px" }}
                    >
                      <sup>1</sup>
                    </em>{" "}
                    of
                    <em
                      className="total-mobile"
                      style={{ right: "25px", bottom: "0px" }}
                    >
                      {" "}
                      <sup>3</sup>{" "}
                    </em>
                  </span>
                  <a
                    href="#"
                    id="right-mobile-slider-click"
                    className="next arrow-right_project"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/js/jquery-fullsizable.js"></Script>
      <Script id="project-detail-page-slider" strategy="lazyOnload">
        {`

        


        $('#mobile-maxmise').click(function(){
          $(".sapple-mobile-slider-item").each(function(){
              if($(this).css("display")=="block"){
                  var imageObj = $(this).children('img').attr('src');
                  $('.fullWidthESC').show();
                  $('#full-image-content').attr('src',imageObj);
                  $('#full-width-image-popup').modal('show');
                  setTimeout(function () {
                      $('.fullWidthESC').hide('slow');
                  }, 5000);
              }
          });
      })


      


  
  
$('#scrolldown').click(function() {
  $('html, body').animate({scrollTop:875}, 'slow');
 });

 
 

          `}
      </Script>
    </>
  );
};

export default AppLogoBurger;
