import { useLocation, Link } from "react-router-dom";

function Recommendations() {

  const location = useLocation();

  const matches = location.state?.matches || [];

  const styles = {

    container: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top, #1e293b 0%, #020617 45%, #000 100%)",
      color: "#fff",
      padding: "40px 25px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
    },

    glow1: {
      position: "absolute",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      background: "#2563eb",
      filter: "blur(140px)",
      top: "-100px",
      left: "-100px",
      opacity: 0.35,
    },

    glow2: {
      position: "absolute",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "#7c3aed",
      filter: "blur(140px)",
      bottom: "-120px",
      right: "-120px",
      opacity: 0.3,
    },

    header: {
      textAlign: "center",
      marginBottom: "60px",
      position: "relative",
      zIndex: 2,
    },

    badge: {
      display: "inline-block",
      padding: "10px 18px",
      borderRadius: "999px",
      background: "rgba(59,130,246,0.12)",
      border: "1px solid rgba(59,130,246,0.3)",
      color: "#93c5fd",
      fontSize: "14px",
      marginBottom: "22px",
      fontWeight: "600",
    },

    title: {
      fontSize: "58px",
      fontWeight: "800",
      marginBottom: "18px",
      background:
        "linear-gradient(to right, #fff, #60a5fa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      color: "#94a3b8",
      fontSize: "18px",
      lineHeight: "32px",
      maxWidth: "750px",
      margin: "0 auto",
    },

    grid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(380px, 420px))",
      justifyContent: "center",
      gap: "28px",
      position: "relative",
      zIndex: 2,
    },

    card: {
      width: "100%",
      maxWidth: "420px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(18px)",
      borderRadius: "30px",
      padding: "28px",
      position: "relative",
      overflow: "hidden",
      transition: "0.4s",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    },

    topGlow: {
      position: "absolute",
      width: "180px",
      height: "180px",
      background:
        "linear-gradient(to right, #2563eb, #7c3aed)",
      borderRadius: "50%",
      filter: "blur(80px)",
      top: "-90px",
      right: "-90px",
      opacity: 0.25,
    },

    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "24px",
    },

    userSection: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
    },

    avatar: {
      width: "72px",
      height: "72px",
      borderRadius: "24px",
      background:
        "linear-gradient(to right, #2563eb, #7c3aed)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      fontWeight: "800",
      color: "#fff",
      boxShadow:
        "0 12px 30px rgba(59,130,246,0.4)",
    },

    name: {
      fontSize: "28px",
      fontWeight: "800",
      marginBottom: "6px",
    },

    role: {
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "700",
    },

    scoreBox: {
      minWidth: "85px",
      height: "85px",
      borderRadius: "24px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },

    scoreText: {
      fontSize: "26px",
      fontWeight: "800",
      color: "#22c55e",
    },

    scoreLabel: {
      color: "#94a3b8",
      fontSize: "12px",
    },

    badgeContainer: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "22px",
    },

    skillBadge: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "10px 16px",
      borderRadius: "999px",
      fontSize: "13px",
      color: "#cbd5e1",
    },

    summary: {
      color: "#d1d5db",
      lineHeight: "30px",
      fontSize: "15px",
      marginBottom: "25px",
    },

    infoBox: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "20px",
      padding: "20px",
      marginBottom: "24px",
    },

    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "14px",
      color: "#cbd5e1",
      fontSize: "15px",
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#60a5fa",
    },

    aiBox: {
      background:
        "linear-gradient(to right, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "22px",
      padding: "20px",
      marginBottom: "26px",
    },

    reason: {
      color: "#dbeafe",
      marginBottom: "12px",
      lineHeight: "26px",
      fontSize: "14px",
    },

    button: {
      width: "100%",
      padding: "18px",
      borderRadius: "18px",
      border: "none",
      background:
        "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "17px",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow:
        "0 12px 30px rgba(59,130,246,0.35)",
    },

    empty: {
      textAlign: "center",
      marginTop: "140px",
      color: "#94a3b8",
      position: "relative",
      zIndex: 2,
    },

  };

  return (

    <div style={styles.container}>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.header}>

        <div style={styles.badge}>
          🤖 AI Smart Recommendations
        </div>

        <h1 style={styles.title}>
          Your Perfect Matches
        </h1>

        <p style={styles.subtitle}>
          SkillSync AI analyzed compatibility,
          skills, pricing, learning styles,
          and availability to generate your
          best matches instantly.
        </p>

      </div>

      {

        matches.length === 0

        ? (

          <div style={styles.empty}>

            <h2>
              No AI Matches Found
            </h2>

            <p style={{ marginTop: "14px" }}>
              Try adjusting your preferences
              and search again.
            </p>

          </div>

        )

        : (

          <div style={styles.grid}>

            {

              matches.map((match, index) => (

                <div
                  key={index}
                  style={styles.card}

                  onMouseEnter={(e) => {

                    e.currentTarget.style.transform =
                      "translateY(-8px)";

                    e.currentTarget.style.border =
                      "1px solid rgba(96,165,250,0.5)";

                  }}

                  onMouseLeave={(e) => {

                    e.currentTarget.style.transform =
                      "translateY(0px)";

                    e.currentTarget.style.border =
                      "1px solid rgba(255,255,255,0.08)";

                  }}
                >

                  <div style={styles.topGlow}></div>

                  <div style={styles.topRow}>

                    <div style={styles.userSection}>

                      <div style={styles.avatar}>

                        {
                          match.name?.charAt(0)
                        }

                      </div>

                      <div>

                        <div style={styles.name}>
                          {match.name}
                        </div>

                        <div
                          style={{
                            ...styles.role,

                            color:
                              match.role === "mentor"
                              || match.role === "teacher"

                              ? "#22c55e"

                              : "#60a5fa",
                          }}
                        >

                          {

                            match.role === "mentor"
                            || match.role === "teacher"

                            ? "Mentor / Teacher"

                            : "Skill Seeker"

                          }

                        </div>

                      </div>

                    </div>

                    <div style={styles.scoreBox}>

                      <div style={styles.scoreText}>
                        {
                          match.score || 90
                        }%
                      </div>

                      <div style={styles.scoreLabel}>
                        Match
                      </div>

                    </div>

                  </div>

                  <div style={styles.badgeContainer}>

                    <div style={styles.skillBadge}>
                      {match.skill || "General"}
                    </div>

                    <div style={styles.skillBadge}>
                      {
                        match.preferred_mode
                        || "Online"
                      }
                    </div>

                    <div style={styles.skillBadge}>
                      {
                        match.availability
                        || "Flexible"
                      }
                    </div>

                  </div>

                  <div style={styles.summary}>
                    {
                      match.summary
                      || "AI found this profile highly compatible with your preferences and learning goals."
                    }
                  </div>

                  <div style={styles.infoBox}>

                    <div style={styles.infoRow}>

                      <span>
                        Skill
                      </span>

                      <strong>
                        {
                          match.skill
                          || "General"
                        }
                      </strong>

                    </div>

                    <div style={styles.infoRow}>

                      <span>

                        {

                          match.role === "mentor"
                          || match.role === "teacher"

                          ? "Teaching Fee"

                          : "Budget"

                        }

                      </span>

                      <strong>

                        ₹{
                          match.price
                          || "Flexible"
                        }

                      </strong>

                    </div>

                    <div
                      style={{
                        ...styles.infoRow,
                        marginBottom: 0,
                      }}
                    >

                      <span>
                        Location
                      </span>

                      <strong>
                        {
                          match.location
                          || "Remote"
                        }
                      </strong>

                    </div>

                  </div>

                  <div style={styles.sectionTitle}>
                    AI Compatibility Insights
                  </div>

                  <div style={styles.aiBox}>

                    {

                      match.reasons?.length > 0

                      ? (

                        match.reasons.map(
                          (reason, i) => (

                            <div
                              key={i}
                              style={styles.reason}
                            >

                              ✨ {reason}

                            </div>

                          )
                        )

                      )

                      : (

                        <div style={styles.reason}>

                          ✨ High skill compatibility

                          <br /><br />

                          ✨ Matching availability

                          <br /><br />

                          ✨ Suitable pricing and
                          preferred learning mode

                        </div>

                      )

                    }

                  </div>

                  <Link
                    to="/chat"
                    state={{
                      user: match,
                    }}
                    style={{
                      textDecoration: "none",
                    }}
                  >

                    <button style={styles.button}>

                      {

                        match.role === "mentor"
                        || match.role === "teacher"

                        ? "Start Learning →"

                        : "Connect Now →"

                      }

                    </button>

                  </Link>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default Recommendations;