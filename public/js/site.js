const Site = () => {
  $(document).ready(function () {
    var win = $(window);

    if ($("#our_location_block").length) {
      var $elementsFooter2 = $("#our_location_block");
      var $window = $(window);
      $window.on("scroll", function (e) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        if (!$("#our_location_block").hasClass("testaboutPageSec3Heading1")) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsFooter2).offset().top - 1000; // element distance from top of page
          var elemBottom = elemTop + $($elementsFooter2).height();
          //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
          if (elemBottom <= winBottom && elemTop <= winTop) {
            console.log("footer_reached");
            // exchange classes if element visible
            //$('.location-head').addClass("animated fadeIn");
            // $("#our_location_block").addClass("testaboutPageSec3Heading1");
            var $elements = $(".footerLocation li"); //contains all elements of nonAnimated class
            var $window = $(window);

            $elements.each(function (i, elem) {
              //loop through each element
              if ($(this).hasClass("animated"))
                // check if already animated
                return;
              var that = this;

              setTimeout(function () {
                //animateMe($(that));
              }, 500 * i);
            });

            function animateMe(elem) {
              setTimeout(function () {
                $(elem).removeClass("notAnimated").addClass("animated fadeIn");
                setTimeout(function () {
                  if (
                    !/Android|webOS|iPhone|BlackBerry /i.test(
                      navigator.userAgent
                    )
                  ) {
                    //$(elem).parent().css('height', '527', 'padding', '0');
                  } else {
                    // $(elem).parent().css('height', 'auto', 'padding', '0');
                  }
                }, 100); //500
              }, 200); //1000
            }
          }
        }
      });
    }

    /* 
    
    	if ($('#relatedProjectsId').length){
    

	
	
	var $elementsHome2 = $('#relatedProjectsId'); 
        var $window = $(window);
        $window.on('scroll', function (e) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			 if (!$('#relatedProjectsId').hasClass('testaboutPageSec3Heading1')) {
			var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $($elementsHome2).offset().top-500; // element distance from top of page
            var elemBottom = elemTop + $($elementsHome2).height();
            //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
            if ((elemBottom <= winBottom) && (elemTop <= winTop)) {
		      console.log('dsdfdsfsdfsdf');
                // exchange classes if element visible
              $('#relatedProjectsId h2').addClass("animated fadeIn");
			    $("#relatedProjectsId").addClass("testaboutPageSec3Heading1");
                 var $elements = $('.colItem'); //contains all elements of nonAnimated class
                        var $window = $(window);
                
                        $elements.each(function (i, elem) { //loop through each element
                            if ($(this).hasClass('animated')) // check if already animated
                                return;
                            var that = this;
                
                            setTimeout(function () {
                                animateMe($(that));
                            }, 1000 * i);
                        });
                
                
                        function animateMe(elem) {
                            setTimeout(function () {
                                $(elem).removeClass('notAnimated').addClass('animated fadeInUp85se');
                                setTimeout(function () {
                                    if( ! /Android|webOS|iPhone|BlackBerry /i.test(navigator.userAgent) ) {
                                        $(elem).parent().css('height', 'auto', 'padding', '0');
                                    }else{
                                        $(elem).parent().css('height', 'auto', 'padding', '0');
                                    }
                                }, 100);//500
                            }, 200);//1000
                        }
                
                
			 // var id = window.setTimeout(function() {}, 0); while (id--) { window.clearTimeout(id);}
					setTimeout(function () {
					    
                        $('#view_all_projects_button').addClass("animated fadeIn");
					   // $('.featured_project_slide:first').removeClass('home-bg-img-animate').css({'opacity': '1'});
					}, 1500);
			  
            }
			 }
		});

 }
   */

    if ($("#home_about_us_block").length) {
      var $elementsHomeAboutBlock2 = $("#home_about_us_block");
      var $window = $(window);
      $window.on("scroll", function (e) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        if (!$("#home_about_us_block").hasClass("testaboutPageSec3Heading1")) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsHomeAboutBlock2).offset().top - 500; // element distance from top of page
          var elemBottom = elemTop + $($elementsHomeAboutBlock2).height();
          //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
          if (elemBottom <= winBottom && elemTop <= winTop) {
            console.log("home_about_us_block");
            // exchange classes if element visible
            /*
              
              $('#home_about_us_block .vertical-text').addClass("animated fadeIn");
              $('.about_us_block_heading').addClass("animated fadeIn");
			  $("#home_about_us_block").addClass("testaboutPageSec3Heading1");
                
					setTimeout(function () {
                        $('.about_us_block_content').addClass("animated fadeIn");
					}, 500);
                    
                   setTimeout(function () {
                        $('.about_page_template').addClass("animated fadeIn");
					}, 1500);
                    
                   setTimeout(function () {
                        $('.home-about-title').addClass("animated fadeIn");
					}, 3000);
              */
          }
        }
      });
    }

    /*
	if ($('#home_our_process_section').length){
    
	var $elementsHomeAbout2 = $('#home_our_process_section'); 
        var $window = $(window);
        $window.on('scroll', function (e) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			 if (!$('#home_our_process_section').hasClass('testaboutPageSec3Heading1')) {
			var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $($elementsHomeAbout2).offset().top-500; // element distance from top of page
            var elemBottom = elemTop + $($elementsHomeAbout2).height();
            //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
            if ((elemBottom <= winBottom) && (elemTop <= winTop)) {
		      console.log('dsdfdsfsdfsdf');
                // exchange classes if element visible
              $('#home_our_process_section .vertical-text').addClass("animated fadeIn");
              $('#home_our_process_section .home-process').addClass("animated fadeIn");
			    $("#home_our_process_section").addClass("testaboutPageSec3Heading1");
                
    				
                    	setTimeout(function () {
                        $('#discover_our_process_button').addClass("animated fadeIn");
					}, 1500);
            }
			 }
		});
 }    
*/

    /*
	if ($('#contact_us_career_in_home').length){
    
	var $elementsHomeContactMedia1 = $('#contact_us_career_in_home'); 
        var $window = $(window);
        $window.on('scroll', function (e) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			 if (!$('#contact_us_career_in_home').hasClass('contact_us_career_class')) {
			var winTop = $(window).scrollTop(); // calculate distance from top of window
            var winBottom = winTop + $(window).height();
            var elemTop = $($elementsHomeContactMedia1).offset().top-800; // element distance from top of page
            var elemBottom = elemTop + $($elementsHomeContactMedia1).height();
            //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
            if ((elemBottom <= winBottom) && (elemTop <= winTop)) {
              $('#contact_us_career_in_home ').addClass("animated fadeIn");
			    $("#contact_us_career_in_home").addClass("contact_us_career_class");
                    
            }
			 }
		});
 }
*/

    if ($("#studio_in_the_media").length) {
      var $elementsHomeMedia2 = $("#studio_in_the_media");
      var $window = $(window);
      $window.on("scroll", function (e) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        if (!$("#studio_in_the_media").hasClass("testaboutPageSec3Heading1")) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsHomeMedia2).offset().top - 500; // element distance from top of page
          var elemBottom = elemTop + $($elementsHomeMedia2).height();
          //console.log(elemBottom+' '+elemTop +'=='+winBottom+' '+winTop)
          if (elemBottom <= winBottom && elemTop <= winTop) {
            console.log("dsdfdsfsdfsdf");
            // exchange classes if element visible
            $("#studio_in_the_media .vertical-text").addClass(
              "animated fadeIn"
            );
            $("#studio_in_the_media h2").addClass("animated fadeIn");
            $("#studio_media_big_image").addClass("animated fadeInUp85se");
            $("#studio_in_the_media").addClass("testaboutPageSec3Heading1");

            setTimeout(function () {
              $(".main-newsP").addClass("animated fadeIn");
              $(".home-news-ovr-img").addClass("animated fadeIn");
            }, 1500);

            setTimeout(function () {
              $(".newsP:eq(0)").addClass("animated fadeInUp85se");
            }, 500);
            setTimeout(function () {
              $(".newsP:eq(1)").addClass("animated fadeInUp85se");
            }, 1000);
            setTimeout(function () {
              $(".newsP:eq(2)").addClass("animated fadeInUp85se");
            }, 1500);
            setTimeout(function () {
              $("#visit_page_press_button").addClass("animated fadeIn");
            }, 3000);
            setTimeout(function () {
              $("#subscribe_newsletter_block").addClass("animated fadeIn");
            }, 4500);

            setTimeout(function () {
              $(".contact-link").addClass("animated fadeIn");
            }, 6000);
          }
        }
      });
    }

    //Object to Check
    if ($("#abountusdiv").length) {
      var $elementsHome2 = $("#featureProjectSlideDiv");
      var $window = $(window);

      $window.on("scroll", function (e) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        if (
          !$("#featureProjectSlideDiv").hasClass("testaboutPageSec3Heading1")
        ) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsHome2).offset().top; // element distance from top of page
          var elemBottom = elemTop + $($elementsHome2).height();
          if (elemBottom <= winBottom && elemTop >= winTop) {
            // exchange classes if element visible

            $("#featureProjectSlideDiv").addClass("testaboutPageSec3Heading1");
            // var id = window.setTimeout(function() {}, 0); while (id--) { window.clearTimeout(id);}
            setTimeout(function () {
              // $('.featured_project_slide:first').removeClass('home-bg-img-animate').css({'opacity': '1'});
            }, 500);
            setTimeout(function () {
              $("#featureProjectSlideDiv").addClass("animated fadeIn");
            }, 2000);
            setTimeout(function () {
              $("#featured_project_slider_total_count").addClass(
                "animated fadeIn"
              );
            }, 3000);
            setTimeout(function () {
              //$('#firstSlideHeading').addClass("animated fadeInUp");
              animateWordByword("firstSlideHeading");
            }, 3500);
            setTimeout(function () {
              $("#firstSlideSubHeading").addClass("animated fadeIn");
              // animateWordByword('firstSlideSubHeading');
            }, 4000);
            //$('.featured_project_slide:first').addClass('home-bg-img-animate-new').one(animationEnd,function() { $('.featured_project_slide:eq( '+(currentActiveSlide+1)+' )').removeClass('home-bg-img-animate-new');  });
            //$('#firstSlideImgF').css({ 'opacity': '0'});
            /*setTimeout(function () {
				   $('#firstSlideImgF').css({'display': 'block','opacity': '1' }).addClass('featured-projects-animate');
					
					}, 500);
                    */
            $(".featured_project_slide:first")
              .addClass("animated zoomIn")
              .one(animationEnd, function () {});
          }
        }
      });

      var $elementsHome3 = $("#aboutHeading1");
      var $window = $(window);

      $window.on("scroll", function (e) {
        if (!$("#aboutHeading1").hasClass("testaboutPageSec3Heading1")) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsHome3).offset().top; // element distance from top of page
          var elemBottom = elemTop + $($elementsHome3).height();
          if (elemBottom <= winBottom && elemTop >= winTop) {
            // exchange classes if element visible

            $("#aboutHeading1").addClass("testaboutPageSec3Heading1");
            setTimeout(function () {
              $("#aboutHeading1").addClass("animated fadeInLeft");
            }, 500);
            /* setTimeout(function () {
            $('#aboutHeading2').addClass("animated fadeInUp");
        }, 1500);*/

            setTimeout(function () {
              //$('#aboutHeading21').addClass("animated fadeInUp");
              animateWordByword("aboutHeading21");
            }, 2000);
            setTimeout(function () {
              //$('#aboutHeading22').addClass("animated fadeInUp");
              animateWordByword("aboutHeading22");
            }, 2600);
            setTimeout(function () {
              //$('#aboutHeading23').addClass("animated fadeInUp");
              animateWordByword("aboutHeading23");
            }, 4100);
            setTimeout(function () {
              $("#aboutHeading3").addClass("animated fadeIn");
            }, 2000);
            setTimeout(function () {
              $("#aboutHeading4").addClass("animated fadeInRight");
            }, 4500);
            /*setTimeout(function () {
			 if($(".video").get(0).paused){
            $(".video").get(0).play();
        $(".playpause").fadeOut();
			 }
        }, 2200);*/
            setTimeout(function () {
              $("#aboutHeading5").addClass("animated fadeIn");
            }, 3500);
            setTimeout(function () {
              $("#head_aboutus1").addClass("animated fadeInUp");
            }, 3500);
          }
        }
      });

      var $elementsHome4 = $("#homeNewsDiv");
      var $window = $(window);

      $window.on("scroll", function (e) {
        if (!$("#homeNewsDiv").hasClass("testaboutPageSec3Heading1")) {
          var winTop = $(window).scrollTop(); // calculate distance from top of window
          var winBottom = winTop + $(window).height();
          var elemTop = $($elementsHome4).offset().top; // element distance from top of page
          var elemBottom = elemTop + $($elementsHome3).height();
          if (elemBottom <= winBottom && elemTop >= winTop) {
            // exchange classes if element visible

            $("#homeNewsDiv").addClass("testaboutPageSec3Heading1");

            $("#homeNewsDiv").css("opacity", "1");
            $("#homeNewsDiv").addClass("animated fadeIn");
            setTimeout(function () {
              $("#homeNewsDivheading1").addClass("animated fadeIn");
            }, 1000);
            setTimeout(function () {
              $("#homeNewsDivheading2").addClass("animated fadeIn");
            }, 2000);
            if (
              !$("#homeNewsDivheading3").hasClass("homeNewsDivheading3animate")
            ) {
              $("#homeNewsDivheading3").addClass("homeNewsDivheading3animate");
              setTimeout(function () {
                animateWordByword("homeNewsDivheading3");
              }, 3000);
            }
            setTimeout(function () {
              $("#homeNewsDivheading4").addClass("animated fadeIn");
            }, 3500); //4000
            setTimeout(function () {
              $(".combined_news_slider:first")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 3250); //3500
            setTimeout(function () {
              $("#news-tint").addClass("animated fadeIn").css({ opacity: "1" });
            }, 3500); //4000
            setTimeout(function () {
              $("#newsSlideFirstimg")
                .addClass("animated1 fadeIn")
                .css({ opacity: "1" });
            }, 3500); //4000
            setTimeout(function () {
              $("#newsSlideFirstimg2")
                .addClass("animated1 fadeIn")
                .css({ opacity: "1" });
            }, 5000); //7000
            setTimeout(function () {
              $("#newsSlideFirstHeading1")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 4000); //5000
            setTimeout(function () {
              $("#newsSlideFirstHeading11")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 5500); //8000
            setTimeout(function () {
              $("#newsSlideFirstHeading2")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 4500); //6000
            setTimeout(function () {
              $("#newsSlideFirstHeading22")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 5500); //9000
            setTimeout(function () {
              $("#newsSlideFirstArrow")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 6500); //10000
            setTimeout(function () {
              $("#newsSlideFirstArrow1")
                .addClass("animated fadeIn")
                .css({ opacity: "1" });
            }, 6500); //10000
          }
        }
      });

      $("#scrolldown").click(function () {
        $("html, body").animate(
          {
            scrollTop: $("#relatedProjectsId").offset().top - 50,
          },
          2000
        );
      });
    }
  });
  function showServiceImageDiv(service_id) {
    $(".hide-section").hide();

    $(".list-" + service_id + "-div").show();
  }
  function navClick() {
    $(".leftLogos li").on("click", function () {
      var service_id = $(this).children("a").attr("data-service-id");
      console.log("leftLogos li nav Click function " + service_id);
      $(".leftLogos li").each(function () {
        $(this).removeClass("defaultActive");
      });
      $(this).addClass("defaultActive");
      var clickClass = $(this).attr("class");
      $("#slideImg").removeAttr("class");
      $("#slideImg").addClass("listMainImg navHover " + clickClass);
      //showServiceImageDiv(service_id);
    });
  }
  var previous_id = "";
  var service_id = "";
  function navHover() {
    $(".leftLogos li").hover(
      function () {
        $(this)
          .siblings()
          .each(function () {
            if ($(this).children("a").hasClass("select")) {
              previous_id = $(this).children("a").attr("data-service-id");
              return false;
            }
          });
        service_id = $(this).children("a").attr("data-service-id");
        console.log("leftLogos li hover " + service_id);
        if ($(this).hasClass("defaultActive")) {
          return false;
        } else {
          var findClass = $(this).attr("class");
          /*
            	if ($('#home-bg-img').length){
				    console.log('home-bg-img length');
                    //$('#home-bg-img').append('<div class="navHover listMain ' +findClass+'"></div>');
                    $('#slideImg').removeClass().addClass('listMainImg navHover '+current_class);
				}
				else if ($('#home-bg-img-inner').length){	
				    console.log('home-bg-img-inner length');
				    var current_class = ($(this).attr('class'));
					//$('#home-bg-img-inner').append('<div class="navHover listMain ' +findClass+'"></div>');	
                   
				}
				else if ($('.servicesslidedivclass').length){
				    console.log('servicesslidedivclass length');
						$('.servicesslidedivclass').append('<div class="navHover listMain ' +findClass+'"></div>');
				}else{
				    
                    console.log('I am blank');
				}	
				*/
          var current_class = $(this).attr("class");
          $("#slideImg")
            .removeClass()
            .addClass("listMainImg navHover " + current_class);
          // setTimeout(function(){
          $("." + findClass).css("top", "0");
          //setTimeout(function(){ showServiceImageDiv(service_id); }, 250);
          showServiceImageDiv(service_id);
          //},200);
        }
      },
      function () {
        $(".listMain").remove();
        $(this)
          .siblings()
          .each(function () {
            if ($(this).children("a").hasClass("select")) {
              previous_id = $(this).children("a").attr("data-service-id");
              var active_class = $(this).attr("class");
              $("#slideImg")
                .removeClass()
                .addClass("listMainImg navHover " + active_class);
              //	setTimeout(function(){ showServiceImageDiv(previous_id); }, 250);
              showServiceImageDiv(previous_id);
              return false;
            }
          });
      }
    );
  }
  function serviceClick() {
    $("#serviceNav").on("click", function () {
      if ($(".leftBar, .listMainImg").hasClass("leftActive")) {
        // $('.leftBar, .bgLeft, .listMainImg').removeAttr('style').removeClass('leftActive');
        //$('.bgLeft').fadeOut();
        $(".bgLeft").slideUp();
        $(".leftBar, .listMainImg")
          .removeAttr("style")
          .removeClass("leftActive");
        $("#innerpagesoverflowdiv").css("height", pagebannerheight);
        $("body").css("overflow-y", "auto");
        $("#serviceNav span").addClass("arrow-down_office");
        $("#serviceNav span").removeClass("arrow-up_office");
        $("#home-bg-img").css("height", "auto");
      } else {
        setTimeout(function () {
          $(".leftBar").css("margin-top", "0").addClass("leftActive");
          $(".listMainImg").css("top", "0").addClass("leftActive");

          $("#innerpagesoverflowdiv").css("overflow", "");
          $("#innerpagesoverflowdiv").css("height", "760px");
          $("#home-bg-img-inner").css("height", "100%");
          // $('.bgLeft').fadeIn();
          $(".bgLeft").slideDown();
          $("body").css("overflow-y", "auto");

          $("#serviceNav span").addClass("arrow-up_office");
          $("#serviceNav span").removeClass("arrow-down_office");
          $("#home-bg-img").css("height", "760px");
        }, 400);
      }
    });
  }
  $(window).load(function () {
    $("#burgernavbar").click(function () {
      //Sandeep burger clicked menu appeared
      console.log("clicked burger");
      $("#project").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#offices").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#about").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#brand_partners")
        .removeClass("animated fadeOutUp1")
        .css("opacity", "0");
      $("#serviceNav").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#news").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#career").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#contact").removeClass("animated fadeOutUp1").css("opacity", "0");
      $("#language_menu")
        .removeClass("animated fadeOutUp1")
        .css("opacity", "0");
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
        $("#brand_partners")
          .addClass("animated fadeInDown1")
          .css("opacity", "0");
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
        $("#language_menu")
          .addClass("animated fadeInDown1")
          .css("opacity", "0");
      }, 150); //300
      //  $('body').css('overflow-y','hidden');
    });
    if ($(window).width() > 767) {
      navClick();
      navHover();
      serviceClick();
    }
    if ($(window).width() < 768) {
      $("#serviceNav").on("click", function () {
        console.log("////////////");
        if ($(this).children("ul").is(":visible")) {
          $(this).children("ul").slideUp();
        } else {
          $(this).children("ul").slideDown();
        }
      });
    }
    $(".navCanel").click(function () {
      //Sandeep when menu is closed using close button
      //alert("hi");
      //$('.topMenu').css("opacity","1").removeClass("animated fadeInDown85");
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
      $("#language_menu")
        .removeClass("animated fadeInDown1")
        .css("opacity", "1");

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
        $("#brand_partners")
          .addClass("animated fadeOutUp1")
          .css("opacity", "0");
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
        showServiceImageDiv(1);
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
      /*
        if($('.leftBar').is(':visible') ) {
            // $('.leftBar').animate({ 'width': '0px' }, 'slow', function(){
            //     $('.leftBar').hide();
          // });
          $('.leftBar, .bgLeft, .listMainImg').removeAttr('style');
          $('.bgLeft').fadeOut();
        $('#main_container').animate({ 'margin-left': '0px' }, 'slow');
       }
       */
      /*
        if($('.leftBar, .listMainImg').hasClass('leftActive')){
          $('.leftBar, .bgLeft, .listMainImg').removeAttr('style').removeClass('leftActive');
          $('.bgLeft').fadeOut();
		   $('body').css('overflow-y','auto');
$('#innerpagesoverflowdiv').css('height',pagebannerheight);		   
		     $('#serviceNav span').addClass('arrow-down_office');  
			  $('#serviceNav span').removeClass('arrow-up_office'); 
        }
        */

      if ($(window).width() < 768) {
        $("#project_filter").hide();
        $("#search_project").hide();
      }
      $(document).on("click", "#project_arrow", function () {
        $("#project_filter").toggle();
        $("#search_project").toggle();
      });
    });

    //TweenMax.to(".home-project-title-animation", 2, {boxShadow:"0px 0px 20px red", right:"200px", color:"#FC0"});
    // var spText = new SplitText(".home-project-title");

    var animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $("#home-bg-img-title").hide();
    setTimeout(function () {
      $("#home-bg-img-inner").css("opacity", "1");
      $("#home-bg-img-inner").addClass("animated fadeIn");
    }, 800);
    //logo will come
    setTimeout(function () {
      $("#main-logo").addClass("animated fadeInDown");
    }, 2500); //3000
    //logo will come
    setTimeout(function () {
      $("#main-logo-inner").addClass("animated fadeInDown");
    }, 1000); //2000
    //hamburger animation
    setTimeout(function () {
      $(".hamburger3").addClass("animated fadeInDown5x");
    }, 2000); //5000
    setTimeout(function () {
      $(".hamburger2").addClass("animated fadeInDown5x");
    }, 2150); //5300
    setTimeout(function () {
      $(".hamburger1").addClass("animated fadeInDown5x");
    }, 2650); //5500

    $("#home-bg-img-title").hide();
    $(".home-project-title").css("opacity", "0");
    //home big title animation
    setTimeout(function () {
      $("#home-bg-img-title1").addClass("animated fadeIn");
    }, 2000); //4000
    setTimeout(function () {
      animateWordByword("home-bg-img-title", "fadeInUp85se", 15);
    }, 3000); //8000
    setTimeout(function () {
      $("#home-bg-img-title2").addClass("animated fadeIn");
    }, 3700); //8000
    setTimeout(function () {
      $(".home-bg-scroll-down").addClass("animated fadeInDown");
      $(".home-bg-img-title-underline-extra").css({ left: "80px" });
      $(".home-bg-img-title-underline").addClass("animated fadeIn");
    }, 4500); //8000

    setTimeout(function () {
      $(".featured_project_slide").addClass("animated fadeIn");
      //$('#firstSlideImgF').addClass("animated zoomIn");
      $(".featured_project_slide:eq( 0 )")
        .find(".img-responsive")
        .css({ display: "block", opacity: "1" })
        .addClass("featured-projects-animate")
        .one(animationEnd, function () {
          $(".featured_project_slide:eq(0 )")
            .find(".img-responsive")
            .removeClass("featured-projects-animate");
          $(".featured_project_slide:eq(0 )")
            .find(".home-project-title")
            .addClass("animated fadeIn");
          setTimeout(function () {
            animateWordByword("firstSlideHeading1", "fadeInUp85se");
          }, 500); //7500
          setTimeout(function () {
            animateWordByword("firstSlideSubHeading1", "fadeInUp85se");
          }, 2000); //9000
        });
    }, 6000); //7000

    setTimeout(function () {
      $("#featured_project_slider_block").addClass("animated fadeInDown");
    }, 9500); //8000

    ///////////////////////////////////////////////////////////////FEATURED SLIDER START HERE/////////////////////////////////////////////////////////

    //featured_project_slide
    ///$('.featured_project_slide:first').addClass('home-bg-img-animate');
    /*  setTimeout(function () {
        $('.featured_project_slide:first').removeClass('home-bg-img-animate').css({'opacity': '1'});
    }, 5000);*/

    var featured_project_slider_total = $(".featured_project_slide").length;
    $(".featured_project_slider_total_index").text(
      featured_project_slider_total
    );

    //Right Arrow Clicked Featured Slider
    $(".featured_project_slider .right-arrow").click(function () {
      var id = window.setTimeout(function () {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
      $(".home-project-title-head-h1").css("visibility", "hidden");
      $(".home-project-title-head-h1").css("opacity", "0");
      $(".home-project-title-head-p").css("visibility", "hidden");
      $(".home-project-title-head-p").css("opacity", "0");
      $(".home-project-title").removeClass("animated fadeIn");
      var count = $(".featured_project_slide").length;
      var currentActiveSlide = $(
        '.featured_project_slide[style*="display: block"]'
      ).index();
      $(".featured_project_slide:eq( " + currentActiveSlide + " )")
        .css({ display: "none", opacity: "0" })
        .removeClass("active");
      if (count == currentActiveSlide + 1) currentActiveSlide = -1;
      //console.log('currentActiveSlide='+currentActiveSlide);
      //$('.featured_project_slider_current_index');
      $(".featured_project_slider_current_index")
        .text(currentActiveSlide + 2)
        .addClass("animated fadeIn")
        .one(animationEnd, function () {
          $(".featured_project_slider_current_index").removeClass(
            "animated fadeIn "
          );
        });
      //slider effect
      $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
        .css({ display: "block", opacity: "1" })
        .addClass("animated  fadeIn")
        .one(animationEnd, function () {
          $(
            ".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )"
          ).removeClass("animated  fadeIn");
        });
      $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
        .find(".img-responsive")
        .css({ opacity: "0" });

      $(".home-project-title").css("opacity", "0");
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
          .find(".img-responsive")
          .css({ display: "block", opacity: "1" })
          .addClass("featured-projects-animate")
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
              .find(".img-responsive")
              .removeClass("featured-projects-animate");
            $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
              .find(".home-project-title")
              .addClass("animated fadeIn");
            console.log(currentActiveSlide);
            setTimeout(function () {
              $("#firstSlideHeading" + (currentActiveSlide + 2)).css(
                "visibility",
                "visible"
              );
              //animateWordByword('firstSlideHeading'+currentActiveSlide,'fadeInUp85se',5,'.');
              $("#firstSlideHeading" + (currentActiveSlide + 2)).removeClass(
                "animated fadeIn"
              );
              $("#firstSlideHeading" + (currentActiveSlide + 2)).addClass(
                "animated fadeIn"
              );
            }, 1500); //7500
            setTimeout(function () {
              $("#firstSlideSubHeading" + (currentActiveSlide + 2)).css(
                "visibility",
                "visible"
              );
              $("#firstSlideSubHeading" + (currentActiveSlide + 2)).removeClass(
                "animated fadeIn"
              );
              $("#firstSlideSubHeading" + (currentActiveSlide + 2)).addClass(
                "animated fadeIn"
              );
              //animateWordByword('firstSlideSubHeading'+currentActiveSlide,'fadeInUp85se',5,'.');
              //$('.featured_project_slide:eq( ' + (currentActiveSlide - 1) + ' )').find('.home-project-title').removeClass("animated fadeIn");
            }, 2500); //9000
          });
      }, 500);

      //h1 tag animation
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
          .find(".home-project-title-head-h1")
          .css({ display: "block", opacity: "1" })
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
              .find(".home-project-title-head-h1")
              .removeClass("animated slideInUp");
          });
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        var $el = $(
            ".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )"
          ).find(".home-project-title-head-h1"),
          text = $.trim($el.text()),
          words = text.split(" "),
          html = "";

        for (var i = 0; i < words.length; i++) {
          html +=
            "<div style='    float: left;padding-right: 15px;'>" +
            words[i] +
            (i + 1 === words.length ? "" : " ") +
            "</div>";
        }
        $el
          .html(html)
          .children()
          .css("opacity", "0")
          .each(function (i) {
            var my = this;
            setTimeout(function () {
              $(my)
                .css({ display: "block", opacity: "1" })
                .addClass("animated fadeInUp85se");
            }, 300 * i);
            $(
              ".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )"
            ).show();
            $(
              ".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )"
            ).css("opacity", "1");
          });
      }, 1500);
      //p tag animation
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
          .find(".home-project-title-head-p")
          .css({ display: "block", opacity: "1" })
          .addClass("animated fadeIn")
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide + 1) + " )")
              .find(".home-project-title-head-p")
              .removeClass("animated fadeIn");
          });
      }, 1800);
      //$('.featured_project_slide:eq( '+(currentActiveSlide+1)+' )').css({'display':'block','opacity':'1'}).addClass('active');
    });

    //Left Arrow Clicked Featured Slider
    $(".featured_project_slider .left-arrow").click(function () {
      var id = window.setTimeout(function () {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
      $(".home-project-title-head-h1").css("visibility", "hidden");
      $(".home-project-title-head-h1").css("opacity", "0");
      $(".home-project-title-head-p").css("visibility", "hidden");
      $(".home-project-title-head-p").css("opacity", "0");
      $(".home-project-title").removeClass("animated fadeIn");
      var count = $(".featured_project_slide").length;
      var currentActiveSlide = $(
        '.featured_project_slide[style*="display: block"]'
      ).index();
      $(".featured_project_slide:eq( " + currentActiveSlide + " )")
        .css({ display: "none", opacity: "0" })
        .removeClass("active");
      //alert(currentActiveSlide);
      if (currentActiveSlide == 0) currentActiveSlide = count;
      //console.log('currentActiveSlide='+currentActiveSlide);

      $("#firstSlideHeading" + currentActiveSlide).removeClass(
        "animated fadeIn"
      );
      //alert(currentActiveSlide);
      //$('.featured_project_slider_current_index');
      $(".featured_project_slider_current_index")
        .text(currentActiveSlide)
        .addClass("animated fadeIn")
        .one(animationEnd, function () {
          $(".featured_project_slider_current_index").removeClass(
            "animated fadeIn "
          );
        });
      //slider effect
      $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
        .css({ display: "block", opacity: "1" })
        .addClass("animated fadeIn")
        .one(animationEnd, function () {
          $(
            ".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )"
          ).removeClass("animated fadeIn");
        });

      $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
        .find(".img-responsive")
        .css({ opacity: "0" });
      $(".home-project-title").css("opacity", "0");
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
          .find(".img-responsive")
          .css({ display: "block", opacity: "1" })
          .addClass("featured-projects-animate")
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
              .find(".img-responsive")
              .removeClass("featured-projects-animate");
            $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
              .find(".home-project-title")
              .addClass("animated fadeIn");
            console.log(currentActiveSlide);
            setTimeout(function () {
              $("#firstSlideHeading" + currentActiveSlide).css(
                "visibility",
                "visible"
              );
              //animateWordByword('firstSlideHeading'+currentActiveSlide,'fadeInUp85se',5,'.');
              $("#firstSlideHeading" + currentActiveSlide).removeClass(
                "animated fadeIn"
              );
              $("#firstSlideHeading" + currentActiveSlide).addClass(
                "animated fadeIn"
              );
            }, 1500); //7500
            setTimeout(function () {
              $("#firstSlideSubHeading" + currentActiveSlide).css(
                "visibility",
                "visible"
              );
              $("#firstSlideSubHeading" + currentActiveSlide).removeClass(
                "animated fadeIn"
              );
              $("#firstSlideSubHeading" + currentActiveSlide).addClass(
                "animated fadeIn"
              );
              //animateWordByword('firstSlideSubHeading'+currentActiveSlide,'fadeInUp85se',5,'.');
              //$('.featured_project_slide:eq( ' + (currentActiveSlide - 1) + ' )').find('.home-project-title').removeClass("animated fadeIn");
            }, 2500); //9000
          });
      }, 500);
      //h1 tag animation
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
          .find(".home-project-title-head-h1")
          .css({ display: "block", opacity: "1" })
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
              .find(".home-project-title-head-h1")
              .removeClass("animated slideInUp");
          });
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        var $el = $(
            ".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )"
          ).find(".home-project-title-head-h1"),
          text = $.trim($el.text()),
          words = text.split(" "),
          html = "";

        for (var i = 0; i < words.length; i++) {
          html +=
            "<div style='    float: left;padding-right: 15px;'>" +
            words[i] +
            (i + 1 === words.length ? "" : " ") +
            "</div>";
        }
        $el
          .html(html)
          .children()
          .css("opacity", "0")
          .each(function (i) {
            var my = this;
            setTimeout(function () {
              $(my)
                .css({ display: "block", opacity: "1" })
                .addClass("animated fadeInUp85se");
            }, 300 * i);
            $(
              ".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )"
            ).show();
            $(
              ".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )"
            ).css("opacity", "1");
          });
      }, 1500);
      //p tag animation
      setTimeout(function () {
        $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
          .find(".home-project-title-head-p")
          .css({ display: "block", opacity: "1" })
          .addClass("animated fadeIn")
          .one(animationEnd, function () {
            $(".featured_project_slide:eq( " + (currentActiveSlide - 1) + " )")
              .find(".home-project-title-head-p")
              .removeClass("animated fadeIn");
          });
      }, 1800);
      //$('.featured_project_slide:eq( '+(currentActiveSlide+1)+' )').css({'display':'block','opacity':'1'}).addClass('active');
    });

    ///////////////////////////////////////////////////////////////FEATURED SLIDER END HERE/////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////NEWS & RECOGNITION SLIDER START HERE sandeep/////////////////////////////////////////////////////////

    //combined_news_slider
    $(".combined_news_slider").css("display", "none");
    $(".combined_news_slider:first").css({ display: "block", opacity: "0" });
    //$('.combined_news_slider:first').addClass('home-bg-img-animate');

    var combined_news_slider_total = $(".combined_news_slider").length;
    $(".combined_news_slider_total_index").text(combined_news_slider_total);

    //Right Arrow Clicked Featured Slider
    $(".combined_news_slider .right-arrow").click(function () {
      var id = window.setTimeout(function () {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
      // $('.news-heading').css('display', 'none');
      // $('.news_info_block').css({'opacity': '0'});
      var count = $(".combined_news_slider").length;

      var currentActiveSlide = $(
        '.combined_news_slider[style*="display: block"]'
      ).index();
      //alert(currentActiveSlide);
      if (count == currentActiveSlide + 1) currentActiveSlide = -1;
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news-img-slide1")
        .css({ opacity: "0" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news-heading-slide1")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news_info_block_slide1")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news-img-slide2")
        .css({ opacity: "0" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news-heading-slide2")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .find(".news_info_block_slide2")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");

      $(".combined_news_slider:eq( " + currentActiveSlide + " )")
        .css({ display: "none", opacity: "0" })
        .removeClass("active");

      //slider effect
      $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
        .css({ display: "block", opacity: "1" })
        .one(animationEnd, function () {
          $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )");
        });

      //alert('hi');
      //img tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news-img-slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 100); //200

      //p tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news_info_block_slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1000); //2000

      //h1 tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news-heading-slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1500); //3000

      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news-img-slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1750); //3500

      //p tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news_info_block_slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 2250); //4500

      //h1 tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide + 1) + " )")
          .find(".news-heading-slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 2750); //5500
      //$('.combined_news_slider:eq( '+(currentActiveSlide+1)+' )').css({'display':'block','opacity':'1'}).addClass('active');
    });

    //Left Arrow Clicked Featured Slider
    $(".combined_news_slider .left-arrow").click(function () {
      var count = $(".combined_news_slider").length;

      var currentActiveSlide = $(
        '.combined_news_slider[style*="display: block"]'
      ).index();
      //alert(currentActiveSlide);

      $(".combined_news_slider:eq( " + currentActiveSlide + " )")
        .css({ display: "none", opacity: "0" })
        .removeClass("active");
      if (count == currentActiveSlide - 1) currentActiveSlide = -1;
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news-img-slide1")
        .css({ opacity: "0" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news-heading-slide1")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news_info_block_slide1")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news-img-slide2")
        .css({ opacity: "0" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news-heading-slide2")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .find(".news_info_block_slide2")
        .css({ opacity: "0", "z-index": "9999" })
        .removeClass("animated fadeIn");

      $(".combined_news_slider:eq( " + currentActiveSlide + " )")
        .css({ display: "none", opacity: "0" })
        .removeClass("active");

      //slider effect
      $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
        .css({ display: "block", opacity: "1" })
        .one(animationEnd, function () {
          $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )");
        });

      //alert('hi');
      //img tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news-img-slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 100); //200

      //p tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news_info_block_slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1000); //2000

      //h1 tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news-heading-slide1")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1500); //3000

      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news-img-slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 1750); //3500

      //p tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news_info_block_slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 2250); //4500

      //h1 tag animation
      setTimeout(function () {
        $(".combined_news_slider:eq( " + (currentActiveSlide - 1) + " )")
          .find(".news-heading-slide2")
          .addClass("animated fadeIn")
          .css({ opacity: "1" });
      }, 2750); //5500
    });

    ///////////////////////////////////////////////////////////////Project Page SLIDER START HERE/////////////////////////////////////////////////////////
    function projectImageSlider() {
      //projecr_slider
      $(".projecr_slider").css("display", "none");
      $(".projecr_slider:first").css({ display: "block", opacity: "0" });
      // $('.projecr_slider:first').addClass('home-bg-img-animate');
      setTimeout(function () {
        $(".projecr_slider:first")
          .removeClass("home-bg-img-animate")
          .css({ opacity: "1" });
      }, 2000);

      var combined_news_slider_total = $(".projecr_slider").length;
      $(".combined_news_slider_total_index").text(combined_news_slider_total);
      if (combined_news_slider_total > 1) {
        //Right Arrow Clicked Featured Slider
        $(".projecr_slider .right-arrow").click(function () {
          $(".news-heading").css("display", "none");
          $(".news_info_block").css({ visibility: "hidden" });
          var count = $(".projecr_slider").length;

          var currentActiveSlide = $(
            '.projecr_slider[style*="display: block"]'
          ).index();
          //alert(currentActiveSlide);

          $(".projecr_slider:eq( " + currentActiveSlide + " )")
            .css({ display: "none", opacity: "0" })
            .removeClass("active");
          if (count == currentActiveSlide + 1) currentActiveSlide = -1;
          //$('.combined_news_slider');
          /*   $('.projecr_slider_current_index').text(currentActiveSlide + 2).addClass('animated fadeIn').one(animationEnd, function () {
            $('.projecr_slider_current_index').removeClass('animated fadeIn ');
        });*/
          //slider effect
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .css({ display: "block", opacity: "1" })
            .one(animationEnd, function () {
              $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )");
            });
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .find(".project-img")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .find(".project-heading")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .find(".project_info_block")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .find(".project_info_link")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
            .find(".project_info_line")
            .css({ opacity: "0" });
          //alert('hi');
          //img tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
              .find(".project-img")
              .delay(5000)
              .addClass("animated fadeInUp85se")
              .css({ display: "block", opacity: "1" })
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
                  .find(".project-img")
                  .removeClass("animated fadeInUp1se");
              });
          }, 200);
          //h1 tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
              .find(".project-heading")
              .css({ display: "block", opacity: "1" })
              .delay(5000)
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
                  .find(".project-heading")
                  .removeClass("animated fadeInUp1se");
              });
          }, 1800);
          //p tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
              .find(".project_info_block")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
                  .find(".project_info_block")
                  .removeClass("animated fadeInUp1se");
              });
          }, 2500);

          //view link line animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
              .find(".project_info_line")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
                  .find(".project_info_line")
                  .removeClass("animated fadeInUp1se");
              });
          }, 2700);
          //view link tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
              .find(".project_info_link")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide + 1) + " )")
                  .find(".project_info_link")
                  .removeClass("animated fadeInUp1se");
              });
          }, 3000);
          //$('.combined_news_slider:eq( '+(currentActiveSlide+1)+' )').css({'display':'block','opacity':'1'}).addClass('active');
        });

        //Left Arrow Clicked Featured Slider
        $(".projecr_slider .left-arrow").click(function () {
          $(".news-heading").css("display", "none");
          $(".news_info_block").css({ visibility: "hidden" });
          var count = $(".projecr_slider").length;

          var currentActiveSlide = $(
            '.projecr_slider[style*="display: block"]'
          ).index();
          //alert(currentActiveSlide);

          $(".projecr_slider:eq( " + currentActiveSlide + " )")
            .css({ display: "none", opacity: "0" })
            .removeClass("active");
          if (count == currentActiveSlide + 1) currentActiveSlide = -1;
          //$('.combined_news_slider');

          /* $('.combined_news_slider_current_index').text(currentActiveSlide+2).addClass('animated fadeIn').one(animationEnd, function() {
         $('.combined_news_slider_current_index').removeClass('animated fadeIn ');
         });*/
          //slider effect
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .css({ display: "block", opacity: "1" })
            .one(animationEnd, function () {
              $(
                ".projecr_slider:eq( " + (currentActiveSlide - 1) + " )"
              ).removeClass("animated fadeIn");
            });
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .find(".project-img")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .find(".project-heading")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .find(".project_info_block")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .find(".project_info_link")
            .css({ display: "block", opacity: "0" });
          $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
            .find(".project_info_line")
            .css({ display: "block", opacity: "0" });
          //alert('hi');
          //img tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
              .find(".project-img")
              .css({ display: "block", opacity: "1" })
              .delay(5000)
              .addClass("animated slideInLeft")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
                  .find(".project-img")
                  .removeClass("animated fadeInUp1se");
              });
          }, 200);
          //h1 tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
              .find(".project-heading")
              .css({ display: "block", opacity: "1" })
              .delay(5000)
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
                  .find(".project-heading")
                  .removeClass("animated fadeInUp1se");
              });
          }, 1800);
          //p tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
              .find(".project_info_block")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
                  .find(".project_info_block")
                  .removeClass("animated fadeInUp1se");
              });
          }, 2500);
          //view link line animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
              .find(".project_info_line")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
                  .find(".project_info_line")
                  .removeClass("animated fadeInUp1se");
              });
          }, 3000);
          //view link tag animation
          setTimeout(function () {
            $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
              .find(".project_info_link")
              .css({ visibility: "visible", opacity: "1" })
              .addClass("animated slideInUp")
              .one(animationEnd, function () {
                $(".projecr_slider:eq( " + (currentActiveSlide - 1) + " )")
                  .find(".project_info_link")
                  .removeClass("animated fadeInUp1se");
              });
          }, 3000);
          //$('.combined_news_slider:eq( '+(currentActiveSlide+1)+' )').css({'display':'block','opacity':'1'}).addClass('active');
        });
      }
    }
    //projectImageSlider();
    ///////////////////////////////////////////////////////////////Project Page  SLIDER END HERE/////////////////////////////////////////////////////////
  });

  var controller = new ScrollMagic.Controller();
  // create a scene
  new ScrollMagic.Scene({
    duration: 100, // the scne should last for a scroll distance of 100px
    offset: 50, // start this scene after scrolling for 50px
  })
    .setPin("#my-sticky-element")
    .addTo(controller); // assign the scene to the controller
  //Changes for project search page
  $(document).ready(function () {
    $(".leftLogos li a").click(function () {
      // console.log('leftLogos li a clicked');
      $(this).parent().siblings().find(".select").removeClass("select");
      $(this).addClass("select").not(this).removeClass("select");
    });
    $(".custom-select-option li").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#project-main-section").offset().top - 25,
        },
        1000
      );
      var id = $(this).attr("data-id");
      var option_id = $(this).parent("ul").attr("option-name");
      $("#" + option_id).val(id);
      $(this)
        .parent("ul")
        .siblings("button")
        .children("label")
        .text($(this).text());
      bindEvent("project-page-search", $("#project_search_form").serialize());
    });

    $("#project_search_form select").change(function () {
      bindEvent("project-page-search", $("#project_search_form").serialize());
    });
    $("#search_by_keyword_image").click(function () {
      if ($("#search_by_keyword").val() != "") {
        $("html, body").animate(
          {
            scrollTop: $("#project-main-section").offset().top - 25,
          },
          1000
        );

        $("#myModal .close").trigger("click");
        bindEvent("project-keyword-search", $("#search_by_keyword").val());
        $(".project_type_filter li").removeClass("current");
      }
    });
  });
  $("#keywordSearch").submit(function (event) {
    event.preventDefault();
    // alert("hi");
    $("html, body").animate(
      {
        scrollTop: $("#project-main-section").offset().top - 25,
      },
      1000
    );
    $("#myModal .close").trigger("click");
    bindEvent("project-keyword-search", $("#search_by_keyword").val());
    $(".project_type_filter li").removeClass("current");
    e.preventDefault();
  });
  /*
function bindEvent(mode, data) {
    $('#projectLoaderImage').show();
    $.post("ajax", {mode: mode, formData: data}, function (result) {
        $('#projectLoaderImage').hide();
        $('#project-listing-section').html(result);
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//projecr_slider 
        $('.projecr_slider').css('display', 'none');
        $('.projecr_slider:first').css({'display': 'block', 'opacity': '0'});
        //$('.projecr_slider:first').addClass('home-bg-img-animate');
        setTimeout(function () {
            $('.projecr_slider:first').removeClass('home-bg-img-animate').css({'opacity': '1'});
        }, 10);

        var combined_news_slider_total = $(".projecr_slider").length;
        $('.combined_news_slider_total_index').text(combined_news_slider_total);
        if (combined_news_slider_total > 1)
        {
            //Right Arrow Clicked Featured Slider
            $(".projecr_slider .right-arrow").click(function () {
               $('html, body').animate({
                scrollTop: ($("#project-main-section").offset().top)-25,
            }, 1000);
                console.log("hi21");
                
                $('.news-heading').css('display', 'none');
                $('.news_info_block').css({'visibility': 'hidden'});
                var count = $(".projecr_slider").length;

                var currentActiveSlide = ($('.projecr_slider[style*="display: block"]').index());
                //alert(currentActiveSlide);

                $('.projecr_slider:eq( ' + currentActiveSlide + ' )').css({'display': 'none', 'opacity': '0'}).removeClass('active');
                if ((count) == (currentActiveSlide + 1))
                    currentActiveSlide = -1;
               
                //slider effect
                $('.projecr_slider:eq( ' + (currentActiveSlide + 1) + ' )').css({'display': 'block', 'opacity': '1'});
                $('.projecr_slider:eq( ' + (currentActiveSlide + 1) + ' )').find('.animateBlock').css({'display': 'block', 'opacity': '0'}).removeClass('animated fadeInUp85se');

                var $elements = $('.projecr_slider:eq( ' + (currentActiveSlide + 1) + ' )').find('.project_div_display');


                $elements.each(function (i, elem) { //loop through each element
                    var that = this;
                    $(this).find('.animateBlock').delay(i*1000).css({'display': 'block', 'opacity': '1'}).addClass('animated fadeInUp85se test');
                    //alert(i);
                    //setInterval(function () {
                        //alert('hfjfj');
                    //    $(that).find('.animateBlock').css({'display': 'block', 'opacity': '1'}).addClass('animated fadeInUp85se test');

                    //}, i*500);


                });

            });


            //Left Arrow Clicked Featured Slider
            $(".projecr_slider .left-arrow").click(function () {
               $('html, body').animate({
                scrollTop: ($("#project-main-section").offset().top)-25,
            }, 1000);
                
                
                $('.news-heading').css('display', 'none');
                $('.news_info_block').css({'visibility': 'hidden'});
                var count = $(".projecr_slider").length;

                var currentActiveSlide = ($('.projecr_slider[style*="display: block"]').index());
                //alert(currentActiveSlide);

                $('.projecr_slider:eq( ' + currentActiveSlide + ' )').css({'display': 'none', 'opacity': '0'}).removeClass('active');
                if ((count) == (currentActiveSlide + 1))
                    currentActiveSlide = -1;
                //$('.combined_news_slider');

                // $('.combined_news_slider_current_index').text(currentActiveSlide+2).addClass('animated fadeIn').one(animationEnd, function() {
                // $('.combined_news_slider_current_index').removeClass('animated fadeIn ');
                // });
                //slider effect
                $('.projecr_slider:eq( ' + (currentActiveSlide - 1) + ' )').css({'display': 'block', 'opacity': '1'}).one(animationEnd, function () {
                    $('.projecr_slider:eq( ' + (currentActiveSlide - 1) + ' )').removeClass('animated fadeIn');
                });
                var $elements = $('.projecr_slider:eq( ' + (currentActiveSlide + 1) + ' )').find('.project_div_display');


                $elements.each(function (i, elem) { //loop through each element
                    var that = this;
                    $(this).find('.animateBlock').delay(i*1000).css({'display': 'block', 'opacity': '1'}).addClass('animated fadeInUp85se test');
                    //alert(i);
                    //setInterval(function () {
                    //    //alert('hfjfj');
                    //    $(that).find('.animateBlock').css({'display': 'block', 'opacity': '1'}).addClass('animated fadeInUp85se test');
//
                    //}, i*500); 


                });

            });

        }
        var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
        var $window = $(window);

        $elements.each(function (i, elem) { //loop through each element
            if ($(this).hasClass('animated')) // check if already animated
                return;
            var that = this;
            if (i < 8)
            {
                setTimeout(function () {
                    animateMe($(that));
                }, 200 * i);
            } else
            {
                setTimeout(function () {
                    animateMe($(that));
                }, i);

            }
        });




        function animateMe(elem) {
            setTimeout(function () {
                $(elem).removeClass('notAnimated').addClass('animated fadeInUp85se');
                setTimeout(function () {
                    if( ! /Android|webOS|iPhone|BlackBerry /i.test(navigator.userAgent) ) {
                        $(elem).parent().css('height', '527', 'padding', '0');
                    }else{
                        $(elem).parent().css('height', 'auto', 'padding', '0');
                    }
                }, 500);
            }, 500);
        }
    });
 }
*/
};
export default Site;
