import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FindMatch() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "seeker",
    skill: "",
    availability: "",
    preferred_mode: "Online",
    price: "",
    location: "",
  });

  const styles = {

    container: {
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },

    form: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },

    title: {
      fontSize: "50px",
      textAlign: "center",
      fontWeight: "bold",
    },

    subtitle: {
      textAlign: "center",
      color: "#888",
      marginBottom: "20px",
      lineHeight: "28px",
    },

    input: {
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #333",
      backgroundColor: "#111",
      color: "#fff",
      fontSize: "16px",
    },

    button: {
      padding: "15px",
      borderRadius: "12px",
      border: "none",
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
    },

    loadingBox: {
      textAlign: "center",
      color: "#00ff99",
      marginTop: "10px",
      fontSize: "15px",
    }

  };

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
        }
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      navigate("/recommendations", {
  state: {
    matches: response.data.matches || [],
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

      <form
        style={styles.form}
        onSubmit={handleSubmit}
      >

        <h1 style={styles.title}>
          SkillSync AI
        </h1>

        <p style={styles.subtitle}>
          AI-powered teacher and seeker matchmaking
          based on compatibility, timing, location,
          and learning preferences.
        </p>

        <select
          style={styles.input}
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="seeker">
            Seeker
          </option>

          <option value="teacher">
            Teacher
          </option>
        </select>

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
            formData.role === "teacher"
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
        </select>

        <input
          style={styles.input}
          type="number"
          name="price"
          placeholder={
            formData.role === "teacher"
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

        <button style={styles.button}>

          {
            loading
            ? "AI Finding Matches..."
            : formData.role === "teacher"
            ? "Find Seekers"
            : "Find Teachers"
          }

        </button>

        {
          loading && (

            <div style={styles.loadingBox}>
              AI analyzing compatibility...
            </div>

          )
        }

      </form>

    </div>

  );

}

export default FindMatch;