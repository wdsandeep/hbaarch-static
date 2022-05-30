import React from "react";
import Link from "next/link";
const AppMenu = () => {
  return (
    <>
      <div
        className="topBar padd5"
        style={{
          display: "none",
          zIndex: 64,
          paddingLeft: "6.3% !important",
          background: "#ffffff",
        }}
      >
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-md-2 col-xs-9 text-left m-left paddLeftNone">
              <div className="logo">
                <Link href={"/"}>
                  <a style={{ cursor: "pointer" }}>
                    <img src="/images/HBA-Logo-Illuminate-gray.svg" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden-md hidden-lg col-xs-2 text-right navCWrap pull-right paddRightNone"></div>
            <div className="col-lg-9 col-md-10 pull-left paddLeftNone">
              <ul className="topMenu" style={{ opacity: 1 }}>
                <li id="project" style={{ opacity: 0 }}>
                  <Link href={"/project"}>
                    <a className="add-opacity" style={{ cursor: "pointer" }}>
                      Projects
                    </a>
                  </Link>
                  &nbsp;
                </li>

                <li id="about" style={{ opacity: 0 }}>
                  <Link href={"/about"}>
                    <a className="add-opacity " style={{ cursor: "pointer" }}>
                      About Us
                    </a>
                  </Link>
                  &nbsp;
                </li>

                <li id="career" style={{ opacity: 0 }}>
                  <Link href={"/career"}>
                    <a className="add-opacity " style={{ cursor: "pointer" }}>
                      Career
                    </a>
                  </Link>
                  &nbsp;
                </li>
                <li id="contact" style={{ opacity: 0 }}>
                  <Link href={"/contact"}>
                    <a className="add-opacity   " style={{ cursor: "pointer" }}>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppMenu;
