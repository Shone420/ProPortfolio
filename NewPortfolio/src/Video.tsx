
import video from "../public/Final(2).mp4"
import { Link } from "react-router-dom";
import Homeicon from "../public/Homeicon.png";
import groupselfie from "../public/group selfie.jpeg"
import Assetvid from "../public/Asset Vid.png"
import cinematography from "../public/Cinematography.mp4"
import Acting  from "../public/Co Acting.mp4"
import Shoot from "../public/Shoot time.jpeg"





const Video = () => {
  return (
    <div style={{ background: "#1A3636", paddingTop: "50px", minHeight: "100vh", paddingBottom: "60px" }}>
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={Assetvid} alt="Asset Video" style={{ width: "60px", height: "auto", marginLeft: "60px", marginTop:"20px" }} />
          <h1
            className="reem-kufi-normal"
            style={{ fontSize: "50px", marginLeft: "20px", color: "#ffffff", marginTop:"30px" }}
          >
            From Struggle to Swift
          </h1>
        </div>
        <Link to="/ProPortfolio">
          <img
            src={Homeicon}
            alt="Home"
            style={{ width: "50px", height: "auto", cursor: "pointer",}}
          />
        </Link>
      </header>

      {/* Main Video Section */}
      <section style={{ display: "flex", justifyContent: "center", margin: "50px 6%" }}>
        <video controls width="90%">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Description Section */}
      <section style={{ padding: "0 10%", color: "#ffffff" }}>
        <p
          style={{
            textAlign: "justify",
            fontSize: "20px",
            marginBottom: "30px", lineHeight: "1.8"
          }}
        >
          From Struggle to Swift captures the transformative journey of an individual switching from
          a frustrating rusty bike to the innovative TFI bike, using a transition from black-and-white
          to color to symbolize freedom and joy. The short ad highlights the ease, style, and practicality
          that TFI bikes bring to everyday life.
        </p>
        <br />

        <h2 style={{ fontSize: "23px", fontWeight: "700", marginBottom: "20px" }}>
          Behind the Scenes of "From Struggle to Swift": My Role in Bringing Sound and Story to Life
        </h2>
        <p style={{ textAlign: "justify", fontSize: "20px", marginBottom: "30px", lineHeight: "1.8" }}>
          Creating a short film is always a blend of creativity, teamwork, and adaptability, and "From
          Struggle to Swift" was no different. As a part of Shore Productions, a group of five individuals
          who took on this exciting project, I was entrusted with the responsibility of sound design. However,
          as any passionate storyteller would, I found myself diving into several other aspects of the production.
        </p>
      </section>

      {/* Image Section */}
      <div style={{background: "black", padding: "50px", borderRadius: "50px", marginLeft: "10%", marginRight: "10%", marginBottom: "30px" }}>
      <section
        style={{
          display: "flex", justifyContent: "center"
        }}
      >
        <img
          src={groupselfie}
          alt="Group Selfie"
          style={{ width: "600px", borderRadius: "10px", marginRight: "70px"  }}
        />
        <img src={Shoot} alt="Shoot Scene" style={{ width: "36%", borderRadius: "10px"}} />
      </section></div>

      <div style={{textAlign: "justify",
            fontSize: "20px",
            marginBottom: "30px", color: "white", padding: "0 10%", lineHeight: "1.8"}}>

      <strong>Choosing the Theme and Building the Story</strong> <br />
      Our vision began with a simple yet impactful concept: transitioning from frustration to joy. This was perfectly embodied in our narrative of someone upgrading from an old, rusty bike to the sleek and efficient TFI bike. The decision to use a black-and-white-to-color transition as a visual metaphor was pivotal. It was both a challenge and an opportunity for me, as it shaped the tone of the sound design and voiceover elements I would develop.
      </div>

      <div style={{textAlign: "justify",
            fontSize: "20px",
            marginBottom: "30px", color: "white", padding: "0 10%", lineHeight: "1.8"}}>

      <strong>My Primary Role: Sound Design and Voiceover</strong> <br />
      Sound is the heartbeat of any film, and I took this responsibility seriously:
        <br />
        <br />
       Voiceover: To set the tone for the ad, I voiced the opening sequence, describing the frustration of riding a dilapidated bike. The voiceover transitions into an uplifting commentary when the protagonist experiences the TFI bike, where I highlighted its modern features.
        <br />
        <br />
       Background Music: Music selection was crucial to capturing the intended emotions at different stages of the ad. Together with my collaborators, we curated two distinct pieces:
        <br />
        <br />
       A Charlie Chaplin-inspired score for the beginning, matching the monochrome visuals and echoing the mundane struggle of the protagonist. An energetic, uplifting track during the color transition, amplifying the joy and freedom the TFI bike brings.
      </div>

      <div style={{textAlign: "justify",
            fontSize: "20px",
            marginBottom: "30px", color: "white", padding: "0 10%", lineHeight: "1.8"}}>

      <strong>Dabbling in Cinematography</strong> <br />
      Though sound was my primary role, I couldn't resist exploring cinematography. I took the lead in framing the pivotal transition scene. By positioning the camera centrally and utilizing a dramatic backdrop, I helped emphasize the shift from struggle to ease. Using an iPhone 14 Pro Max and a tripod for stability, we balanced static shots with dynamic, handheld captures to keep the visuals engaging.
      </div>

      {/* Additional Video Sections */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
          padding: "0 10%", marginBottom: "30px"
        }}
      >
        {/* Cinematography Video */}
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "15px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <video controls width="100%">
            <source src={cinematography} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ color: "#ffffff", fontSize: "18px", marginTop: "10px" }}>
            Cinematography work showcasing the transition shot.
          </p>
        </div>

        {/* Acting Video */}
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "15px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <video controls width="100%">
            <source src={Acting} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ color: "#ffffff", fontSize: "18px", marginTop: "10px" }}>
            Acting contribution in the final scene.
          </p>
        </div>
      </section>

      <div style={{textAlign: "justify",
            fontSize: "20px",
            marginBottom: "30px", color: "white", padding: "0 10%", lineHeight: "1.8"}}>

      <strong>Acting and On-Screen Contribution</strong> <br />
      In addition to my work behind the scenes, I also had a small acting role towards the end of the film. In this scene, I interact with the protagonist after she parks her bike, adding a conversational touch to the narrative. This gave me the opportunity to engage with the project from both a technical and creative perspective.
      </div>

      

      {/* Conclusion Section */}
      <section style={{ padding: "0 10%", color: "#ffffff", marginTop: "30px" }}>
        <h2 style={{ fontSize: "23px", fontWeight: "700", marginBottom: "20px" }}>
          Final Thoughts
        </h2>
        <p style={{ textAlign: "justify", fontSize: "20px", marginBottom: "30px" }}>
          "From Struggle to Swift" is more than just a short ad; it's a testament to teamwork and creative
          exploration. From lending my voice to shaping the soundscape and even stepping in front of the
          camera, my journey through this project was filled with learning and growth. Being part of a team
          where each member contributed their unique expertise made this production a memorable and enriching
          experience.
        </p>
      </section>
    </div>
  );
};

export default Video