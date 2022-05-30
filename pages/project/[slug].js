import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import AppLoader from "../../components/AppLoader";
import AppTopBar from "../../components/AppTopBar";
import AppMenu from "../../components/AppMenu";
import AppLogoBurger from "../../components/AppLogoBurger";
import AppModalPopupCareer from "../../components/AppModalPopupCareer";
import AppModalPopupContact from "../../components/AppModalPopupContact";
import AppFooterLocation from "../../components/AppFooterLocation";
import AppFooter from "../../components/AppFooter";

const Project_details = ({ images_list, project_detail, related_projects }) => {
  return (
    <>
      <Head>
        <title>HBAarchitecture - Contact us.</title>
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
              .news-recogination {
                position: absolute;
                top: 20%;
                left: 0;
                z-index: 1;
              }

              .preProject {
                font-family: Avenir;
                font-size: 12px;
                font-weight: 900;
                letter-spacing: 1px;
                text-align: center;
                color: #ffffff;
                position: relative;
                top: -8px;
              }
              .fullWidthImg {
                width: auto;
                height: 100%;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                outline: none;
              }
              .fullWidthDiv {
                height: 100%;
                width: 100%;
                position: fixed;
                left: 0;
                top: 0;
                z-index: 9;
                background-color: rgba(0, 0, 0, 0.7);
              }
              .fullWidthESC {
                width: 30%;
                height: 12%;
                background: rgba(0, 0, 0, 0.71);
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                color: #ffffff;
                text-align: center;
                font-family: Avenir-Roman;
                font-size: 17px;
                line-height: 1.78;
              }

              #full-width-image-popup .modal-dialog {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
              }

              .project_stats {
                width: 6.5em;
                display: inline-block;
              }
              @media (max-width: 767px) {
                .news-recogination img {
                  width: 67px;
                }
              }
            `}
          </style>
          <Script id="project-detail-page-banner" strategy="afterInteractive">{`
          
          var pagebannerheight="600px";

          `}</Script>
          <Script id="project-detail-social-share" strategy="afterInteractive">
            {` 
                function fbShare(url, title, descr, image, winWidth, winHeight) {
                    var winTop = (screen.height / 2) - (winHeight / 2);
                    var winLeft = (screen.width / 2) - (winWidth / 2);
                    window.open('https://www.facebook.com/sharer/sharer.php?display=popup&p[title]=' + title + '&p[summary]=' + descr + '&u=' + url , 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                }

                function tweetshare(url, title, descr, image, winWidth, winHeight) {
                    var winTop = (screen.height / 2) - (winHeight / 2);
                    var winLeft = (screen.width / 2) - (winWidth / 2);
                    window.open(url , 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                }
            `}
          </Script>

          <div
            className="modal fade"
            id="full-width-image-popup"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            style={{ outline: "none" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header"></div>
                <div className="modal-body padd_f location_top">
                  <div className="fullWidthDiv">
                    <div
                      id=""
                      style={{
                        zIndex: 3,
                        top: "5.7%",
                        right: "5.5%",
                        position: "absolute",
                      }}
                      className="navCanel"
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&#215;</span>
                      </button>
                    </div>
                    <img
                      className="fullWidthImg"
                      id="full-image-content"
                      src="https://hbaarchitecture.com/2022/images/project_images/Eagle Island Botswana/HBA-Project-Featured-Image.jpg"
                      alt=""
                    />
                    <div className="fullWidthESC">
                      {" "}
                      <span
                        style={{
                          transform: "translate(-50%, -50%)",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "90%",
                        }}
                      >
                        Click &ldquo;ESC&rdquo; to Exit Full Screen Mode
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }} id="innerpagesoverflowdiv">
              <div
                className="col-md-12 project-bg-img  home-bg-img-animate-new"
                style={{ opacity: 1, backgroundImage: "url(/)" }}
                id="home-bg-img-inner"
              >
                <AppLogoBurger
                  project_images={images_list}
                  key={Math.random()}
                />
              </div>
            </div>

            <div
              className="container"
              style={{ padding: 0, background: "#ffffff" }}
            >
              <div className="row">
                <div id="mobile-pageAction">
                  <a id="mobile-maxmise" href="#">
                    <img
                      src="https://hbaarchitecture.com/2022/images/maximise.png"
                      alt="maximise"
                      className="ico"
                    />
                  </a>
                  <a
                    href="https://hbaarchitecture.com/2022/project/m-gallery"
                    align="left"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    <span>
                      Prev
                      <br />
                      Project
                    </span>
                  </a>
                  <span className="separator"></span>
                  <a
                    href="https://hbaarchitecture.com/2022/project/mangsang-global-resort"
                    align="right"
                  >
                    <span>
                      Next
                      <br />
                      Project
                    </span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
                <div
                  id="content-body"
                  className="col-md-12"
                  style={{ opacity: 1 }}
                >
                  <div className="hidden-sm hidden-xs">
                    <div
                      className="SCROLL-DOWN-project-details"
                      id="scrolldown"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="https://hbaarchitecture.com/2022/images/scroll-down.png"
                        className="home-bg-scroll-down animated fadeInDown50"
                        style={{
                          maxWidth: "30px",
                          opacity: 1,
                          WebkitAnimationDuration: "3s",
                        }}
                      />
                    </div>
                  </div>
                  <h2 style={{ maxWidth: "95%" }}>{project_detail?.name}</h2>
                  <h3>
                    {" "}
                    {project_detail?.tags.map((item) =>
                      item.project_type_id != 6 ? (
                        <span key={item.project_type_id}>{item.name} / </span>
                      ) : (
                        ""
                      )
                    )}{" "}
                    {project_detail?.location}
                  </h3>
                  <br />

                  <h4>PROJECT DESCRIPTION</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project_detail?.complete_description,
                    }}
                  ></div>
                  <div className="shareIcons">
                    <h4>SHARE THIS PROJECT</h4>

                    <a
                      onClick={() => {
                        fbShare(
                          "https://hbaarchitecture.com/2022/project/greystar-apartment",
                          "Fb Share",
                          "Facebook share popup",
                          "",
                          520,
                          350
                        );
                      }}
                      className="fa fa-facebook widthAuto fbStyle"
                      style={{ cursor: "pointer" }}
                    ></a>
                    <a
                      onClick={() => {
                        tweetshare(
                          "https://twitter.com/share?url=https://hbaarchitecture.com/2022/project/greystar-apartment&via=HBAarchitecture&related=HBAarchitecture%20project&hashtags=hoteldesign%2Cinteriordesign&text=Check%20out%20this%20design%20from%20HBAarchitecture",
                          "Tweet Share",
                          "Twitter share popup",
                          "",
                          520,
                          350
                        );
                      }}
                      className="fa fa-twitter widthAuto"
                      style={{ cursor: "pointer" }}
                    ></a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://hbaarchitecture.com/2022/project/greystar-apartment&title=&summary=%0D%0A%09Size+%28GFA%29+%3A%26nbsp%3B17000sqm%0D%0A&source=HBAarchitecture"
                      target="_blank"
                      className="fa fa-linkedin widthAuto"
                      rel="noreferrer"
                      style={{ cursor: "pointer" }}
                    ></a>
                    <a
                      href="https://www.pinterest.com/pin/create/button/"
                      data-pin-custom="true"
                      style={{ cursor: "pointer" }}
                      className="fa fa-pinterest widthAuto"
                    ></a>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="relatedProjects col-md-12">
                  <h4>RELATED PROJECTS</h4>
                  <h2>Other Projects You Might be Interested in</h2>
                  <div
                    className=" pull-right backProjectNone"
                    style={{ position: "relative", top: "-31px" }}
                  >
                    <Link href={"/project"}>
                      <a href="#" className="back-btn hover_effect">
                        Back to Projects Page{" "}
                      </a>
                    </Link>
                    <div className="p_line_detail view_project_detail project_info_line"></div>
                  </div>

                  <div className="colBox">
                    {related_projects &&
                      related_projects.length > 0 &&
                      related_projects.map((item, index) => {
                        return (
                          <div key={index} className="colItem col-md-6">
                            <Link href={`/project/${item.seo_Url}`}>
                              <a style={{ cursor: "pointer" }}>
                                <img
                                  src={`https://hbaarchitecture.com/2022/images/uploads/projects_images/${item.image_name}`}
                                  alt=""
                                  className="visual img-responsive"
                                />
                              </a>
                            </Link>
                            <div className="desc">
                              <h3 className="heading_style">{item.name}</h3>
                              <p>
                                {item?.tags.map((tag) =>
                                  tag.project_type_id != 6 ? (
                                    <span key={tag.project_type_id}>
                                      {tag.name} &nbsp; /{" "}
                                    </span>
                                  ) : (
                                    ""
                                  )
                                )}{" "}
                                {item.location}
                              </p>
                              <Link href={`/project/${item.seo_Url}`}>
                                <a
                                  style={{ cursor: "pointer" }}
                                  className="viewBtn"
                                >
                                  View Project &nbsp;
                                  <div className="p_line_detail view_project_detail project_info_line"></div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <Link href={"/project"}>
                    <a href="#" className="back-btn bottom pull-right">
                      Back to Projects Page &nbsp;
                      <span className="shortLine"></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://hbaarchitecture.com/2022/api/project`);
  const data = await res.json();

  const paths = data.project_list.map((item) => {
    return {
      params: { slug: item.seo_Url },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // Fetch data from external API
  const { slug } = context.params;
  const res = await fetch(
    `https://hbaarchitecture.com/2022/api/project/${slug}`
  );
  const data = await res.json();
  // console.log(data);
  if (data.error) {
    return {
      redirect: {
        destination: "/project",
        parmanent: false,
      },
    };
  }
  // console.log(slug);
  // Pass data to the page via props
  return {
    props: {
      project_url: data.project_url,
      project_detail: data.project_detail,
      images_list: data.images_list,
      related_projects: data.related_project,
    },
  };
}

export default Project_details;
