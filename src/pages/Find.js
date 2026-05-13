import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FindMatch() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [userRole, setUserRole] =
    useState("seeker");

  const [formData, setFormData] = useState({

    name: "",
    skill: "",
    availability: "",
    preferred_mode: "Online",
    price: "",
    location: "",

  });

  useEffect(() => {

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (user?.role) {
      setUserRole(user.role);
    }

  }, []);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(

        "https://sanjoykh27.app.n8n.cloud/webhook/find-match",

        {

          ...formData,

          role: userRole,

        }

      );

      navigate("/recommendations", {

        state: {

          matches:
            response.data.matches || [],

        },

      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <form
        style={styles.form}
        onSubmit={handleSubmit}
      >

        <div style={styles.topSection}>

          <div style={styles.badge}>
            ⚡ AI Matchmaking Engine
          </div>

          <h1 style={styles.title}>
            {
              userRole === "mentor"

              ? "Find Your Students"

              : "Find Your Perfect Mentor"
            }
          </h1>

          <p style={styles.subtitle}>

            {
              userRole === "mentor"

              ? "AI analyzes seekers and recommends students matching your expertise and availability."

              : "Discover highly compatible mentors using AI-powered skill and compatibility analysis."
            }

          </p>

        </div>

        <div style={styles.grid}>

          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="text"
            name="skill"
            placeholder={
              userRole === "mentor"

              ? "Skill You Teach"

              : "Skill You Want To Learn"
            }
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="text"
            name="availability"
            placeholder="Availability"
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="preferred_mode"
            onChange={handleChange}
          >

            <option>
              Online
            </option>

            <option>
              Offline
            </option>

            <option>
              Hybrid
            </option>

          </select>

          <input
            style={styles.input}
            type="number"
            name="price"
            placeholder={
              userRole === "mentor"

              ? "Teaching Fee"

              : "Budget"
            }
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

        </div>

        <div style={styles.aiCard}>

          <div style={styles.aiTop}>
            <div style={styles.aiDot}></div>

            <span style={styles.aiText}>
              AI Compatibility Detection Active
            </span>
          </div>

          <div style={styles.aiDesc}>
            SkillSync AI analyzes skills,
            pricing, preferred learning mode,
            and availability to recommend the
            best matches instantly.
          </div>

        </div>

        <button style={styles.button}>

          {
            loading

            ? "AI Finding Best Matches..."

            : userRole === "mentor"

            ? "Find Students →"

            : "Find Mentors →"
          }

        </button>

      </form>

    </div>

  );

}

const styles = {

  container: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1e293b 0%, #020617 40%, #000 100%)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  glow1: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#2563eb",
    borderRadius: "50%",
    filter: "blur(140px)",
    top: "-100px",
    left: "-100px",
    opacity: 0.35,
  },

  glow2: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "#7c3aed",
    borderRadius: "50%",
    filter: "blur(130px)",
    bottom: "-120px",
    right: "-100px",
    opacity: 0.3,
  },

  form: {
    width: "100%",
    maxWidth: "850px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    position: "relative",
    zIndex: 2,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    padding: "45px",
    borderRadius: "30px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },

  topSection: {
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.3)",
    color: "#93c5fd",
    fontSize: "14px",
    marginBottom: "20px",
    fontWeight: "600",
  },

  title: {
    fontSize: "52px",
    lineHeight: "60px",
    fontWeight: "800",
    marginBottom: "18px",
    background:
      "linear-gradient(to right, #ffffff, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "17px",
    lineHeight: "30px",
    maxWidth: "650px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(240px,1fr))",
    gap: "18px",
  },

  input: {
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  aiCard: {
    background:
      "linear-gradient(to right, rgba(37,99,235,0.18), rgba(124,58,237,0.18))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "22px",
  },

  aiTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },

  aiDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 14px #22c55e",
  },

  aiText: {
    fontWeight: "700",
    fontSize: "16px",
  },

  aiDesc: {
    color: "#cbd5e1",
    lineHeight: "28px",
    fontSize: "15px",
  },

  button: {
    padding: "18px",
    borderRadius: "18px",
    border: "none",
    background:
      "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow:
      "0 12px 30px rgba(59,130,246,0.35)",
    transition: "0.3s",
  },

};

export default FindMatch;