import mainimage from "../public/mainpic.png";
import logo from "../public/logo.png";

import { Link } from "react-router-dom";

const Firstpage = () => {
  // Gallery Scroll function
  const GalleryScroll = () => {
    const GalleryDiv = document.getElementById("Gallery-section");
    if (GalleryDiv) {
      GalleryDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Contact Scroll function
  const ContactScroll = () => {
    const ContactDiv = document.getElementById("Contact-section");
    if (ContactDiv) {
      ContactDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  // About Scroll function
  const AboutScroll = () => {
    const AboutDiv = document.getElementById("About-section");
    if (AboutDiv) {
      AboutDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Whole Page
    <div className="bg-style">
      {/* Navbar */}
      <div className="details-bg">
        {/* Logo Section */}
        <div className="logo-div">
          <div>
            <img src={logo} alt="" className="logo-deets" />
          </div>
        </div>
        {/* Text Section */}
        <div className="about-head">
          <div className="about-deets" onClick={() => AboutScroll()}>About</div>
          <div className="about-deets">
            <Link to="/Projects" style={{ textDecoration: "none", color: "#FFF" }}>
              <span>
                Projects
              </span>
            </Link>
          </div>
          <div className="about-deets" onClick={() => GalleryScroll()}>
            Gallery
          </div>
          <div className="about-deets">
            <Link to="/Video" style={{ textDecoration: "none", color: "#FFF" }}>
              <span>
                Blog
              </span>
            </Link>
          </div>
          <div className="about-deets" onClick={() => ContactScroll()}>
            Contact
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="flex-display-class">
        <div
          style={{
            color: "#FFFFFF",
            position: "absolute",
            left: "10%",
            top: "30%",
          }}
        >
          <div style={{ fontSize: "85px", lineHeight: "1" }}>
            <span>SHONE</span>
            <br />
            <span>THOMAS</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "25%",
            zIndex: 10,
          }}
        >
          <img
            src={mainimage}
            alt=""
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div
          style={{
            color: "#FFFFFF",
            position: "absolute",
            left: "54%",
            top: "42%",
          }}
        >
          <div style={{ fontSize: "75px", lineHeight: "1" }}>
            <span>GRAPHIC</span>
            <br />
            <span>DESIGNER</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "auto",
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
