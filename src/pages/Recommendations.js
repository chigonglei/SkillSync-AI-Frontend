import { useLocation, Link } from "react-router-dom";

function Recommendations() {

  const location = useLocation();

  const matches = location.state?.matches || [];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      padding: "20px",
    },

    title: {
      fontSize: "42px",
      textAlign: "center",
      marginBottom: "30px",
    },

    card: {
      backgroundColor: "#111",
      border: "1px solid #222",
      borderRadius: "16px",
      padding: "22px",
      marginBottom: "20px",
    },

    name: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    summary: {
      color: "#ccc",
      marginBottom: "20px",
      lineHeight: "28px",
    },

    sectionTitle: {
      color: "#00ff99",
      marginBottom: "12px",
      fontWeight: "bold",
      fontSize: "18px",
    },

    reason: {
      marginBottom: "10px",
      color: "#ddd",
      lineHeight: "26px",
    },

    button: {
      marginTop: "20px",
      padding: "12px 20px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
    },

    empty: {
      textAlign: "center",
      marginTop: "100px",
      color: "#888",
    }
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        AI Recommendations
      </h1>

      {matches.length === 0 ? (

        <div style={styles.empty}>
          No matches found
        </div>

      ) : (

        matches.map((match, index) => (

          <div key={index} style={styles.card}>

            <div style={styles.name}>
              {match.name}
            </div>

            <div
              style={{
                color:
                  match.score >= 80
                    ? "#00ff99"
                    : match.score >= 50
                    ? "#ffaa00"
                    : "#ff5555",

                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Compatibility Score: {match.score}%
            </div>

            <div style={styles.summary}>
              {match.summary}
            </div>

            <div style={styles.sectionTitle}>
              AI Compatibility Analysis
            </div>

            {match.reasons?.map((reason, i) => (
              <div key={i} style={styles.reason}>
                • {reason}
              </div>
            ))}

            <Link to="/chat">
              <button style={styles.button}>
                Start Chat
              </button>
            </Link>

          </div>

        ))

      )}

    </div>
  );
}

export default Recommendations;