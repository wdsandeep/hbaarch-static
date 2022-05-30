import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import AppFooter from "../components/AppFooter";
import AppFooterLocation from "../components/AppFooterLocation";
import AppFooterLocationTop from "../components/AppFooterLocationTop";
import AppLoader from "../components/AppLoader";
import AppMenu from "../components/AppMenu";
import AppModalPopupCareer from "../components/AppModalPopupCareer";
import AppModalPopupContact from "../components/AppModalPopupContact";
import AppModalPopupLocation from "../components/AppModalPopupLocation";
import AppTopBar from "../components/AppTopBar";
import HomeAboutBlock from "../components/HomeAboutBlock";
import HomeBxSlider from "../components/HomeBxSlider";
import HomeFeaturedProjects from "../components/HomeFeaturedProjects";

import AppLogoBurger from "../components/AppLogoBurger";
// import site from "../public/js/site";

function Home({ featured_projects }) {
  useEffect(() => {
    // site();
    // console.log("site is called at home");
  }, []);
  return (
    <div>
      <style jsx>{`
        /* style block 3 */
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
      `}</style>
      <Head>
        <title>
          HBAarchitecture - We create unique destinations that deliver lasting
          value for our clients.
        </title>
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

        <div className="modal fade" id="myModalNav" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-fluid">
          <Script
            type="text/javascript"
            id="set-page-banner-height"
          >{`var pagebannerheight="100%"`}</Script>
          <div style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <div
                className="col-md-12 home-bg-img home-bg-img-animate-new"
                style={{ backgroundColor: "#FFFFFF" }}
                id="home-bg-img1"
              >
                <AppLogoBurger />

                <HomeBxSlider effectKey={Math.random()} />
                {/* <!--bxslider--> */}
              </div>
            </div>

            <div
              className="col-md-12 second-slide"
              style={{ padding: 0, backgroundColor: "#ebeaea" }}
            >
              <HomeFeaturedProjects featured_projects={featured_projects} />

              <HomeAboutBlock />

              <AppFooterLocationTop />
            </div>
          </div>
          {/* div with overflow hidden */}

          {/* <!-- Service popup section End --> */}
          {/* <!-- universal contact start here --> */}
          <AppModalPopupContact />
          {/* <!-- universal contact end here --> */}

          {/* <!--  career form start here --> */}
          <AppModalPopupCareer />
          {/* <!-- career form end here --> */}

          {/* <!-- universal other services start here--> */}

          {/* <!-- universal other services ends here--> */}

          {/* <!-- OUR LOCATION --> */}
          <AppFooterLocation />
          {/* <!-- bottom copyright --> */}
          <AppFooter />
          {/* <!-- Row bottom copyright --> */}
        </div>

        {/*Row Fluid */}
      </div>
      {/* Main Container */}

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

      <AppModalPopupLocation />
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

      <Script
        id="some_home_jquery_scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `

      // $('.featured_project_slide').css('display', 'none');
      // $('.featured_project_slide:first').css({'display': 'block', 'opacity': '0'});
      // var slider = $('.slider-single').sappleSingleSlider();
      // var slider = $('.slider-multi').sappleMultiSlider();        

      $(".home-bg-img-animate-new").attr('id', 'home-bg-img');

      `,
        }}
      ></Script>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://hbaarchitecture.com/2022/api/home`);
  const data = await res.json();
  // console.log(data);
  // Pass data to the page via props
  return { props: { featured_projects: data.featured_projects } };
}

export default Home;
