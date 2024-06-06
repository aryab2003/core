import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaMicrochip,
  FaRobot,
  FaDraftingCompass,
} from "react-icons/fa";
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    flex: "0 0 auto",
  },
  mainContent: {
    flex: "1 1 auto",
    overflowY: "auto",
    width: "100%",
    padding: "20px",
    animation: "fadeIn 2s ease-in-out",
  },
  heading: {
    fontSize: "2.5rem",
    margin: "0 0 20px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    animation: "fadeInUp 1s ease-in-out",
  },
  paragraph: {
    fontSize: "1rem",
    margin: "15px 0",
    lineHeight: "1.6",
    maxWidth: "600px",
    textAlign: "justify",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    animation: "fadeInUp 1.5s ease-in-out",
  },
  link: {
    color: "#00bcd4",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
    underline: "none",
  },
  linkHover: {
    color: "#ff4081",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    background: "#00bcd4",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.3s",
    animation: "fadeInUp 2s ease-in-out",
    marginBottom: "20px",
  },
  buttonHover: {
    background: "#ff4081",
    transform: "scale(1.05)",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
    animation: "fadeInUp 2.5s ease-in-out",
  },
  card: {
    background: "#fff",
    color: "#000",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "300px",
    textAlign: "left",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    border: "5px solid yellow",
    cursor: "pointer",
    animation: "fadeInUp 3s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    fontWeight: 600,
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    animation: "fadeInUp 3.5s ease-in-out",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    maxWidth: "300px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  footer: {
    flex: "0 0 auto",
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    animation: "fadeInUp 4s ease-in-out",
  },
  heart: {
    color: "red",
  },
  icon: {
    color: "#00bcd4",
    fontSize: "1.5rem",
    transition: "color 0.3s",
  },
  iconHover: {
    color: "#ff4081",
  },
  cardImage: {
    width: "100%",
    borderRadius: "10px 10px 0 0",
    marginBottom: "10px",
    height: "200px",
  },
  skillsSection: {
    marginTop: "40px",
    width: "80%",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
    animation: "fadeInUp 4.5s ease-in-out",
  },
  skillsHeader: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  skill: {
    marginBottom: "20px",
  },
  skillName: {
    fontSize: "1.2rem",
    marginBottom: "5px",
  },
  skillLevel: {
    background: "#2c3e50",
    borderRadius: "5px",
    overflow: "hidden",
    height: "20px",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  skillProgress: (width) => ({
    background: "linear-gradient(to right, #00bcd4, #ff4081)",
    width: `${width}%`,
    height: "100%",
    borderRadius: "5px",
    transition: "width 0.3s ease",
  }),
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@media (max-width: 768px)": {
    heading: {
      fontSize: "2rem",
    },
    paragraph: {
      fontSize: "1rem",
      padding: "5px",
    },
    card: {
      width: "100%",
    },
    input: {
      width: "100%",
    },
    skillsHeader: {
      fontSize: "1.5rem",
    },
  },
  "@media (max-width: 480px)": {
    heading: {
      fontSize: "1.5rem",
    },
    paragraph: {
      fontSize: "0.9rem",
      padding: "5px",
    },
    card: {
      width: "100%",
    },
    input: {
      width: "100%",
    },
    skillsHeader: {
      fontSize: "1.2rem",
    },
    "@media (max-width: 768px)": {
      // existing styles...

      footer: {
        marginTop: "20px",
        paddingTop: "20px",
      },
    },
    "@media (max-width: 480px)": {
      // existing styles...

      footer: {
        marginTop: "20px",
        paddingTop: "20px",
      },
    },
  },
};
const headingText = "Short Circuiting Life";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isSendHovered, setIsSendHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    remark: "",
  });
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + headingText.charAt(index));
      index++;
      if (index === headingText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://getform.io/f/pbgxmjla", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", remark: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInUp {
             0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h1 style={styles.heading}>{displayedText}</h1>
          <p style={styles.paragraph}>
            This is Arya Bhattacharyya, an Electrical Engineering student at NIT
            Rourkela, fascinated by the impact of circuits on our lives and the
            amalgamation of machine learning with electronics. Passionate about
            innovation and sustainability, I continue to explore the intricates
            of both these worlds with curiosity and zeal.
          </p>
        </header>

        <div style={styles.cardsContainer}>
          <div
            style={
              hoveredCard === 0
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(0)}
          >
            <img
              src="https://i.ytimg.com/vi/-tw2DppI7aQ/hqdefault.jpg"
              alt="Project 1"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>
              Traffic Light Control Simulation Project
            </h3>
            {clickedCard === 0 && (
              <>
                <p style={styles.cardDescription}>
                  This project deals with the development of the simulation of
                  Traffic Light Signal using 555 Timer and 4017BD IC and writing
                  its Verilog code.
                </p>
                <button style={styles.button}>
                  <a href="https://docs.google.com/presentation/d/15rgrH4r9ymgfPqY3rJEHppC3sqfbwNEO/edit?rtpof=true">
                    {" "}
                    Click To View Project{" "}
                  </a>
                </button>
              </>
            )}
          </div>
          <div
            style={
              hoveredCard === 1
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(1)}
          >
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2021/9/DE/ZB/BO/87903397/product-jpeg.jpg"
              alt="Project 2"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>
              Mosquito Repellant Simulation using Motion Sensors
            </h3>
            {clickedCard === 1 && (
              <>
                <p style={styles.cardDescription}>
                  This project deals with the simulation of Electronic Mosquito
                  Repellents using motion sensors(Op Amp),555 Timer and writing
                  their Verilog Codes.
                </p>
                <button style={styles.button}>
                  <a href="https://docs.google.com/presentation/d/1upMTWaxDFcG8ynAPrkNzkhev2GCRoo0l/edit?usp=drive_web&ouid=117003392489312347698&rtpof=true">
                    Click To View Project
                  </a>
                </button>
              </>
            )}
          </div>
          <div
            style={
              hoveredCard === 2
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(2)}
          >
            <img
              src="https://www.elprocus.com/wp-content/uploads/2016/07/mobile-jamer.png"
              alt="Project 3"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>
              Mobile Signal Detector and Jammer Simulation{" "}
            </h3>
            {clickedCard === 2 && (
              <>
                <p style={styles.cardDescription}>
                  This project deals with the simulation of Mobile Signal
                  Detector using Op Amp and NPN Transistor in Switching Mode and
                  Jammer using Tank Circuit and NPN Transisor in Active Mode and
                  writing their Verilog Codes.
                </p>
                <button style={styles.button}>
                  <a href="https://docs.google.com/presentation/d/1v6hmXRZ3UohRn2IaV6x3RpoafOsB8XHZ/edit#slide=id.p3">
                    Click To View Project
                  </a>
                </button>
              </>
            )}
          </div>
        </div>

        <div style={styles.skillsSection}>
          <h2 style={styles.skillsHeader}>My Skills</h2>
          <div style={styles.skill}>
            <div style={styles.skillName}>
              <FaCode /> Programming: C, C++, Python, Java, Verilog
            </div>
            <div style={styles.skillLevel}>
              <div style={styles.skillProgress(90)}></div>
            </div>
          </div>
          <div style={styles.skill}>
            <div style={styles.skillName}>
              <FaMicrochip /> Simulation of Circuits: Multisim, Proteus, LTSpice
            </div>
            <div style={styles.skillLevel}>
              <div style={styles.skillProgress(85)}></div>
            </div>
          </div>
          <div style={styles.skill}>
            <div style={styles.skillName}>
              <FaRobot /> Machine Learning: TensorFlow, Scikit-learn, Flask
            </div>
            <div style={styles.skillLevel}>
              <div style={styles.skillProgress(85)}></div>
            </div>
          </div>
          <div style={styles.skill}>
            <div style={styles.skillName}>
              <FaDraftingCompass /> Circuit Design
            </div>
            <div style={styles.skillLevel}>
              <div style={styles.skillProgress(50)}></div>
            </div>
          </div>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <textarea
            name="remark"
            value={formData.remark}
            placeholder="Your Remark"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <button
            style={
              isSendHovered
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onMouseEnter={() => setIsSendHovered(true)}
            onMouseLeave={() => setIsSendHovered(false)}
            onClick={() => alert("Thank you for visiting!")}
          >
            Send
          </button>
        </form>
        <div style={styles.footer}>
          Made with <span style={styles.heart}>&#10084;</span> By Arya
          <a
            href="https://github.com/aryab2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={
                hoveredIcon === "github"
                  ? { ...styles.icon, ...styles.iconHover }
                  : styles.icon
              }
              onMouseEnter={() => setHoveredIcon("github")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arya-bhattacharyya-538872261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              style={
                hoveredIcon === "linkedin"
                  ? { ...styles.icon, ...styles.iconHover }
                  : styles.icon
              }
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href="mailto:bhattacharyyaarya165@gmail.com">
            <FaEnvelope
              style={
                hoveredIcon === "email"
                  ? { ...styles.icon, ...styles.iconHover }
                  : styles.icon
              }
              onMouseEnter={() => setHoveredIcon("email")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
