import picture2 from "../public/Picture 2 - Defines Me.jpg";
import picture3 from "../public/Picture 3- Aesthetic.jpeg";
import corporateheadshotpicture1 from "../public/Corporate Headshot Picture 1.png";
import Homeicon from "../public/Homeicon.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Thirdpage = () => {
  // useEffect(() => {
  //   const section = document.getElementById("third-hero");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);
  return (
    <div style={{ background: "#1A3636", padding: "70px", height: "400vh" }}>
      <div
        style={{
          color: "white",
          fontSize: "50px",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <span className="reem-kufi-normal">Projects</span>
        <br />
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
            fontWeight: "600",
          }}
        >
          Interactive Media Project- Photography
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          A Journey of Color: How Life's Experiences Have Shaped Me
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "right",
            color: "#FFFFFF",
            fontSize: "16px",
            padding: "30px",
          }}
        >
          <div style={{ position: "absolute", left: "50%", top: "55%" }}>
            This photograph truly captures how I see life. Jumping in front of
            this bold, colorful mural <br />
            with my arms wide open reflects how I embrace everything life throws
            my way. The vibrant <br />
            colors of the mural symbolize the emotions and phases that have
            shaped my journey. Each <br />
            color tells a story—whether it's the joy of good times or the
            lessons learned during moments
            <br /> of struggle and reflection. As I've grown, I've moved to
            different places, and each new <br />
            environment has helped shape who I am today, much like the bold,
            vibrant colors on the wall.
            <br />
            Every time I step into a new space or culture, my mindset shifts,
            and I'm able to see life from a <br />
            fresh perspective. As an only child, I've had plenty of time to
            explore who I am on my own <br />
            terms, navigating life's path in a way that's deeply personal.
            Colors, in particular, play a<br /> significant role in my life.
            They evoke memories and emotions, tying together my past and present
            <br />
            memories Just like this wall with its bright, abstract designs, my
            life is a collection of colorful
            <br />
            moments—each one representing a different chapter of my journey. The
            technical side of this <br />
            photograph was just as intentional. I used ISO 80 to keep the image
            sharp and clear, allowing
            <br /> the colors to stand out without any grain. The 24mm focal
            length was perfect for capturing <br />
            the wide scene, ensuring both the mural and I are in focus. An
            aperture of f/1.78 provided just
            <br />
            enough background blur to make the colors pop, while the fast
            shutter speed of 1/1171s froze <br />
            the action of my jump, capturing the energy and freedom of the
            moment. Ultimately, this <br />
            image represents more than just a snapshot—it's a reflection of my
            life's journey, full of color, <br />
            movement, and self-discovery.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "20px",

            position: "absolute",
            top: "150%",
            left: "10%",
          }}
        >
          Golden Hour Reflections: A Moment of Calm and Clarity
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "right",
            color: "#ffffff",
            fontSize: "17px",
            padding: "300px",
          }}
        >
          <div style={{ position: "absolute", left: "10%", top: "155%" }}>
            This moment was captured during the golden hour, when the sun was
            <br />
            low, casting a warm glow over the scene. The light gently highlights
            <br />
            my face, creating a sense of inner reflection. The cool tones of my
            jacket
            <br />
            contrast beautifully with the warmth of the sunlight, symbolizing
            the
            <br />
            balance I seek in life between moments of calm and the energy that
            <br />
            drives me forward.
            <br />
            To capture this feeling, I carefully chose my camera settings. I set
            the ISO
            <br />
            to 80 to maintain sharpness, ensuring the details stayed crisp and
            free of
            <br />
            noise. The 37mm focal length allowed me to focus on myself while
            <br />
            keeping the background present yet subtle. With the aperture at
            f/1.78, I
            <br />
            created a soft blur in the background, drawing attention to my
            expression,
            <br />
            the jacket, and the warmth of the sunlight, without losing the
            overall
            <br />
            atmosphere of the setting behind me.
            <br />
            The shutter speed of 1/570s was key in freezing this fleeting
            moment,
            <br />
            perfectly capturing the golden light as it bathed the scene. This
            fast
            <br />
            shutter speed ensured the image remained sharp as the light slowly
            <br />
            faded.
            <br />
            In the end, this photo reflects both the peacefulness and clarity I
            find in
            <br />
            the world around me—capturing the harmony between light, shadow,
            <br />
            and stillness in a single, meaningful moment.
          </div>

          <div>
            <img
              src={picture2}
              alt=""
              style={{
                position: "absolute",
                left: "10%",
                top: "50%",
                width: "550px",
                height: "auto",
              }}
            />
          </div>
          <div>
            <img
              src={picture3}
              alt=""
              style={{
                position: "absolute",
                right: "10%",
                top: "150%",
                width: "550px",
                height: "auto",
              }}
            />
          </div>

          <div>
            <img
              src={corporateheadshotpicture1}
              alt=""
              style={{
                position: "absolute",
                left: "10%",
                top: "270%",
                width: "550px",
                height: "auto",
              }}
            />
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
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "20px",

            position: "absolute",
            top: "280%",
            left: "50%",
          }}
        >
          A Professional Moment Captured
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "right",
            color: "#FFFFFF",
            fontSize: "16px",
            padding: "30px",
          }}
        >
          <div style={{ position: "absolute", left: "50%", top: "285%" }}>
            This corporate headshot blends simplicity with professionalism,
            capturing me as relaxed yet
            <br />
            confident. The clean, minimalist background keeps the focus on the
            subject, presenting a
            <br />
            polished appearance.To achieve this image, I selected an ISO of 125,
            ensuring clarity without
            <br />
            introducing noise, which preserves the natural look and fine
            details. The 32mm focal length
            <br />
            was ideal for this shot, providing detail while avoiding distortion,
            crucial for a headshot.
            <br />
            I chose an aperture of f/1.78 to create a gentle blur in the
            background, enhancing the subject
            <br />
            and maintaining a minimalistic tone. Additionally, I used a shutter
            speed of 1/121s to capture
            <br />
            the moment sharply, preventing motion blur and clearly showcasing
            features such as glasses
            <br />
            and clothing. This headshot perfectly reflects an ideal corporate
            setting, where attention
            <br />
            to detail in camera settings was essential in achieving the final
            result.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
