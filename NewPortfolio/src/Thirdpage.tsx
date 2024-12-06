
import picture2 from "../public/Picture 2 - Defines Me.jpg";
import picture3 from "../public/Picture 3- Aesthetic.jpeg";
import corporateheadshotpicture1 from "../public/Corporate Headshot Picture 1.png";
import paper from "../public/paper.png";

const Thirdpage = () => {
  return (
    <div
  style={{
    background: "#40534C",
    padding: "60px 5%",
    minHeight: "100vh",
  }}
  id="Gallery-section"
>
  {/* Title Section */}
  <div style={{ textAlign: "left", marginBottom: "20px" }}>
    <h2
      className="reem-kufi-normal"
      style={{ fontSize: "55px", color: "white", margin: "0" }}
    >
      Gallery
    </h2>
  </div>

  {/* Content Section */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "20px",
      marginBottom: "2%", marginLeft:"%"
    }}
  >
    <img
        src={paper}
        alt=""
        style={{
          width: "85px",
          height: "100px",
          transform: "rotate(-5deg)", marginLeft: "10%"
        }}
      />
      <img
        src={paper}
        alt=""
        style={{
          width: "85px",
          height: "100px",
          transform: "rotate(-5deg)",
        }}
      />
      <img
        src={paper}
        alt=""
        style={{
          width: "85px",
          height: "100px",
          transform: "rotate(-5deg)", marginLeft: "10%"
        }}
      />


  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "20px",
      backgroundColor: "black",
      borderRadius: "25px",
      padding: "20px", height: "450px"
    }}></div>


  <div
    style={{
      display: "flex",
      marginTop: "-40%",
      
      padding: "20px",
    }}
  >

    
    {/* First Column */}
    <div style={{ marginRight: "3%", marginLeft: "1%"}}><div
      style={{
        backgroundColor: "#697565",
        borderRadius: "25px",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={corporateheadshotpicture1}
        alt=""
        style={{
          width: "270px",
          height: "auto",
          marginBottom: "15px",
          animation: "imageHover 3s infinite",
        }}
      />
      
    </div></div>

    {/* Second Column */}
    <div
      style={{
        backgroundColor: "#697565",
        borderRadius: "25px",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={picture2}
        alt=""
        style={{
          width: "385px",
          height: "auto",
          marginBottom: "15px",
          animation: "imageHover 3s infinite",
        }}
      />
      
    </div>

    {/* Third Column */}
    <div style={{marginLeft:"3%"}}><div
      style={{
        backgroundColor: "#697565",
        borderRadius: "25px",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={picture3}
        alt=""
        style={{
          width: "270px",
          height: "auto",
          marginBottom: "15px",
          animation: "imageHover 3s infinite",
        }}
      />
      
    </div></div>
  </div>
</div>

  );
};

export default Thirdpage;

