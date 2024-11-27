
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
    <div style={{ background: "#1A3636", paddingTop: "150px", height: "585vh" }}>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <video controls width="1110">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
          <Link to="/ProPortfolio">
            <img
              src={Homeicon}
              alt=""
              style={{
                position: "absolute",
                left: "94%",
                top: "5%",
                width: "50px",
                height: "auto",
              }}
            />
          </Link>
        </div>

        <div style={{ width: '1285px', height: '570px', backgroundColor: 'black', position: 'absolute', top: '164%', left: '8%', borderRadius: '25px'}}></div>
        <div style={{ width: '1285px', height: '500px', backgroundColor: 'black', position: 'absolute', top: '367%', left: '8%', borderRadius: '25px'}}></div>
        <div style={{ width: '1285px', height: '500px', backgroundColor: 'black', position: 'absolute', top: '475%', left: '8%', borderRadius: '25px'}}></div>


        <div style={{ display: "flex", position: 'absolute', left: '24%', top: '371%'}}>
            <video controls width="780">
                <source src={cinematography} type="video/mp4" />
                Your browser does not support the video tag.
            </video>  
        </div>


        <div style={{ display: "flex", position: 'absolute', left: '24%', top: '480%'}}>
            <video controls width="780">
                <source src={Acting} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>


        <div>
          <img
            src={Assetvid}
            alt=""
            style={{
              position: "absolute",
              left: "9%",
              top: "6.1%",
              width: "60px",
              height: "auto",
            }}
          />
        </div>

        <span className="reem-kufi-normal" style={{ position: "absolute", left: "15%", top: "4%", color: "white", fontSize: "50px"}}>From Struggle to Swift</span>
        
        
        <div
          
        >
          
          <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '5%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
          From Struggle to Swift captures the transformative journey of an individual switching from a frustrating rusty bike to the innovative TFI bike,
           using a transition from black-and-white to color to symbolize freedom and joy. The short ad highlights the ease, style, and practicality that
           TFI bikes bring to everyday life.
          </div>




          <div
          style={{
             textAlign: 'justify', marginTop: '5%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
          Behind the Scenes of "From Struggle to Swift": My Role in Bringing Sound and Story to Life
        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        Creating a short film is always a blend of creativity, teamwork, and adaptability, and "From Struggle to Swift" was no different. As a part of Shore Productions, a group of five individuals who took on this exciting project, I was entrusted with the responsibility of sound design. However, as any passionate storyteller would, I found myself diving into several other aspects of the production.
          </div>

          

          <div>
          <img
            src={groupselfie}
            alt=""
            style={{
              position: "absolute",
              left: "11%",
              top: "172%",
              width: "590px",
              height: "auto",
            }}
          />
        </div>

        <div>
          <img
            src={Shoot}
            alt=""
            style={{
              position: "absolute",
              left: "58%",
              top: "168%",
              width: "425px",
              height: "auto",
            }}
          />
        </div>

        

          <div
          style={{
             textAlign: 'justify', marginTop: '43%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
          Choosing the Theme and Building the Story

        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        Our vision began with a simple yet impactful concept: transitioning from frustration to joy. This was perfectly embodied in our narrative of someone upgrading from an old, rusty bike to the sleek and efficient TFI bike. The decision to use a black-and-white-to-color transition as a visual metaphor was pivotal. It was both a challenge and an opportunity for me, as it shaped the tone of the sound design and voiceover elements I would develop.
          </div>


          <div
          style={{
             textAlign: 'justify', marginTop: '3%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
        My Primary Role: Sound Design and Voiceover

        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        Sound is the heartbeat of any film, and I took this responsibility seriously:
        <br />
        <br />
        Voiceover:  To set the tone for the ad, I voiced the opening sequence, describing the frustration of riding a dilapidated bike. The voiceover transitions into an uplifting commentary when the protagonist experiences the TFI bike, where I highlighted its modern features.
        <br />
        <br />
        Background Music:  Music selection was crucial to capturing the intended emotions at different stages of the ad. Together with my collaborators, we curated two distinct pieces:
        <br />
        <br />
        A Charlie Chaplin-inspired score for the beginning, matching the monochrome visuals and echoing the mundane struggle of the protagonist.
        An energetic, uplifting track during the color transition, amplifying the joy and freedom the TFI bike brings.
          </div>


          <div
          style={{
             textAlign: 'justify', marginTop: '4%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
        Dabbling in Cinematography
        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        Though sound was my primary role, I couldn't resist exploring cinematography. I took the lead in framing the pivotal transition scene. By positioning the camera centrally and utilizing a dramatic backdrop, I helped emphasize the shift from struggle to ease. Using an iPhone 14 Pro Max and a tripod for stability, we balanced static shots with dynamic, handheld captures to keep the visuals engaging.
          </div>


          <div
          style={{
             textAlign: 'justify', marginTop: '45%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
        Acting and On-Screen Contribution
        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        In addition to my work behind the scenes, I also had a small acting role towards the end of the film. In this scene, I interact with the protagonist after she parks her bike, adding a conversational touch to the narrative. This gave me the opportunity to engage with the project from both a technical and creative perspective.
          </div>

          

        <div
          style={{
             textAlign: 'justify', marginTop: '40%', marginLeft: '8%', marginRight: '7%', fontSize: "23px", color: "#ffffff",
            fontWeight: "700",
          }}
        >
        Final Thoughts
        </div>

        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'justify', marginTop: '1%', marginLeft: '8%', marginRight: '8%', fontSize: "20px", color: "#ffffff", }}>
        "From Struggle to Swift" is more than just a short ad; it’s a testament to teamwork and creative exploration. From lending my voice to shaping the soundscape and even stepping in front of the camera, my journey through this project was filled with learning and growth. Being part of a team where each member contributed their unique expertise made this production a memorable and enriching experience.
          </div>



        </div>
    </div>
  )
}

export default Video