import React from "react";

const AppModalPopupCareer = () => {
  return (
    <>
      <div className="custom-page services-page career-modal-popup">
        <div
          className="modal fade"
          id="careerModal"
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
                  Career
                </h4>
                <p className="proj_info_content" id="cont_proje">
                  HBAarchitecture is always looking for energetic and talented
                  individuals to join the HBAarchitecture team.
                  <br />
                  To apply for a position with HBAarchitecture, please email
                  your resume to the HBAarchitecture office location of
                  interest.{" "}
                </p>
              </div>
              <div className="modal-body">
                <div
                  id="success-career-message"
                  style={{ display: "none" }}
                  className="row"
                >
                  <div className="col-md-6 col-sm-12 col-xs-12 form-left">
                    Your form request accepted successfully
                  </div>
                </div>
                <form
                  name="career-request-form"
                  id="uploadForm"
                  method="POST"
                  action="ajax.php"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="office_ids"
                    value=""
                    id="office_ids"
                    readOnly={true}
                  />
                  <input
                    type="hidden"
                    name="mode"
                    value="career_form_request"
                    id="mode"
                    readOnly={true}
                  />
                  <input
                    type="hidden"
                    name="requested_from"
                    id="requested_from"
                    value="career"
                    readOnly={true}
                  />
                  <input
                    type="hidden"
                    name="request_type"
                    id="request_type"
                    value="career_form_request"
                    readOnly={true}
                  />
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 form-left">
                      <div
                        className="form-group locations-mobile location-section-form"
                        id="location-section-universal"
                      >
                        <div className="dropdown location-dropdown">
                          <div className=" paddingBottom30 fontSize15">
                            <span id="location-error">LOCATION:</span>
                            <label
                              id="location-error-msg"
                              style={{ display: "none" }}
                              className="errors"
                            >
                              Please select a location.
                            </label>
                          </div>
                          <ul className="locationList" id="location-section">
                            <li
                              location-id="21"
                              style={{
                                width: "24%",
                                padding: "0.5em 1% 10px 0",
                                margin: 0,
                              }}
                            >
                              <a href="#nolink">Shanghai</a>
                            </li>
                            <li
                              location-id="22"
                              style={{
                                width: "24%",
                                padding: "0.5em 1% 10px 0",
                                margin: 0,
                              }}
                            >
                              <a href="#nolink">Singapore</a>
                            </li>
                          </ul>

                          <div className="clearfix"></div>
                        </div>
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
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <label htmlFor="userResume1" id="userResume1_label">
                          RESUME:{" "}
                        </label>
                        <div
                          className="btnUpload"
                          style={{ clear: "both", marginTop: "3px" }}
                        >
                          <input
                            className="marginTopNone"
                            type="text"
                            id="uploadFile"
                            placeholder="Choose File"
                            disabled="disabled"
                          />
                          <div className="fileUpload btn btn-primary">
                            {" "}
                            <span>UPLOAD</span>
                            <input
                              name="userResume"
                              type="file"
                              id="userResume"
                              className="upload inputFile uploadFile"
                            />
                          </div>
                          <div style={{ height: "58px" }}>&nbsp;</div>
                        </div>
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
                        className="btn btn-default modal-submit-career"
                        style={{ marginTop: "0em" }}
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
                  Thank you for the interest in HBAarchitecture. <br />
                  Your resume has been forwarded to the appropriate hiring
                  manager for review. <br />
                  If this will fit with the requirements of the position, you
                  will be contacted for an interview.{" "}
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

export default AppModalPopupCareer;
