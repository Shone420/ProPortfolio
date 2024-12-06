
import Maillogo from "../public/Maillogo.png";
import linkedin from "../public/linkedin.png";

const Fourthpage = () => {

    return (
      <div
        style={{
          background: "#D9D9D9",
          padding: "50px 10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="Contact-section"
      >
        {/* Inline style for hover effect */}
        <style>
          {`
            a:hover img {
              transform: scale(1.2);
              transition: transform 0.3s ease;
            }
          `}
        </style>
  
        {/* Title Section */}
        <h2
          className="reem-kufi-normal"
          style={{
            color: "black",
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Get In Touch
        </h2>
  
        {/* Icons Section */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mail Icon */}
          <a href="mailto:shonethomas420@gmail.com">
            <img
              src={Maillogo}
              alt="Mail Logo"
              style={{ width: "50px", height: "auto", cursor: "pointer" }}
            />
          </a>
  
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/shone-thomas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn Logo"
              style={{ width: "50px", height: "auto", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    );
  };

export default Fourthpage;
