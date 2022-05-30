import React from "react";
import Head from "next/head";
import Script from "next/script";
import AppLoader from "../components/AppLoader";
import AppTopBar from "../components/AppTopBar";
import AppMenu from "../components/AppMenu";
import AppLogoBurger from "../components/AppLogoBurger";
import AppModalPopupCareer from "../components/AppModalPopupCareer";
import AppModalPopupContact from "../components/AppModalPopupContact";
import AppFooterLocation from "../components/AppFooterLocation";
import AppFooter from "../components/AppFooter";

const career = () => {
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
          <style jsx>
            {`
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

          <div style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }} id="innerpagesoverflowdiv">
              <div
                className="col-md-12 careers-bg-img minHeight home-bg-img-animate-new"
                style={{ opacity: 1 }}
                id="home-bg-img-inner"
              >
                <AppLogoBurger />

                <div
                  className="col-md-9 careers-by-D"
                  style={{ opacity: 1 }}
                  id="careerPagehome-bg-img-title"
                >
                  <div
                    className="all-page-heading marginBottom30"
                    id="careerPageheading1"
                    style={{ opacity: 1 }}
                  >
                    {" "}
                    CAREERS
                  </div>
                  <div className="clearfix"></div>
                  <span
                    className="about-heading"
                    id="careerPageheading3"
                    style={{ opacity: 1 }}
                  >
                    {" "}
                    Join Our Growing
                  </span>
                  <span
                    className="about-heading-yellow"
                    id="careerPageheading4"
                    style={{ opacity: 1 }}
                  >
                    International Team
                  </span>

                  <div className="clearfix"></div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div
              className="row-fluid padd50_career"
              style={{ background: "#ffffff" }}
            >
              <div
                className="col-md-12 col-sm-12 padd_carrer about-heading"
                style={{ opacity: 1 }}
                id="careerSectionDiv"
              >
                <div
                  className="all-page-heading carrer_head"
                  style={{ color: "#b7b4b2" }}
                >
                  CAREERS
                </div>
                <h2 className="c_sub_head">
                  &#34;Join our international dynamic team&#34;
                </h2>
                <p className="about-heading-para displayNone career_para">
                  HBAarchitecture is always looking for energetic and talented
                  individuals to join the team. <br />
                  <br />
                  To apply for a position with HBAarchitecture please email your
                  CV, portfolio and cover letter.
                </p>
                <div className="text-yellow-line applyBtn">
                  <p className="onHoverUp5px" style={{ padding: 0 }}>
                    <a href="#" id="career-form-apply-popup">
                      APPLY
                    </a>
                  </p>
                </div>
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

export default career;
