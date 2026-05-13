import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Recommendations() {
  const location = useLocation();
  const matches = location.state?.matches || [];

  // State to track which card's "Coming Soon" notification is active
  const [notificationIndex, setNotificationIndex] = useState(null);

  const handleConnectClick = (e, index) => {
    e.preventDefault(); // Prevents navigation if wrapped in a Link
    setNotificationIndex(index);
    
    // Hide the notification after 2.5 seconds
    setTimeout(() => {
      setNotificationIndex(null);
    }, 2500);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #020617 0%, #000814 40%, #000 100%)",
      padding: "60px 25px 100px",
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    glow1: {
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "#2563eb",
      borderRadius: "50%",
      filter: "blur(160px)",
      top: "-100px",
      left: "-100px",
      opacity: 0.22,
    },
    glow2: {
      position: "absolute",
      width: "350px",
      height: "350px",
      background: "#7c3aed",
      borderRadius: "50%",
      filter: "blur(150px)",
      bottom: "-100px",
      right: "-100px",
      opacity: 0.18,
    },
    header: {
      textAlign: "center",
      maxWidth: "900px",
      margin: "0 auto 70px",
      position: "relative",
      zIndex: 2,
    },
    badge: {
      display: "inline-block",
      padding: "10px 18px",
      borderRadius: "999px",
      background: "rgba(37,99,235,0.15)",
      border: "1px solid rgba(96,165,250,0.35)",
      color: "#93c5fd",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "24px",
    },
    title: {
      fontSize: "64px",
      lineHeight: "74px",
      fontWeight: "900",
      letterSpacing: "-2px",
      marginBottom: "22px",
      background: "linear-gradient(to right, #fff, #60a5fa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "19px",
      lineHeight: "34px",
    },
    grid: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(520px,1fr))",
      gap: "30px",
      position: "relative",
      zIndex: 2,
    },
    card: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "34px",
      padding: "28px",
      backdropFilter: "blur(20px)",
      transition: "0.35s",
      boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "28px",
      gap: "20px",
    },
    profileSection: {
      display: "flex",
      gap: "18px",
      alignItems: "center",
    },
    avatar: {
      width: "82px",
      height: "82px",
      borderRadius: "26px",
      background: "linear-gradient(to right, #2563eb, #7c3aed)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "34px",
      fontWeight: "800",
      color: "#fff",
      boxShadow: "0 12px 35px rgba(59,130,246,0.35)",
    },
    name: {
      fontSize: "34px",
      fontWeight: "800",
      marginBottom: "6px",
    },
    role: {
      color: "#60a5fa",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "700",
    },
    scoreBox: {
      minWidth: "95px",
      height: "95px",
      borderRadius: "26px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    score: {
      fontSize: "34px",
      fontWeight: "900",
      color: "#22c55e",
    },
    scoreText: {
      color: "#94a3b8",
      fontSize: "13px",
    },
    tags: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "24px",
    },
    tag: {
      padding: "10px 16px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#cbd5e1",
      fontSize: "13px",
    },
    summary: {
      color: "#d1d5db",
      lineHeight: "32px",
      fontSize: "16px",
      marginBottom: "28px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      marginBottom: "28px",
    },
    infoCard: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "22px",
      padding: "18px",
    },
    infoLabel: {
      color: "#94a3b8",
      fontSize: "13px",
      marginBottom: "10px",
    },
    infoValue: {
      fontSize: "20px",
      fontWeight: "700",
    },
    aiBox: {
      background: "linear-gradient(to right, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "24px",
      padding: "22px",
      marginBottom: "30px",
      flexGrow: 1, // Ensures the button stays at the bottom of the card
    },
    aiTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#60a5fa",
      marginBottom: "16px",
    },
    reason: {
      color: "#dbeafe",
      marginBottom: "14px",
      lineHeight: "28px",
      fontSize: "15px",
    },
    buttonWrapper: {
      position: "relative",
      width: "100%",
      marginTop: "auto",
    },
    button: {
      width: "100%",
      padding: "20px",
      borderRadius: "20px",
      border: "none",
      background: "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "#fff",
      fontSize: "17px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 12px 35px rgba(59,130,246,0.35)",
      transition: "transform 0.2s, opacity 0.2s",
    },
    tooltip: {
      position: "absolute",
      bottom: "100%", // Position directly above the button
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "14px",
      padding: "12px 24px",
      background: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(96, 165, 250, 0.4)",
      borderRadius: "16px",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "700",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
      zIndex: 10,
      animation: "tooltipFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    },
  };

  return (
    <div style={styles.container}>
      {/* CSS Animation for the Tooltip */}
      <style>
        {`
          @keyframes tooltipFade {
            0% { opacity: 0; transform: translate(-50%, 15px) scale(0.95); }
            100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          }
        `}
      </style>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.header}>
        <div style={styles.badge}>🤖 AI Smart Recommendations</div>
        <h1 style={styles.title}>Your Perfect Matches</h1>
        <p style={styles.subtitle}>
          SkillSync AI analyzed learning compatibility, pricing, availability, teaching mode, and collaboration preferences to generate the best mentor matches for you.
        </p>
      </div>

      <div style={styles.grid}>
        {matches.map((match, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.border = "1px solid rgba(96,165,250,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
            }}
          >
            <div style={styles.topSection}>
              <div style={styles.profileSection}>
                <div style={styles.avatar}>{match.name?.charAt(0) || "U"}</div>
                <div>
                  <div style={styles.name}>{match.name || "User"}</div>
                  <div style={styles.role}>Skill Seeker</div>
                </div>
              </div>

              <div style={styles.scoreBox}>
                <div style={styles.score}>{match.score || 90}%</div>
                <div style={styles.scoreText}>Match</div>
              </div>
            </div>

            <div style={styles.tags}>
              <div style={styles.tag}>{match.skill || "General"}</div>
              <div style={styles.tag}>{match.preferred_mode || "Online"}</div>
              <div style={styles.tag}>{match.availability || "Flexible"}</div>
            </div>

            <div style={styles.summary}>
              {match.summary || "AI identified this profile as highly compatible based on skill relevance, schedule overlap, and learning preferences."}
            </div>

            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Skill</div>
                <div style={styles.infoValue}>{match.skill || "General"}</div>
              </div>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Budget</div>
                <div style={styles.infoValue}>₹{match.price || "Flexible"}</div>
              </div>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Location</div>
                <div style={styles.infoValue}>{match.location || "Remote"}</div>
              </div>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Mode</div>
                <div style={styles.infoValue}>{match.preferred_mode || "Online"}</div>
              </div>
            </div>

            <div style={styles.aiBox}>
              <div style={styles.aiTitle}>AI Compatibility Insights</div>
              {match.reasons?.map((reason, i) => (
                <div key={i} style={styles.reason}>
                  ✨ {reason}
                </div>
              ))}
            </div>

            {/* Coming Soon Button Logic */}
            <div style={styles.buttonWrapper}>
              {notificationIndex === index && (
                <div style={styles.tooltip}>🚀 Coming Soon!</div>
              )}
              
              <button
                style={styles.button}
                onClick={(e) => handleConnectClick(e, index)}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Contact Now →
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;