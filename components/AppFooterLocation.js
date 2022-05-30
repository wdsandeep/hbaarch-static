import React, { useState, useEffect } from "react";
import Script from "next/script";
import AppModalPopupLocation from "./AppModalPopupLocation";
import { officeInfo } from "./../pages/api/getLocationInfo";
const AppFooterLocation = () => {
  const [locationData, setLocationData] = useState({});

  const handleLocation = async (locationId) => {
    const findOffice = officeInfo.find((item) => item.id === locationId);
    setLocationData(findOffice);

    var position = $(this).attr("data-location");
    if (position == "footer") {
      $("#locationModal .modal-dialog").addClass("modal-dialog-bottom");
    } else {
      $("#locationModal .modal-dialog").removeClass("modal-dialog-bottom");
    }
    $("#locationModal").modal("show");
  };
  return (
    <>
      <div id="our_location_block" className="row footerStyle">
        <div
          className="col-md-12 location-head"
          style={{ padding: 0, opacity: 1 }}
        >
          OUR LOCATIONS
        </div>

        <div className="col-md-12 location-office" style={{ padding: 0 }}>
          <ul
            className="footerLocation location-click"
            style={{ marginBottom: "0px" }}
          >
            {officeInfo.map((item) => {
              return (
                <li
                  onClick={() => {
                    handleLocation(item.id);
                  }}
                  key={item.id}
                  style={{ cursor: "pointer", opacity: 1 }}
                  data-location="footer"
                  data-location-id={item.id}
                >
                  {item.city}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="services-page footerLocation2">
          <div id="projectModal">
            <div className="dropdown location-dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Select location
                <span className="caret"></span>
              </button>
              <ul
                className="dropdown-menu location-click"
                style={{ height: "75px" }}
              >
                {officeInfo.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        handleLocation(item.id);
                      }}
                      style={{ cursor: "pointer" }}
                      data-location-id={item.id}
                    >
                      office
                    </li>
                  );
                })}
                <li
                  onClick={() => {
                    handleLocation(21);
                  }}
                  style={{ cursor: "pointer" }}
                  data-location-id="21"
                >
                  Shanghai
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleLocation(22);
                  }}
                  data-location-id="22"
                >
                  Singapore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AppModalPopupLocation data={locationData} />
      <Script id="app_footer_location_js" strategy="lazyOnload">
        {`
        $(function() {
          // console.log('hi123');
          $( ".footerLocation2 #projectModal .location-dropdown .btn" ).bind( "click", function() {
            console.log('opened footer location');
            $("html, body").animate({ scrollTop: $(document).height() }, 200);
          });
        });

        $(document).ready(function(){


          $(document).on('click', '.contact_office_email_popup', function() {
              event.preventDefault();
              console.log('contact_office_email_popup clicked');
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


          $('.location-click li, .location-click a').click(function(){
            
          });
      
        
        });        

        `}
      </Script>
    </>
  );
};

export default AppFooterLocation;
