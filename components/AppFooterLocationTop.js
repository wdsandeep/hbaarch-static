import React from "react";
import Script from "next/script";
import Link from "next/link";
const AppFooterLocationTop = () => {
  return (
    <>
      <div className="row">
        <div
          id="contact_us_career_in_home"
          className=" col-md-12 text-center contact-link"
          style={{ padding: "4.2em 7%", opacity: 1 }}
        >
          <Link href={"/contact"}>
            <a style={{ cursor: "pointer" }}>Contact Us</a>
          </Link>
          <span className="mid-links">/</span>
          <Link href={"/career"}>
            <a
              style={{ cursor: "pointer" }}
              className="form-request-btn career-form-popup"
            >
              Careers
            </a>
          </Link>
        </div>
      </div>

      <div className="row paddTop66" style={{ margin: 0, padding: "0 6%" }}>
        <hr style={{ margin: 0, borderTop: "2px dashed #6a6865" }} />
        <div className="col-md-12 text-center home-sub-heading"></div>
      </div>
      <Script
        id="footer_career_form_scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `

      $('.career-form-popup').click(function(e){
            e.preventDefault();
          $('#careerModal').modal('show');
      });
        

      `,
        }}
      ></Script>
    </>
  );
};

export default AppFooterLocationTop;
