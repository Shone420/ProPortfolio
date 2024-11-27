
import Maillogo from "../public/Maillogo.png";
import linkedin from "../public/linkedin.png";

const Fourthpage = () => {
  return (
    <div style={{ background: "#D9D9D9", padding: "150px", height: "20vh" }} id="Contact-section">
      {/* Inline style for hover effect */}
      <style>
        {`
          a:hover img {
            transform: scale(1.2);
            transition: transform 0.3s ease;
          }
        `}
      </style>
      <div
        style={{
          color: "Black",
          fontSize: "60px",
          marginRight: "100px",
          marginBottom: "35px",
        }}
      >
        <span className="reem-kufi-normal" style={{ position: 'absolute', left: '39%', top: '326%' }}>Get In Touch</span>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: '48%', top: '336%' }}>
            <a href="mailto:shonethomas420@gmail.com">
              <img src={Maillogo} alt="" style={{ width: '50px', height: 'auto' }} />
            </a>
          </div>
          <div style={{ position: 'absolute', left: '48%', top: '345%' }}>
            <a
              href="https://www.linkedin.com/in/shone-thomas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" style={{ width: '50px', height: 'auto' }} />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Fourthpage;
