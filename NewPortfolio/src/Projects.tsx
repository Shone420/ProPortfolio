import picture2 from "../public/Picture 2 - Defines Me.jpg";
import picture3 from "../public/Picture 3- Aesthetic.jpeg";
import corporateheadshotpicture1 from "../public/Corporate Headshot Picture 1.png";
import Homeicon from "../public/Homeicon.png";
import { Link } from "react-router-dom";
import Isle from "../public/Isle.png"
import Audaciy from "../public/Audacity.png"
import Dice from "../public/Dice.jpg"

const Projects = () => {
  return (
    <div
      style={{
        background: "#1A3636",
        
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <header
        style={{ textAlign: "left", color: "white", marginBottom: "50px", paddingLeft: "100px", paddingTop: "70px", display: "flex" }}
      >
        <div><h1 className="reem-kufi-normal" style={{ fontSize: "50px" }}>
          Projects
        </h1>
        <h2 style={{ fontSize: "35px", fontWeight: "600", marginLeft: "5%" }}>
          Interactive Media Project - Photography
        </h2></div>

      {/* Home Icon */}
      <div style={{marginLeft: "600px", marginTop: "5px"}}>
        <Link to="/ProPortfolio">
          <img
            src={Homeicon}
            alt="Home"
            style={{ width: "50px", height: "auto", cursor: "pointer" }}
          />
        </Link>
      </div>
      </header>

      {/* Grid for the Project Content */}
      <div style={{color:"white", display: "grid", gridTemplateRows: "1fr 1fr 1fr", paddingLeft: "150px", paddingRight: "150px", paddingBottom: "120px"}}>
        {/* Passion Shot Section */}
        
          <div style={{display:"flex"}}>
            <div><h3 style={{ fontSize: "35px", fontWeight: "600" }}>Passion Shot</h3>
              <img
                src={picture2}
                alt="Passion Shot"
                style={{ width: "100%", borderRadius: "10px", marginTop: "23px" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  padding: "10px",
                  width:"500px"
                }}
              >
                <span>ISO 80</span>
                <span>24 mm</span>
                <span>f1.78</span>
                <span>1/1171s</span>
              </div>
            
            
            </div>
              
            <div>
              <h3 style={{marginTop: "50px", marginLeft: "60px"}}>A Journey of Color: How Life's Experiences Have Shaped Me</h3>
              <p  style={{ marginTop: "35px",marginLeft: "60px", fontSize: "16px", textAlign: "justify" }}>
              This photograph truly captures how I see life. Jumping in front of this bold, colorful mural
              with my arms wide open reflects how I embrace everything life throws my way. The vibrant
              colors of the mural symbolize the emotions and phases that have shaped my journey. Each
              color tells a story, whether it's the joy of good times or the lessons learned during moments
              of struggle and reflection. As I've grown, I've moved to different places, and each new
              environment has helped shape who I am today, much like the bold, vibrant colors on the wall.
              Every time I step into a new space or culture, my mindset shifts, and I'm able to see life from a
              fresh perspective. As an only child, I've had plenty of time to explore who I am on my own
              terms, navigating life's path in a way that's deeply personal. Colors, in particular, play a
              significant role in my life. They evoke memories and emotions, tying together my past and present
              memories. Just like this wall with its bright, abstract designs, my life is a collection of colorful
              moments each one representing a different chapter of my journey. The technical side of this
              photograph was just as intentional. I used ISO 80 to keep the image sharp and clear, allowing
              the colors to stand out without any grain. The 24mm focal length was perfect for capturing
              the wide scene, ensuring both the mural and I are in focus. An aperture of f/1.78 provided just
              enough background blur to make the colors pop, while the fast shutter speed of 1/1171s froze
              the action of my jump, capturing the energy and freedom of the moment. Ultimately, this
              image represents more than just a snapshot, it's a reflection of my life's journey, full of color,
              movement, and self-discovery.</p>
            </div>
          </div>
          
        

        {/* Aesthetic Shot Section */}
        <div style={{display: "flex", marginTop: "-3%"}}>
          


          <div>
            <h3 style={{marginTop: "50px"}}>Golden Hour Reflections: A Moment of Calm and Clarity</h3>

            <p style={{ marginTop: "35px", marginRight: "20px", fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
            This moment was captured during the golden hour, when the sun was
            low, casting a warm glow over the scene. The light gently highlights
            my face, creating a sense of inner reflection. The cool tones of my jacket
            contrast beautifully with the warmth of the sunlight, symbolizing the
            balance I seek in life between moments of calm and the energy that
            drives me forward. <br />
            To capture this feeling, I carefully chose my camera settings. I set the ISO
            to 80 to maintain sharpness, ensuring the details stayed crisp and free of
            noise. The 37mm focal length allowed me to focus on myself while
            keeping the background present yet subtle. With the aperture at f/1.78, I
            created a soft blur in the background, drawing attention to my expression,
            the jacket, and the warmth of the sunlight, without losing the overall
            atmosphere of the setting behind me. <br />
            The shutter speed of 1/570s was key in freezing this fleeting moment,
            perfectly capturing the golden light as it bathed the scene. This fast
            shutter speed ensured the image remained sharp as the light slowly
            faded. <br />
            In the end, this photo reflects both the peacefulness and clarity I find in
            the world around me—capturing the harmony between light, shadow,
            and stillness in a single, meaningful moment.</p>
          </div>
          <div>
              <h3 style={{ fontSize: "35px", fontWeight: "600", textAlign: "right" }}>
                Aesthetic Shot
              </h3>
              <img
                src={picture3}
                alt="Aesthetic Shot"
                style={{ width: "80%", borderRadius: "10px", marginLeft: "20%" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  padding: "10px",
                  width: "470px",
                  marginLeft: "20%"
                }}
              >
                <span>ISO 80</span>
                <span>37 mm</span>
                <span>f1.78</span>
                <span>1/570s</span>
              </div>
          </div>

          
        </div>

        {/* Corporate Headshot Section */}
        <div style={{ display:"flex", marginTop: "2%"  }}>
          <div>
            <h3 style={{ fontSize: "35px", fontWeight: "600" }}>
              Corporate Headshot
            </h3>
            
              <img
                src={corporateheadshotpicture1}
                alt="Corporate Headshot"
                style={{ width: "100%", borderRadius: "10px", marginTop: "5%" }}
              />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "20px",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    padding: "10px",
                    width: "500px",
                   
                  }}
                >
                  <span>ISO 125</span>
                  <span>32 mm</span>
                  <span>f1.78</span>
                  <span>1/121s</span>
                </div>
              </div>
            <div >

             <h3 style={{marginTop: "200px", marginLeft: "20%"}}>A Professional Moment Captured</h3>
              <p style={{ marginTop: "35px",marginLeft: "20%", fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>This corporate headshot blends simplicity with professionalism,
              capturing me as relaxed yet confident. The clean, minimalist
              background keeps the focus on the subject, presenting a polished
              appearance.To achieve this image, I selected an ISO of 125,
              ensuring clarity without introducing noise, which preserves the
              natural look and fine details. The 32mm focal length was ideal for
              this shot, providing detail while avoiding distortion, crucial for
              a headshot. I chose an aperture of f/1.78 to create a gentle blur
              in the background, enhancing the subject and maintaining a
              minimalistic tone. Additionally, I used a shutter speed of 1/121s
              to capture the moment sharply, preventing motion blur and clearly
              showcasing features such as glasses and clothing. This headshot
              perfectly reflects an ideal corporate setting, where attention to
              detail in camera settings was essential in achieving the final
              result.</p>
              
            </div>
          
        </div>
        <div className="reem-kufi-normal" style={{ fontSize: "50px", marginTop: "6%" }}> Exploring Algorithms</div>
        <div style={{marginTop: "2%"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div><a href="https://www.behance.net/gallery/222874501/Sound-Design-Using-Audacity"
             target="_blank"
             rel="noopener noreferrer"><img src={Audaciy} alt="" style={{ height: "250px", width: "250px" }}/></a>
             </div>
            <div><a href="https://www.behance.net/gallery/224355911/Game-Design"
             target="_blank"
             rel="noopener noreferrer"><img src={Dice} alt="" style={{ height: "250px", width: "250px", marginLeft: "40px", marginRight: "40px" }}/></a>
             </div>
            <div><a href="https://www.behance.net/gallery/222872783/Algorithmic-Soundscape"
             target="_blank"
             rel="noopener noreferrer"><img src={Isle} alt="" style={{ height: "250px", width: "250px" }}/></a>
             </div>

             

          </div>
          <div style={{ display: "flex", marginTop: "1%"}}>
             <span style={{marginRight: "16%", marginLeft:"22%"}}>Sound Design</span>
             <span>Game Design</span>
             <span style={{ marginLeft: "13%"}}>Algorithmic Soundscape</span>

             </div>
          
          

        </div>
      </div>

      
    </div>
  );
};

export default Projects;
