import React from "react";

const AppFooter = () => {
  return (
    <div className="row footer-box">
      <div
        className="col-md-12"
        style={{ background: "#ffffff", padding: "1.5em 6.3%" }}
      >
        <div className="col-md-6 pull-left copyright copyStyle">
          &copy; HBAarchitecture 2022 / HBAarchitecture is an HBA company{" "}
        </div>
        <div className="col-md-6 pull-right" style={{ padding: 0 }}>
          <div className="social-icons contact-link noneMargin">
            <a href="https://hbaarchitecture.com/2022/privacy-policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
