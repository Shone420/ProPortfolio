
import picture2 from "../public/Picture 2 - Defines Me.jpg";
import picture3 from "../public/Picture 3- Aesthetic.jpeg";
import corporateheadshotpicture1 from "../public/Corporate Headshot Picture 1.png"



const Thirdpage = () => {
  
  return (
    <div style={{ background: "#40534C", padding: "350px", height: "50vh" }} id="Gallery-section">
      <div>
        <span className="reem-kufi-normal" style={{position: 'absolute',top: '230%', left: '5%', fontSize: '55px', color: 'white'}}>Gallery
        </span>
        <img
          src={corporateheadshotpicture1}
          alt=""
          style={{
            position: "absolute",
            left: "10%",
            top: "248%",
            width: "270px",
            height: "auto",
          }}
        />
        <img
          src={picture3}
          alt=""
          style={{
            position: "absolute",
            left: "70%",
            top: "248%",
            width: "270px",
            height: "auto",
          }}
        />
        <img
          src={picture2}
          alt=""
          style={{
            position: "absolute",
            left: "36%",
            top: "248%",
            width: "385px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Thirdpage;
