import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      return alert("Please fill all fields");
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "https://skillsync-ai-backend-pd4t.onrender.com/api/auth/signup",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Signup successful");

      navigate("/find");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Signup failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.card}>

        <div style={styles.logo}>
          S
        </div>

        <h1 style={styles.title}>
          Create Account
        </h1>

        <p style={styles.subtitle}>
          Join SkillSync AI and connect with
          mentors or seekers instantly.
        </p>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={styles.select}
        >

          <option value="seeker">
            🚀 Seeker
          </option>

          <option value="mentor">
            🎓 Mentor
          </option>

        </select>

        <button
          onClick={handleSubmit}
          style={styles.button}
        >
          {
            loading
              ? "Creating Account..."
              : "Create Account"
          }
        </button>

        <div style={styles.footer}>

          Already have an account?

          <span
            style={styles.link}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>

        </div>

      </div>

    </div>

  );

}

const styles = {

  container: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1e293b 0%, #020617 40%, #000 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
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
    opacity: 0.4,
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#7c3aed",
    borderRadius: "50%",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    opacity: 0.35,
  },

  card: {
    width: "100%",
    maxWidth: "430px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "28px",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },

  logo: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background:
      "linear-gradient(to right, #2563eb, #7c3aed)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "25px",
    boxShadow:
      "0 10px 30px rgba(59,130,246,0.4)",
  },

  title: {
    color: "#fff",
    fontSize: "38px",
    fontWeight: "800",
    marginBottom: "12px",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "16px",
    lineHeight: "28px",
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  select: {
    width: "100%",
    padding: "16px",
    marginBottom: "24px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "17px",
    borderRadius: "16px",
    border: "none",
    background:
      "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "17px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow:
      "0 10px 30px rgba(59,130,246,0.4)",
  },

  footer: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: "25px",
    fontSize: "15px",
  },

  link: {
    color: "#60a5fa",
    marginLeft: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

};

export default SignUp;