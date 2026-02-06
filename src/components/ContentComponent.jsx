import React, { useState } from "react";
import zoroImg from "../assets/image/zoro.jpg";

export default function ContentComponent() {
  const BasicInfo = ({ styles }) => {
    return (
      <div style={styles.content}>
        <p>
          Pirate Hunter Zoro is the swordsman of the Straw Hat Pirates.
          Master of the Three Sword Style and loyal to Luffy.
        </p>

        <ul>
          <li>Birthday: November 11</li>
          <li>Alias: Pirate Hunter</li>
          <li>Occupation: Pirate</li>
          <li>Bounty: 1,111,000,000</li>
        </ul>
      </div>
    );
  };

  const MoreInfo = ({ styles }) => {
    return (
      <div style={styles.content}>
        <p>
          Zoro follows a strict warrior code built on honor and strength.
          His dream is to become the world's greatest swordsman.
        </p>

        <h3>Abilities</h3>
        <ul>
          <li>Busoshoku Haki</li>
          <li>Kenbunshoku Haki</li>
          <li>Haoshoku Haki</li>
        </ul>
      </div>
    );
  };

  const [view, setView] = useState("");
  // "" = nothing, "play" = basic info, "more" = extra info

  const styles = {

    hero: {
      position: "relative",
      height: "75vh",
      backgroundImage: `url(${zoroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "top center",
      display: "flex",
      alignItems: "flex-end",
    },

    overlay: {
      width: "100%",
      padding: "60px",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6), transparent)",
      color: "white",
    },

    title: {
      fontSize: "52px",
      fontWeight: "800",
    },

    tags: {
      marginTop: "10px",
      color: "#14c011",
      fontSize: "15px",
    },

    buttonRow: {
      marginTop: "20px",
      display: "flex",
      gap: "12px",
    },

    playBtn: {
      backgroundColor: "white",
      color: "black",
      border: "none",
      padding: "10px 22px",
      borderRadius: "4px",
      fontWeight: "600",
      cursor: "pointer",
    },

    infoBtn: {
      backgroundColor: "rgba(109,109,110,0.7)",
      color: "white",
      border: "none",
      padding: "10px 22px",
      borderRadius: "4px",
      fontWeight: "600",
      cursor: "pointer",
    },

    content: {
      backgroundColor: "#141414",
      padding: "40px 80px",
      color: "#0fd00f",
      lineHeight: "1.8",
    }
  };

  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <div style={styles.hero}>
        <div style={styles.overlay}>

          <h1 style={styles.title}>Roronoa Zoro</h1>
          <p style={styles.tags}>
            Action • Adventure • Anime • Swordsman
          </p>

          <div style={styles.buttonRow}>
            <button style={styles.playBtn} onClick={() => setView("play")}>
              ▶ Play
            </button>

            <button style={styles.infoBtn} onClick={() => setView("more")}>
              ℹ More Info
            </button>
          </div>

        </div>
      </div>

      {/* ===== BASIC INFO (PLAY CLICK) ===== */}
      {view === "play" && (
        <div style={styles.content}>

          <p>
            Pirate Hunter Zoro is the swordsman of the Straw Hat Pirates.
            Master of the Three Sword Style and loyal to Luffy.
          </p>

          <ul>
            <li>Birthday: November 11</li>
            <li>Alias: Pirate Hunter</li>
            <li>Occupation: Pirate</li>
            <li>Bounty: 1,111,000,000</li>
          </ul>
        </div>
      )}

      {/* ===== EXTRA INFO (MORE INFO CLICK) ===== */}
      {view === "more" && (
        <div style={styles.content}>


          <p>
            Zoro follows a strict warrior code built on honor and strength.
            His dream is to become the world's greatest swordsman.
          </p>

          <h3>Abilities</h3>
          <ul>
            <li>Busoshoku Haki</li>
            <li>Kenbunshoku Haki</li>
            <li>Haoshoku Haki</li>
          </ul>

          <h3>Iconic Moments</h3>
          <ul>
            <li>“Nothing happened” – Thriller Bark</li>
            <li>Bowing to Mihawk</li>
            <li>Defeating King</li>
          </ul>
        </div>
      )}

    </div>
  );
}