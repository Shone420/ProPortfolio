import mainimage from "../public/mainpic.png";
import logo from "../public/logo.png";

import { Link } from "react-router-dom";
import { useState } from "react";

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

  // CSS classes for hover effects
  const hoverStyle = {
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const hoverEffect = {
    // color: "#FFD700", // Gold color for hover effect
    transform: "scale(1.1)", // Slight zoom effect
  };

  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index: number) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(-1);

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
        <div className="about-head" > 
          {[
            { label: "About", onClick: AboutScroll },
            { label: "Projects", link: "/Projects" },
            { label: "Gallery", onClick: GalleryScroll },
            { label: "Video Blog", link: "/Video" },
            { label: "Posts", link: "/ProPortfolio/Posts" },
            { label: "Contact", onClick: ContactScroll },
          ].map((item, index) => (
            <div
              key={index}
              className="about-deets"
              style={hoverIndex === index ? { ...hoverStyle, ...hoverEffect } : hoverStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={item.onClick || undefined}
            >
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: "none", color: "#FFF" }}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
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
          <div style={{ fontSize: "90px", lineHeight: "1" }}>
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
            style={{width: "50%", height: "auto"}}
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
          <div style={{ fontSize: "85px", lineHeight: "1" }}>
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
        ></div>
      </div>
    </div>
  );
};

export default Firstpage;

