
import Mail from "../public/mail.png"
import telephone from "../public/telephone.png"

const Fourthpage = () => {
  return (
    <div style={{ background: "#D9D9D9", padding: "150px", height: "20vh" }} id="Contact-section">
    <div
        style={{
          color: "Black",
          fontSize: "50px",
          marginRight: "100px",
          marginBottom: "35px",
          
        }}
      >
        <span className="reem-kufi-normal" style={{position: 'absolute', right: '77%', top:'328%'}}>Contact Me</span>


        <div style={{display: 'flex', alignItems: 'center'}}>
        <img
          src={telephone}
          alt=""
          style={{
            marginRight: "10px",
            width: "40px",
            height: "auto",
          }}
        />
        <span style={{fontSize: '35px', fontWeight: '350'}}>+353 874831524</span>
        </div>


        <div style={{display: 'flex', alignItems: 'center'}}>
          <img
            src={Mail}
            alt=""
            style={{
              marginRight: "10px",
              width: "40px",
              height: "auto",
            }}
          />
          <span style={{fontSize: '35px', fontWeight: '350'}}><a href="mailto:shonethomas420@gmail.com">Get in Touch</a></span>
        
        </div>
        <div>
        
    </div>
        
    </div>
  </div>
);
};

export default Fourthpage