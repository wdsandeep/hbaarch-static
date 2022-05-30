import React from "react";

const AppModalPopupContact = () => {
  return (
    <>
      <div className="custom-page services-page contact-modal-popup">
        <div
          className="modal fade"
          id="projectModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content  modal-body-form">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title project_info" id="myModalLabel">
                  Project Information
                </h4>
                <p className="proj_info_content" id="cont_proje">
                  Thank you for your interest in HBAarchitecture. If you would
                  like more information about our company or wish to discuss a
                  specific project opportunity, please send your request to the
                  relevant HBAarchitecture office listed in the drop-down menu
                  to the right and a HBAarchitecture representative will contact
                  you straight away.{" "}
                </p>
              </div>
              <div className="modal-body">
                <form
                  name="contact-request-form"
                  id="contact-request-form"
                  method="POST"
                  action=""
                >
                  <input
                    type="hidden"
                    name="request_from"
                    id="request_from"
                    value="contact"
                    readOnly={true}
                  />
                  <input
                    type="hidden"
                    name="office_id"
                    className="office_id"
                    id="office_id"
                    value="0"
                    readOnly={true}
                  />
                  <input
                    type="hidden"
                    name="request_type"
                    id="request_type"
                    value=""
                    readOnly={true}
                  />
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 form-left">
                      <div
                        className="form-group locations-mobile partner-section-form"
                        id="partner-section-universal"
                        style={{ display: "none" }}
                      >
                        <div className="dropdown location-dropdown">
                          <label id="partner-error-label">TO :</label>
                          <label
                            id="partner_error"
                            style={{ display: "none" }}
                            className=""
                            htmlFor="partner"
                          >
                            Member is required
                          </label>
                          <button
                            className="btn btn-primary dropdown-toggle selected-location"
                            type="button"
                            data-toggle="dropdown1"
                          >
                            <label>Select Member</label>
                            <span
                              style={{ top: "65px !important" }}
                              className="arrow-down_office"
                            ></span>
                          </button>
                          <ul
                            option-name="member_email_universal_form"
                            className="dropdown-menu custom-select-option-contact"
                          >
                            <li data-id="23">RICHARD L. KUEI</li>
                            <li data-id="25">JOE LAU</li>
                            <li data-id="24">DONGMIN SHIM</li>
                            <li data-id="26">LASSE WAGER</li>
                            <li data-id="27">HOWARD TSENG</li>
                            <li data-id="28">ATSUSHI KUBOTA</li>
                            <li data-id="29">YICHIEH SU</li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className="form-group locations-mobile location-section-form"
                        id="location-section-universal"
                        style={{ display: "none" }}
                      >
                        <div
                          className="dropdown location-dropdown"
                          style={{ paddingBottom: "9px" }}
                        >
                          <label id="location-error-label">TO :</label>
                          <label
                            id="location_error"
                            style={{ display: "none" }}
                            className=""
                            htmlFor="location"
                          >
                            Location is required
                          </label>
                          <button
                            className="btn btn-primary dropdown-toggle selected-location"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <label>Select location</label>
                            <span
                              style={{ top: "65px !important" }}
                              className="arrow-down_office"
                            ></span>
                          </button>
                          <ul
                            option-name="office_location_universal_form"
                            className="dropdown-menu custom-select-option-contact"
                            style={{ height: "80px" }}
                          >
                            <li data-id="21">Shanghai</li>
                            <li data-id="22">Singapore</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="form-group publication-section-form"
                        id="publication-section1"
                        style={{ display: "none" }}
                      >
                        <label htmlFor="publication" id="publication_label">
                          Publication:{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="publication"
                          id="publication"
                          placeholder="Insert your publication here..."
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject" id="subject_label">
                          Subject:{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Insert your subject line here..."
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message" id="message_label">
                          Message:{" "}
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="Insert your message here..."
                          style={{ height: "144px" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 form-right">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label htmlFor="name" id="name_label">
                              Name:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Insert your name here..."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label htmlFor="phone" id="phone_label">
                              Phone:{" "}
                            </label>
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="form-control input-medium bfh-phone"
                              data-format="+1 (ddd) ddd-dddd"
                              placeholder="Insert your number here..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" id="email_label">
                          Email:{" "}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Insert your email here..."
                        />
                      </div>
                      <div
                        className="form-group"
                        style={{ marginBottom: "1em" }}
                      >
                        <label htmlFor="captcha_label" id="captcha_label">
                          Captcha:{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control required"
                          name="captcha"
                          id="captcha"
                          autoComplete="off"
                          maxLength="6"
                          placeholder="Write below text here"
                          style={{
                            width: "100%",
                            display: "inline",
                            marginBottom: "1em",
                          }}
                        />
                        <img
                          id="Imageid"
                          src="https://hbaarchitecture.com/2022//captcha/1652074546.0457.jpg"
                          style={{ width: 200, height: 50, border: 0 }}
                          alt=" "
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-default modal-submit "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-content modal-body-succes">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h2 className="modal-title Request-Submitted" id="myModalLabel">
                  Request Submitted!
                </h2>
                <p className="Thank-you-for-your-i">
                  Thank you for the interest in HBAarchitecture work. <br />
                  Someone from HBAarchitecture will be in touch shortly!
                </p>
                <button
                  type="button"
                  className="close close-btn-lg"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Back to page
                </button>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppModalPopupContact;
