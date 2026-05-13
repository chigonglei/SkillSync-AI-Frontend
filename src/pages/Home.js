import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  // Handle responsive design dynamically
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // State for the central modal
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #020617 0%, #000814 40%, #000000 100%)",
      color: "#fff",
      overflowX: "hidden",
      position: "relative",
      width: "100%",
      padding: isMobile ? "16px 12px 70px" : "30px 20px 120px",
      fontFamily: "Inter, Arial, sans-serif",
    },
    glow1: {
      position: "absolute",
      width: isMobile ? "250px" : "420px",
      height: isMobile ? "250px" : "420px",
      background: "#2563eb",
      borderRadius: "50%",
      filter: "blur(160px)",
      top: "-120px",
      left: "-120px",
      opacity: 0.25,
      zIndex: 1,
    },
    glow2: {
      position: "absolute",
      width: isMobile ? "220px" : "350px",
      height: isMobile ? "220px" : "350px",
      background: "#7c3aed",
      borderRadius: "50%",
      filter: "blur(150px)",
      bottom: "-120px",
      right: "-120px",
      opacity: 0.22,
      zIndex: 1,
    },
    heroWrapper: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
    heroSection: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(380px,1fr))",
      gap: isMobile ? "28px" : "70px",
      alignItems: "center",
      width: "100%",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: isMobile ? "22px" : "40px",
      padding: isMobile ? "22px 16px" : "70px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
    },
    left: { maxWidth: "620px", width: "100%" },
    aiBadge: {
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      padding: isMobile ? "14px" : "18px",
      borderRadius: "22px",
      background: "rgba(15,23,42,0.75)",
      border: "1px solid rgba(96,165,250,0.25)",
      backdropFilter: "blur(18px)",
      marginBottom: "30px",
      boxShadow: "0 10px 40px rgba(37,99,235,0.15)",
    },
    title: {
      fontSize: isMobile ? "48px" : "80px",
      lineHeight: isMobile ? "54px" : "88px",
      fontWeight: "900",
      marginBottom: "24px",
      letterSpacing: isMobile ? "-1px" : "-3px",
      background: "linear-gradient(to right, #ffffff 10%, #60a5fa 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      color: "#cbd5e1",
      fontSize: isMobile ? "16px" : "20px",
      lineHeight: isMobile ? "28px" : "36px",
      marginBottom: "40px",
      maxWidth: "560px",
    },
    buttonContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "auto auto",
      gap: "12px",
      marginBottom: "40px",
    },
    primaryButton: {
      padding: isMobile ? "16px 12px" : "18px 36px",
      borderRadius: "16px",
      border: "none",
      background: "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "700",
      boxShadow: "0 12px 35px rgba(59,130,246,0.4)",
    },
    secondaryButton: {
      padding: isMobile ? "16px 12px" : "18px 34px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.04)",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "700",
      backdropFilter: "blur(12px)",
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
      gap: "14px",
    },
    statBox: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: "20px",
      textAlign: "center",
    },
    right: { width: "100%", display: "flex", justifyContent: "center" },
    dashboard: {
      width: "100%",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: isMobile ? "22px" : "34px",
      padding: isMobile ? "16px" : "26px",
      backdropFilter: "blur(20px)",
    },
    problemSection: {
      marginTop: isMobile ? "80px" : "140px",
      position: "relative",
      zIndex: 2,
    },
    problemGrid: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    },
    problemCard: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "30px",
      padding: "32px",
      backdropFilter: "blur(18px)",
    },
    
    // --- Center Modal Overlay Styles ---
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      zIndex: 9999,
      display: showNotification ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      opacity: showNotification ? 1 : 0,
      transition: "opacity 0.3s ease",
    },
    modalContent: {
      position: "relative",
      background: "#0f1524", // Deep dark blue background
      border: "1px solid rgba(96, 165, 250, 0.2)",
      borderRadius: "24px",
      width: "100%",
      maxWidth: "600px", // Large middle format
      padding: isMobile ? "30px 20px" : "50px 40px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      transform: showNotification ? "scale(1)" : "scale(0.95)",
      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    closeButton: {
      position: "absolute",
      top: "-20px", // Hovers exactly on the top edge like the reference image
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      fontWeight: "bold",
      transition: "transform 0.2s",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.heroWrapper}>
        <div style={styles.heroSection}>
          <div style={styles.left}>
            <div style={styles.aiBadge}>
              <div style={{
                width: "50px", height: "50px", borderRadius: "14px",
                background: "linear-gradient(to right, #2563eb, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px"
              }}>🤖</div>
              <div>
                <div style={{ fontWeight: "800", color: "#fff", marginBottom: "4px" }}>
                  SkillSync AI : Agentic AI
                </div>
                <div style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "20px" }}>
                  Upskill and monetize your skills on your own schedule.
                </div>
              </div>
            </div>

            <h1 style={styles.title}>SkillSync AI</h1>
            <p style={styles.subtitle}>
              Connect seekers with the perfect mentors using intelligent compatibility analysis and AI-driven recommendations.
            </p>

            <div style={styles.buttonContainer}>
              <button style={styles.primaryButton} onClick={() => navigate("/signup")}>Get Started →</button>
              <button style={styles.secondaryButton} onClick={() => navigate("/signin")}>Sign In</button>
            </div>

            <div style={styles.statsContainer}>
              <div style={styles.statBox}>
                <div style={{ fontSize: "28px", fontWeight: "900" }}>10K+</div>
                <div style={{ color: "#94a3b8", fontSize: "12px" }}>Active Seekers</div>
              </div>
              <div style={styles.statBox}>
                <div style={{ fontSize: "28px", fontWeight: "900" }}>2.5K+</div>
                <div style={{ color: "#94a3b8", fontSize: "12px" }}>Expert Mentors</div>
              </div>
              <div style={styles.statBox}>
                <div style={{ fontSize: "28px", fontWeight: "900" }}>98%</div>
                <div style={{ color: "#94a3b8", fontSize: "12px" }}>Match Accuracy</div>
              </div>
            </div>
          </div>

          <div style={styles.right}>
            <div style={styles.dashboard}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "40px", background: "#2563eb", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>S</div>
                <div style={{ color: "#22c55e", fontSize: "12px" }}>● AI Active</div>
              </div>
              <div style={{ background: "linear-gradient(to right, #312e81, #6d28d9)", padding: "20px", borderRadius: "20px", marginBottom: "15px" }}>
                <h4 style={{ margin: "0 0 10px 0" }}>Why SkillSync AI?</h4>
                <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>Bridging the gap between timing, budget, and learning goals.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { t: "Flexible", i: "⏳" },
                  { t: "Precision", i: "🎯" },
                  { t: "Growth", i: "🚀" },
                  { t: "Earnings", i: "💡" }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "rgba(255,255,255,0.05)", padding: "15px", borderRadius: "15px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px" }}>{item.i}</div>
                    <div style={{ fontSize: "11px", marginTop: "5px", color: "#94a3b8" }}>{item.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.problemSection}>
        <div style={{ maxWidth: "1280px", margin: "0 auto 60px", textAlign: "center" }}>
          <h2 style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: "900" }}>Solving Real Skill Gaps</h2>
        </div>
        <div style={styles.problemGrid}>
          {[
            { icon: "🎯", text: "Match with mentors based on your specific budget and convenience." },
            { icon: "⏳", text: "Learn around your hectic academic or work schedules." },
            { icon: "🚀", text: "Master high-demand skills before opportunities pass you by." },
            { icon: "💡", text: "Monetize your existing expertise in your spare time." }
          ].map((item, index) => (
            <div key={index} style={styles.problemCard}>
              <div style={{ fontSize: "30px", marginBottom: "15px" }}>{item.icon}</div>
              <div style={{ color: "#cbd5e1", lineHeight: "1.6" }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Modal Overlay */}
      <div style={styles.modalOverlay}>
        <div style={styles.modalContent}>
          
          {/* Top-center Close Button matching your reference image */}
          <button 
            style={styles.closeButton} 
            onClick={() => setShowNotification(false)}
            onMouseEnter={(e) => e.target.style.transform = "translateX(-50%) scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "translateX(-50%) scale(1)"}
            aria-label="Close notification"
          >
            ✕
          </button>
          
          <div style={{ 
            width: "80px", height: "80px", borderRadius: "20px", 
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", 
            display: "flex", alignItems: "center", justifyContent: "center", 
            fontSize: "40px", marginBottom: "24px",
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
          }}>
            💡
          </div>
          
          <h2 style={{ 
            margin: "0 0 16px 0", 
            fontSize: isMobile ? "24px" : "32px", 
            color: "#fff", 
            lineHeight: "1.3", 
            fontWeight: "900",
            letterSpacing: "-0.5px"
          }}>
            SkillSync AI : Agentic AI for Learning & Earning
          </h2>
          
          <p style={{ 
            margin: 0, 
            fontSize: isMobile ? "16px" : "18px", 
            color: "#cbd5e1", 
            lineHeight: "1.6",
            maxWidth: "480px"
          }}>
            Upskill yourself during your free or required time, and monetize your skills during your convenient time.
          </p>

        </div>
      </div>

    </div>
  );
}

export default Home;