import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const styles = {

    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(to bottom, #020617 0%, #000814 40%, #000000 100%)",
      color: "#fff",
      overflow: "hidden",
      position: "relative",
      padding: "30px 20px 120px",
      fontFamily: "Inter, Arial, sans-serif",
    },

    glow1: {
      position: "absolute",
      width: "420px",
      height: "420px",
      background: "#2563eb",
      borderRadius: "50%",
      filter: "blur(160px)",
      top: "-120px",
      left: "-120px",
      opacity: 0.25,
    },

    glow2: {
      position: "absolute",
      width: "350px",
      height: "350px",
      background: "#7c3aed",
      borderRadius: "50%",
      filter: "blur(150px)",
      bottom: "-120px",
      right: "-120px",
      opacity: 0.22,
    },

    heroWrapper: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    heroSection: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(380px,1fr))",
      gap: "70px",
      alignItems: "center",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "40px",
      padding: "70px",
      backdropFilter: "blur(20px)",
      boxShadow:
        "0 30px 100px rgba(0,0,0,0.45)",
    },

    left: {
      maxWidth: "620px",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 18px",
      borderRadius: "999px",
      background:
        "rgba(37,99,235,0.15)",
      border:
        "1px solid rgba(96,165,250,0.35)",
      color: "#93c5fd",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "28px",
    },

    title: {
      fontSize: "86px",
      lineHeight: "92px",
      fontWeight: "900",
      marginBottom: "24px",
      letterSpacing: "-3px",
      background:
        "linear-gradient(to right, #ffffff 10%, #60a5fa 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      color: "#cbd5e1",
      fontSize: "20px",
      lineHeight: "38px",
      marginBottom: "40px",
      maxWidth: "560px",
    },

    buttonContainer: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
      marginBottom: "45px",
    },

    primaryButton: {
      padding: "18px 36px",
      borderRadius: "18px",
      border: "none",
      background:
        "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "#fff",
      fontSize: "17px",
      cursor: "pointer",
      fontWeight: "700",
      boxShadow:
        "0 12px 35px rgba(59,130,246,0.4)",
      transition: "0.3s",
    },

    secondaryButton: {
      padding: "18px 34px",
      borderRadius: "18px",
      border:
        "1px solid rgba(255,255,255,0.12)",
      background:
        "rgba(255,255,255,0.04)",
      color: "#fff",
      fontSize: "17px",
      cursor: "pointer",
      fontWeight: "700",
      backdropFilter: "blur(12px)",
    },

    statsContainer: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
    },

    statBox: {
      minWidth: "150px",
      background:
        "rgba(255,255,255,0.04)",
      border:
        "1px solid rgba(255,255,255,0.08)",
      borderRadius: "22px",
      padding: "22px",
      backdropFilter: "blur(14px)",
    },

    statNumber: {
      fontSize: "34px",
      fontWeight: "900",
      marginBottom: "6px",
    },

    statText: {
      color: "#94a3b8",
      fontSize: "14px",
    },

    right: {
      display: "flex",
      justifyContent: "center",
    },

    dashboard: {
      width: "100%",
      maxWidth: "460px",
      background:
        "rgba(255,255,255,0.05)",
      border:
        "1px solid rgba(255,255,255,0.08)",
      borderRadius: "34px",
      padding: "26px",
      backdropFilter: "blur(20px)",
      boxShadow:
        "0 30px 90px rgba(0,0,0,0.55)",
    },

    dashboardTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },

    dashboardLogo: {
      width: "52px",
      height: "52px",
      borderRadius: "16px",
      background:
        "linear-gradient(to right, #2563eb, #8b5cf6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      fontSize: "20px",
    },

    active: {
      color: "#22c55e",
      fontWeight: "700",
      fontSize: "14px",
    },

    featureCard: {
      background:
        "linear-gradient(to right, #312e81, #6d28d9)",
      borderRadius: "24px",
      padding: "24px",
      marginBottom: "18px",
    },

    featureTitle: {
      fontSize: "24px",
      fontWeight: "800",
      marginBottom: "14px",
    },

    featureText: {
      color: "#dbeafe",
      lineHeight: "30px",
      fontSize: "15px",
    },

    miniGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
    },

    miniCard: {
      background:
        "rgba(255,255,255,0.04)",
      border:
        "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: "18px",
      transition: "0.3s",
      cursor: "pointer",
    },

    miniTitle: {
      color: "#94a3b8",
      fontSize: "14px",
      marginBottom: "10px",
    },

    miniValue: {
      fontSize: "24px",
      fontWeight: "800",
    },

    problemSection: {
      marginTop: "140px",
      position: "relative",
      zIndex: 2,
    },

    sectionHeader: {
      maxWidth: "1280px",
      margin: "0 auto 60px",
    },

    problemBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 18px",
      borderRadius: "999px",
      background:
        "rgba(37,99,235,0.15)",
      border:
        "1px solid rgba(96,165,250,0.35)",
      color: "#93c5fd",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "26px",
    },

    problemTitle: {
      fontSize: "64px",
      lineHeight: "78px",
      fontWeight: "900",
      letterSpacing: "-2px",
      marginBottom: "20px",
      background:
        "linear-gradient(to right, #fff, #60a5fa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    problemSubtitle: {
      color: "#94a3b8",
      fontSize: "20px",
      lineHeight: "36px",
      maxWidth: "760px",
    },

    problemGrid: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(260px,1fr))",
      gap: "28px",
    },

    problemCard: {
      background:
        "rgba(255,255,255,0.04)",
      border:
        "1px solid rgba(255,255,255,0.08)",
      borderRadius: "30px",
      padding: "32px",
      transition: "0.35s",
      backdropFilter: "blur(18px)",
      boxShadow:
        "0 20px 60px rgba(0,0,0,0.35)",
      cursor: "pointer",
    },

    problemIcon: {
      width: "68px",
      height: "68px",
      borderRadius: "22px",
      background:
        "linear-gradient(to right, #2563eb, #7c3aed)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "30px",
      marginBottom: "26px",
      boxShadow:
        "0 10px 30px rgba(59,130,246,0.3)",
    },

    problemText: {
      color: "#cbd5e1",
      lineHeight: "34px",
      fontSize: "16px",
    },

  };

  return (

    <div style={styles.container}>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.heroWrapper}>

        <div style={styles.heroSection}>

          <div style={styles.left}>

            <div style={styles.badge}>
              🚀 AI Powered Learning Matchmaking
            </div>

            <h1 style={styles.title}>
              SkillSync AI
            </h1>

            <p style={styles.subtitle}>
              Connect seekers with the
              perfect mentors using
              intelligent compatibility
              analysis, realtime
              collaboration, and AI-driven
              recommendations.
            </p>

            <div style={styles.buttonContainer}>

              <button
                style={styles.primaryButton}
                onClick={() => navigate("/signup")}
              >
                Get Started →
              </button>

              <button
                style={styles.secondaryButton}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>

            </div>

            <div style={styles.statsContainer}>

              <div style={styles.statBox}>

                <div style={styles.statNumber}>
                  10K+
                </div>

                <div style={styles.statText}>
                  Active Seekers
                </div>

              </div>

              <div style={styles.statBox}>

                <div style={styles.statNumber}>
                  2.5K+
                </div>

                <div style={styles.statText}>
                  Expert Mentors
                </div>

              </div>

              <div style={styles.statBox}>

                <div style={styles.statNumber}>
                  98%
                </div>

                <div style={styles.statText}>
                  Match Accuracy
                </div>

              </div>

            </div>

          </div>

          <div style={styles.right}>

            <div style={styles.dashboard}>

              <div style={styles.dashboardTop}>

                <div style={styles.dashboardLogo}>
                  S
                </div>

                <div style={styles.active}>
                  ● AI Active
                </div>

              </div>

              <div style={styles.featureCard}>

                <div style={styles.featureTitle}>
                  Why SkillSync AI?
                </div>

                <div style={styles.featureText}>
                  Students, parents,
                  learners, and skilled
                  individuals often
                  struggle to find
                  compatible matches
                  based on timing,
                  budget, duration,
                  and convenience.
                </div>

              </div>

              <div style={styles.miniGrid}>

                <div
                  style={styles.miniCard}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                  }}
                >

                  <div style={styles.miniTitle}>
                    Flexible Learning
                  </div>

                  <div style={styles.miniValue}>
                    ⏳
                  </div>

                </div>

                <div
                  style={styles.miniCard}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                  }}
                >

                  <div style={styles.miniTitle}>
                    Right Mentor
                  </div>

                  <div style={styles.miniValue}>
                    🎯
                  </div>

                </div>

                <div
                  style={styles.miniCard}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                  }}
                >

                  <div style={styles.miniTitle}>
                    Save Opportunities
                  </div>

                  <div style={styles.miniValue}>
                    🚀
                  </div>

                </div>

                <div
                  style={styles.miniCard}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                  }}
                >

                  <div style={styles.miniTitle}>
                    Monetize Skills
                  </div>

                  <div style={styles.miniValue}>
                    💡
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div style={styles.problemSection}>

        <div style={styles.sectionHeader}>

          <div style={styles.problemBadge}>
            ⚡ Why SkillSync AI Matters
          </div>

          <h2 style={styles.problemTitle}>
            Solving Real Learning &
            Skill Gaps
          </h2>

          <p style={styles.problemSubtitle}>
            SkillSync AI bridges the
            disconnect between learners
            and skilled individuals using
            AI-powered compatibility,
            timing analysis, and flexible
            learning opportunities.
          </p>

        </div>

        <div style={styles.problemGrid}>

          {

            [

              {
                icon: "🎯",
                text:
                  "Students, parents, learners, and skilled individuals often struggle to find compatible matches based on timing, budget, duration, and convenience.",
              },

              {
                icon: "⏳",
                text:
                  "Many youths miss valuable opportunities because hectic academic schedules or work shifts leave little room to learn the right skill at the right time.",
              },

              {
                icon: "🚀",
                text:
                  "Some opportunities require learning a skill within a limited time period. SkillSync AI helps learners connect with the right mentor before opportunities are missed.",
              },

              {
                icon: "💡",
                text:
                  "Learning and teaching opportunities already exist simultaneously, yet remain disconnected — leaving many skilled individuals unable to efficiently monetize their knowledge and free time.",
              },

            ].map((item, index) => (

              <div
                key={index}
                style={styles.problemCard}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-10px)";

                  e.currentTarget.style.border =
                    "1px solid rgba(96,165,250,0.45)";

                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0px)";

                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)";

                }}
              >

                <div style={styles.problemIcon}>
                  {item.icon}
                </div>

                <div style={styles.problemText}>
                  {item.text}
                </div>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}

export default Home;