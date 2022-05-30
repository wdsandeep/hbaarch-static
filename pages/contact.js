import React from "react";
import Head from "next/head";
import Script from "next/script";
import AppLoader from "../components/AppLoader";
import AppTopBar from "../components/AppTopBar";
import AppMenu from "../components/AppMenu";
import AppLogoBurger from "../components/AppLogoBurger";
import AppModalPopupContact from "../components/AppModalPopupContact";
import AppModalPopupCareer from "../components/AppModalPopupCareer";
import AppFooterLocation from "../components/AppFooterLocation";
import AppFooter from "../components/AppFooter";

const contact = () => {
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
          href={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/assets/uploads/files/logo/f0360-favicon.ico`}
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
              #office_id {
                background: rgb(49, 45, 44);
                color: #fff;
                border: none;
                border-bottom: solid 2px #b7b4b2 !important;
                height: 30px;
              }
              #office_id:focus {
                outline: none;
              }
              .contact-bg-img {
                padding: 0;
                background-size: cover;
                background-repeat: no-repeat;
                min-height: 740px;
                background-position-y: 0em;
              }
              .hidden {
                display: none;
              }

              .brRit {
                border-right: 2px solid #807d7b;
              }

              .brk {
                margin-bottom: 0em;
              }

              @media screen and (max-width: 767px) {
                .contact-bg-img {
                  min-height: 512px;
                }

                .c_text {
                  top: 30% !important;
                }

                .brRit {
                  border-right: 0px solid #807d7b;
                }

                .brk {
                  margin-bottom: 3em;
                }
              }
            `}
          </style>
          <Script id="career-page-banner" strategy="afterInteractive">{`
          
          var pagebannerheight="512px";

          `}</Script>

          <div style={{ overflow: "hidden" }}>
            <div className="custom-page services-page">
              <div style={{ overflow: "hidden" }} id="innerpagesoverflowdiv">
                <div
                  className="col-md-12 contact-bg-img  home-bg-img-animate-new"
                  style={{ opacity: 1 }}
                  id="home-bg-img-inner1"
                >
                  <AppLogoBurger />

                  <div className="header-txt c_text ">
                    <div className="row">
                      <div
                        className="col-md-10 all-page-heading "
                        id="banner_content_mh"
                        style={{ opacity: 1, color: "#b7b4b2" }}
                      >
                        CONTACT
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-8"
                        id="banner_content_h"
                        style={{ opacity: 1, paddingTop: "23.5px" }}
                      ></div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-12 lineHeight33"
                        id="banner_content"
                        style={{ opacity: 1, marginTop: "12px" }}
                      >
                        <span
                          className="about-heading"
                          id="banner_content_h1"
                          style={{ opacity: 1 }}
                        >
                          HBAarchitecture is a{" "}
                        </span>
                        <span
                          className="about-heading-yellow"
                          id="banner_content_h2"
                          style={{ opacity: 1, color: "#807d7b" }}
                        >
                          global design practice strategically-positioned for{" "}
                        </span>
                        <span
                          className="about-heading"
                          id="banner_content_h3"
                          style={{ opacity: 1 }}
                        >
                          the new era of{" "}
                        </span>{" "}
                        <br />
                        <span
                          className="about-heading-yellow"
                          id="banner_content_h4"
                          style={{ opacity: 1, color: "#807d7b" }}
                        >
                          {" "}
                          Architecture design,
                        </span>
                        <span
                          className="about-heading"
                          id="banner_content_h5"
                          style={{ opacity: 1 }}
                        >
                          development and brand interaction.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="section location-section padd5"
                id="contact_page_section_1"
                style={{
                  opacity: 1,
                  paddingTop: "4em",
                  backgroundColor: "#ebeaea",
                  paddingBottom: "4em",
                }}
              >
                <div className="modal-row location-row brRit col-xs-12 col-sm-12 col-md-7 col-lg-6">
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="city Atlanta"> Shanghai </div>
                    <div
                      className="adress add_city"
                      style={{ marginTop: "1em" }}
                    >
                      5F, Tower A, One Financial Street 1509
                      <br />
                      Zhongxing Road <br />
                      Shanghai, China
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div
                      className="modal-row numbers-row col-xs-12 col-sm-12 col-md-12"
                      style={{ padding: "2.8em 0 0 0 !important" }}
                    >
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-6 single-nr"
                        style={{ padding: 0 }}
                      >
                        <div
                          className="all-page-heading"
                          style={{ marginBottom: "0.4em" }}
                        >
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            Phone:
                          </p>
                        </div>
                        <div className="nr add_city"> +86 021 6433 0062 </div>

                        <div
                          className="all-page-heading"
                          style={{ marginTop: "1em", marginBottom: "0.4em" }}
                        >
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            FAX:
                          </p>
                        </div>
                        <div className="nr add_city"> +86 021 6433 0590 </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-12 brk"
                    style={{ textDecoration: "underline" }}
                  >
                    {" "}
                    <a
                      href="#"
                      data-location-id="21"
                      className="all-page-heading contact_office_email_popup "
                    >
                      EMAIL US
                    </a>
                  </div>
                </div>

                <div className="modal-row location-row col-xs-12 col-sm-12 col-md-7 col-lg-6">
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="city Atlanta"> Singapore </div>
                    <div
                      className="adress add_city"
                      style={{ marginTop: "1em" }}
                    >
                      46 Kim Yam Road
                      <br />
                      The Herencia, #01-10
                      <br />
                      Singapore 239351
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div
                      className="modal-row numbers-row col-xs-12 col-sm-12 col-md-12"
                      style={{ padding: "2.8em 0 0 0 !important" }}
                    >
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-6 single-nr"
                        style={{ padding: 0 }}
                      >
                        <div
                          className="all-page-heading"
                          style={{ marginBottom: "0.4em" }}
                        >
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            Phone:
                          </p>
                        </div>
                        <div className="nr add_city"> +65 6337 2511 </div>

                        <div
                          className="all-page-heading"
                          style={{ marginTop: "1em", marginBottom: "0.4em" }}
                        >
                          <p
                            className="LOCATION"
                            style={{ marginBottom: "1px !important" }}
                          >
                            FAX:
                          </p>
                        </div>
                        <div className="nr add_city"> +65 6337 2460 </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xs-12 col-sm-6 col-md-12"
                    style={{ textDecoration: "underline" }}
                  >
                    {" "}
                    <a
                      href="#"
                      data-location-id="22"
                      className="all-page-heading contact_office_email_popup "
                    >
                      EMAIL US
                    </a>
                  </div>
                </div>
              </div>

              <div className="section form-request-section c_request_section padd5">
                <div className="container-fluid">
                  <div className="row-fluid">
                    <div className="col-sm-12 col-md-12 c_padd_margin">
                      <div className="all-page-heading form-request">
                        Form requests{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="col-xs-12 col-sm-12  col-md-5  c_padd_margin">
                      <h2 className="we-look-forward-to-h c_we_look">
                        We look forward to hearing from you{" "}
                      </h2>
                    </div>
                    <div className="col-xs-12 col-sm-12  col-md-7  c-requect_project_btn">
                      <div className="buttons-container">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <a
                              href="#"
                              data-clicked-item="project_information"
                              className="btn form-request-btn all-page-heading contact-form-popup"
                              data-toggle="modal"
                            >
                              Project Enquiry
                            </a>
                          </div>
                          <div className="col-xs-12 col-sm-6  col-md-6 col-lg-4">
                            <a
                              href="#"
                              className="btn form-request-btn all-page-heading career-form-popup"
                            >
                              Employment Enquiry
                            </a>
                          </div>
                          <div className="col-xs-12 col-sm-6  col-md-6 col-lg-4">
                            <a
                              href="#"
                              data-clicked-item="media_contact"
                              className="btn form-request-btn all-page-heading contact-form-popup"
                              data-toggle="modal"
                            >
                              Media Enquiry
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- this modal is shifted to footer --> */}
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

export default contact;
