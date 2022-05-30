import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import AppLoader from "../components/AppLoader";
import AppMenu from "../components/AppMenu";
import AppTopBar from "../components/AppTopBar";
import AppFooter from "../components/AppFooter";
import AppFooterLocation from "../components/AppFooterLocation";
import AppModalPopupCareer from "../components/AppModalPopupCareer";
import AppModalPopupContact from "../components/AppModalPopupContact";
import AboutMembers from "../components/AboutMembers";
import AboutMethodology from "../components/AboutMethodology";
import AboutMissionContent from "../components/AboutMissionContent";

import AppLogoBurger from "../components/AppLogoBurger";
// import site from "../public/js/site";

const About = (props) => {
  return (
    <>
      <Head>
        <title>HBAarchitecture - About us.</title>
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
          <link
            rel="stylesheet"
            href="https://hbaarchitecture.com/2022/public/css/news.css"
          />
          <style jsx>
            {`
              .rightAlign {
                float: right;
              }

              .leftAlign {
                float: left;
              }

              .animateBlock {
                margin-top: 20px;
                display: inline-block;
                opacity: 0;
                filter: alpha(opacity=0);
                position: relative;
                -webkit-transition: all 0.55s ease-in;
                -moz-transition: all 0.55s ease-in;
                -ms-transition: all 0.55s ease-in;
                -o-transition: all 0.55s ease-in;
                transition: all 0.55s ease-in;
              }
              .animateBlock.left {
                left: -20%;
              }
              .animateBlock.left1 {
                left: -20%;
              }

              .animateBlock.right {
                right: -20%;
              }

              .left.animated {
                /*left: 11.7%;*/
                left: 6.3%;
                opacity: 1;
                filter: alpha(opacity=100);
                z-index: 99;
              }
              .member.animated {
                opacity: 1;
                filter: alpha(opacity=100);
              }

              .right.animated {
                right: 0%;
                opacity: 1;
                filter: alpha(opacity=100);
              }

              #Txt {
                width: 300px;
                padding-left: 15px;
                padding-top: 12px;
                text-align: center;
              }

              .block-item {
                float: left;
                -webkit-transform: translateY(100%);
                -moz-transform: translateY(100%);
                transform: translateY(100%);
                -webkit-animation: slide 2s forwards;
                -moz-animation: slide 2s forwards;
                -ms-animation: slide 2s forwards;
                animation: slide 1s forwards;
              }
              .left1.animated {
                left: 29.6%;
                opacity: 1;
                filter: alpha(opacity=100);
                z-index: 99;
              }
              .block-item:nth-child(2n) {
              }
              @-webkit-keyframes slide {
                100% {
                  opacity: 1;
                  -webkit-transform: translateY(0%);
                }
              }
              @-moz-keyframes slide {
                100% {
                  opacity: 1;
                  -moz-transform: translateY(0%);
                }
              }
              @keyframes slide {
                100% {
                  opacity: 1;
                  transform: translateY(0%);
                }
              }
              .block-item:nth-child(2) {
                -webkit-animation-delay: 1s;
                -moz-animation-delay: 1s;
                -ms-animation-delay: 1s;
                animation-delay: 1s;
              }
              .block-item:nth-child(3) {
                -webkit-animation-delay: 2s;
                -moz-animation-delay: 2s;
                -ms-animation-delay: 2s;
                animation-delay: 2s;
              }
              .block-item:nth-child(4) {
                -webkit-animation-delay: 2.5s;
                -moz-animation-delay: 2.5s;
                -ms-animation-delay: 2.5s;
                animation-delay: 2.5s;
              }
              .block-item1 {
                float: left;
                -webkit-transform: translateY(100%);
                -moz-transform: translateY(100%);
                transform: translateY(100%);
                -webkit-animation: slide 2s forwards;
                -moz-animation: slide 2s forwards;
                -ms-animation: slide 2s forwards;
                animation: slide 2s forwards;
              }
              .block-item1:nth-child(2n) {
              }
              @-webkit-keyframes slide {
                100% {
                  opacity: 1;
                  -webkit-transform: translateY(0%);
                }
              }
              @-moz-keyframes slide {
                100% {
                  opacity: 1;
                  -moz-transform: translateY(0%);
                }
              }
              @keyframes slide {
                100% {
                  opacity: 1;
                  transform: translateY(0%);
                }
              }
              .block-item1:nth-child(2) {
                -webkit-animation-delay: 1s;
                -moz-animation-delay: 1s;
                -ms-animation-delay: 1s;
                animation-delay: 1s;
              }
              .block-item1:nth-child(3) {
                -webkit-animation-delay: 2s;
                -moz-animation-delay: 2s;
                -ms-animation-delay: 2s;
                animation-delay: 2s;
              }
              .block-item1:nth-child(4) {
                -webkit-animation-delay: 2.5s;
                -moz-animation-delay: 2.5s;
                -ms-animation-delay: 2.5s;
                animation-delay: 2.5s;
              }
              .block-item1:nth-child(5) {
                -webkit-animation-delay: 3.5s;
                -moz-animation-delay: 3.5s;
                -ms-animation-delay: 3.5s;
                animation-delay: 3.5s;
              }
              .block-item1:nth-child(6) {
                -webkit-animation-delay: 4.5s;
                -moz-animation-delay: 4.5s;
                -ms-animation-delay: 4.5s;
                animation-delay: 4.5s;
              }

              .Path-9 {
                /*width: 215.5px !important;*/
                width: 62.5% !important;
                border: solid 4px #807d7b;
                position: absolute;
                left: 58px !important;
                bottom: 77px;
              }
              .Path-10 {
                width: 58.5px !important;
                border: solid 1px #b8b8b8;
                position: absolute;
                left: 0;
                bottom: 80px;
              }

              .hidden {
                display: none;
              }
              .slide_img_content {
                padding: 0;
                margin: 0;
                padding-left: 45.3%;
                padding-top: 24.5px;
                padding-right: 11.8%;
              }
              .padd5_about {
                padding-left: 5.5% !important;
                padding-right: 5.5% !important;
              }
              .nav_div {
                float: none !important;
              }
              .logosOnImage {
                bottom: 25% !important;
              }

              .news-title a {
                color: #ffffff;
              }
              .news-page
                .news-feed-section
                .news-single
                .news-single-txt
                .news-date {
                color: #a09492;
              }
              .news-page
                .news-feed-section
                .news-single
                .news-single-txt
                .news-publication {
                color: #807d7b;
              }

              .white-border {
                border: 5px solid #fff;
              }

              @media (max-width: 767px) {
                .head_about {
                  padding-top: 30px !important;
                }

                .custom-page .modal-header .close {
                  padding-right: 0px !important;
                }
              }
            `}
          </style>

          <div
            style={{ background: "#ebeaea" }}
            className="about-page custom-page"
          >
            <div style={{ overflow: "hidden" }}>
              <div style={{ overflow: "hidden" }} id="innerpagesoverflowdiv">
                <div
                  className="col-sm-12 col-md-12 about-bg-img "
                  id="home-bg-img-inner1"
                  style={{ opacity: 1 }}
                >
                  <AppLogoBurger />

                  <div className="header-txt">
                    <div className="row" style={{ margin: 0 }}>
                      <div
                        className="col-sm-10 col-md-10 all-page-heading"
                        id="aboutPageHeading1"
                        style={{
                          marginBottom: "18.5px",
                          paddingTop: "153.6px",
                          color: "#b7b4b2",
                          opacity: 1,
                        }}
                      >
                        ABOUT{" "}
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-xs-12  col-sm-11 col-md-11 animated fadeInUp lineHeight33"
                        id=""
                        style={{ opacity: 1 }}
                      >
                        <span
                          className="about-heading"
                          style={{ opacity: 1 }}
                          id="aboutPageHeading2"
                        >
                          {" "}
                          HBAarchitecture is a{" "}
                        </span>
                        <span
                          className="about-heading-yellow"
                          style={{ opacity: 1, color: "#807d7b" }}
                          id="aboutPageHeading3"
                        >
                          global design practice strategically-positioned for
                          the new era of{" "}
                        </span>
                        <span
                          className="about-heading"
                          style={{ opacity: 1 }}
                          id="aboutPageHeading4"
                        >
                          {" "}
                          Architecture design, development and brand
                          interaction.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>

            <AboutMissionContent />

            <AboutMethodology />

            <AboutMembers />
          </div>

          {/* <!-- Footer Here --> */}
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

          {/* <!-- Service popup section End --> */}
          {/* <!-- universal contact start here --> */}
          <AppModalPopupContact />
          {/* <!-- universal contact end here --> */}

          {/* <!--  career form start here --> */}
          <AppModalPopupCareer />
          {/* <!-- career form end here --> */}

          {/* <!-- universal other services ends here--> */}

          {/* <!-- OUR LOCATION --> */}

          <AppFooterLocation />
          {/* <!-- bottom copyright --> */}

          <AppFooter />
          {/* <!-- Row bottom copyright --> */}
        </div>
        {/* <!-- ROW--> */}
      </div>

      {/* <!-- Container --> */}
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
      <div className="services-page">
        <div
          className="modal fade"
          id="locationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      {/* <!-- Service popup section Start --> */}
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="serviceModal"
      >
        <div
          className="modal-body"
          style={{ padding: 0, height: "100%" }}
        ></div>
        <div className="clearfix"></div>
      </div>

      <Script id="about-form-blank-on-close-modal" jsx>
        {`
  
  


        $(document).on('click', '.close', function() {
               console.log('close clicked');
               $('.modal-body-succes').css('display','none');
               $('.modal-body-form').css('display','block');
               $('#subject,#message,#name, #phone,#email, #publication, #captcha').val('');
        });


    
        `}
      </Script>

      <Script id="animation-and-scroll" strategy="lazyOnload" jsx>
        {`

 
    $(window).load(function () {


  function scrollAnimationActive(id,timeOutTime=300,topMinus=0, showEffect='fadeIn'){
            var $elements311 = $(id); 
            var $window = $(window);

            $window.on('scroll', function (e) {
    			if (!$(id).hasClass('animate')) {
    			var winTop = $(window).scrollTop(); // calculate distance from top of window
                var winBottom = winTop + $(window).height();
                var elemTop = $($elements311).offset().top - topMinus; // element distance from top of page
                var elemBottom = elemTop + $($elements311).height();
                    if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
        		          setTimeout(function () {
        				   $(id).addClass("animate "+showEffect); 
        				}, timeOutTime);
                    }
                
                }
            });
        }

		
		
		 setTimeout(function () {
            $('#aboutPageHeading1').addClass("animated fadeIn");
        }, 2200);//6000
		setTimeout(function () {
           animateWordByword('aboutPageHeading2'); 
        }, 3100);//6200	
		setTimeout(function () {
           animateWordByword('aboutPageHeading3'); 
        }, 3950);//7100	
		setTimeout(function () {
           animateWordByword('aboutPageHeading4'); 
        }, 5850);//7700	
		setTimeout(function () {
           //animateWordByword('aboutPageHeading5'); 
        }, 5950);//8300	
		setTimeout(function () {
           // $('#aboutPageHeading6').addClass("animated fadeIn");
        }, 6750);//7500
      

        var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
        var $window = $(window);
        $window.on('scroll', function (e) {
            //$("#aboutHeading1,#aboutHeading2,#aboutHeading31").addClass("block-item");
           setTimeout(function () {
            $('#aboutHeading1').addClass("block-item");
			}, 1000);
		   setTimeout(function () {
            $('#aboutHeading2').addClass("block-item");
			}, 1350);
           setTimeout(function () {
            $('#aboutHeading31').addClass("block-item");
			}, 1700);			
            $('#member1').fadeIn(9000);

            $elements.each(function (i, elem) { //loop through each element
                if ($(this).hasClass('animated')) // check if already animated
                    return;
                animateMe($(this));
            });
        });

		var $elements1 = $('#about1'); 
        var $window = $(window);
        $window.on('scroll', function (e) {
			
			var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $($elements1).offset().top; // element distance from top of page
            var elemBottom = elemTop + $($elements1).height();
            if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
                // exchange classes if element visible
              //$("#about1,#about2,#about3").addClass("block-item");
			setTimeout(function () {
            $('#about1').addClass("block-item");
			}, 1000);
		   setTimeout(function () {
            $('#about2').addClass("block-item");
			}, 1350);
           setTimeout(function () {
            $('#about3').addClass("block-item");
			}, 1700);	
            }
		});
        
        








        
        
         
        
		var $elements5 = $('#aboutPageSec4Heading1'); 
        var $window = $(window);
		
        $window.on('scroll', function (e) {
			 if (!$('#aboutPageSec4Heading1').hasClass('animate')) {
			     //alert('heading show');
			var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $($elements5).offset().top; // element distance from top of page
            var elemBottom = elemTop + $($elements5).height();
            if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
                // exchange classes if element visible
             
			    //$("#aboutPageSec4Heading1").addClass("animate fadeIn");
                
				setTimeout(function () {
				    //$("#aboutPageSec4Heading2").addClass("animate fadeIn");
                    
				}, 700);
                
                setTimeout(function () {
                	   //$(".partner_office").addClass("animate fadeIn");
                }, 1200);
                
                //console.log($('div[id^="member"]'));
                $.each($('div[id^="member"]'), function (index) {
                    //console.log(this.id);
                    //MemberImagesAnimate(this.id);
                    //console.log('------');
                } );
                       
			  
					// MemberImagesAnimate(i)
			 
			
            }
			 }
		});
		function MemberImagesAnimate(i)
		{
			if( typeof MemberImagesAnimate.counter == 'undefined' ) {
                MemberImagesAnimate.counter = 0;
            }
            MemberImagesAnimate.counter++;
            
			 var duration=(1000+((MemberImagesAnimate.counter)*500));
					 var count=i;
							setTimeout(function () {
								
						   $("#"+i).addClass("animate fadeInUp85se");
						}, duration);
			
		}
        function animateMe(elem) {
            var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $(elem).offset().top; // element distance from top of page
            var elemBottom = elemTop + $(elem).height();
            if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
                // exchange classes if element visible
                $(elem).removeClass('notAnimated').addClass('animated fadeInUp');

            }

        }
        
      });
      `}
      </Script>
      <Script src="https://hbaarchitecture.com/2022/public/js/news.js"></Script>
    </>
  );
};

export default About;
