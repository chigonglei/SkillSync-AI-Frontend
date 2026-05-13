import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

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

    content: {
      textAlign: "center",
      maxWidth: "500px",
    },

    title: {
      fontSize: "55px",
      marginBottom: "10px",
      fontWeight: "bold",
    },

    subtitle: {
      color: "#aaa",
      fontSize: "18px",
      lineHeight: "30px",
      marginBottom: "40px",
    },

    button: {
      padding: "18px",
      borderRadius: "12px",
      border: "1px solid #222",
      backgroundColor: "#111",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
    },

  };

  return (

    <div style={styles.container}>

      <div style={styles.content}>

        <h1 style={styles.title}>
          SkillSync AI
        </h1>

        <p style={styles.subtitle}>
          AI-powered teacher and seeker matchmaking
          platform built for personalized learning
          compatibility.
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/find")}
        >
          Start Matching
        </button>

      </div>

    </div>

  );

}

export default Home;