
import picture2 from "../public/Picture 2 - Defines Me.jpg";
import picture3 from "../public/Picture 3- Aesthetic.jpeg";
import corporateheadshotpicture1 from "../public/Corporate Headshot Picture 1.png";
import paper from "../public/paper.png";

const Thirdpage = () => {
  return (
    <div
      style={{ background: "#40534C", padding: "350px", height: "50vh" }}
      id="Gallery-section"
    >
      <div>
        <div
          style={{
            width: "1340px",
            height: "460px",
            backgroundColor: "black",
            position: "absolute",
            top: "250%",
            left: "5%",
            borderRadius: "25px",
          }}
        ></div>

        <div
          style={{
            width: "350px",
            height: "440px",
            backgroundColor: "#697565",
            position: "absolute",
            top: "243%",
            left: "7.5%",
            borderRadius: "25px",
          }}
        ></div>

        <div
          style={{
            width: "450px",
            height: "440px",
            backgroundColor: "#697565",
            position: "absolute",
            top: "243%",
            left: "34%",
            borderRadius: "25px",
          }}
        ></div>

        <div
          style={{
            width: "350px",
            height: "440px",
            backgroundColor: "#697565",
            position: "absolute",
            top: "243%",
            left: "67.5%",
            borderRadius: "25px",
          }}
        ></div>

        <span
          className="reem-kufi-normal"
          style={{
            position: "absolute",
            top: "226%",
            left: "5%",
            fontSize: "55px",
            color: "white",
          }}
        >
          Gallery
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
            animation: "imageHover 3s infinite",
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
            animation: "imageHover 3s infinite",
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
            animation: "imageHover 3s infinite",
          }}
        />
        <img
          src={paper}
          alt=""
          style={{
            position: "absolute",
            left: "10%",
            top: "238%",
            width: "85px",
            height: "100px",
            transform: "rotate(-5deg)",
          }}
        />
        <img
          src={paper}
          alt=""
          style={{
            position: "absolute",
            left: "36%",
            top: "238%",
            width: "85px",
            height: "100px",
            transform: "rotate(-5deg)",
          }}
        />
        <img
          src={paper}
          alt=""
          style={{
            position: "absolute",
            left: "70%",
            top: "238%",
            width: "85px",
            height: "100px",
            transform: "rotate(-5deg)",
          }}
        />
      </div>
    </div>
  );
};

export default Thirdpage;

