import React from "react";
import zoroImg from "../assets/zoro.jpg";

export default function ContentComponent() {
  const styles = {
    
  wrapper: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start", // 🔥 key change
    maxWidth: "100%",
    margin: "40px auto",
  },

  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  image: {
    width: "300px",
    height: "auto",
    objectFit: "cover",
    border: "1px solid #38f868",
    borderRadius: "5px",
    boxShadow: "0 15px 40px rgb(3, 120, 15)",
  },

    content: {
      
      flex: "3",
      padding: "30px",
      backgroundColor: "#0f172a",
      color: "#e5e7eb",
      borderRadius: "16px",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
      lineHeight: "1.8",
    },

    heading: {
      marginTop: "28px",
      marginBottom: "10px",
      color: "#38f868",
      borderBottom: "2px solid #1e293b",
      paddingBottom: "6px",
      letterSpacing: "1px",
    },

    subHeading: {
      marginTop: "18px",
      color: "#9a270a",
      fontSize: "18px",
    },

    paragraph: {
      margin: "8px 0",
      fontSize: "15px",
    },

    strong: {
      color: "#f9f7f6",
    },

    list: {
      paddingLeft: "22px",
      marginTop: "8px",
    },

    listItem: {
      marginBottom: "6px",
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* LEFT SIDE – TEXT */}
      <div style={styles.content}>
        <p style={styles.paragraph}>
          <strong style={styles.strong}>Illustrated by:</strong> Eiichiro Oda
        </p>

        <p style={styles.paragraph}>
          <strong style={styles.strong}>First Appearance:</strong> One Piece Chapter 3 – "Introducing Pirate Hunter Zoro"
        </p>

        <p style={styles.paragraph}>
          <strong style={styles.strong}>Created by:</strong> Eiichiro Oda
        </p>

        <h2 style={styles.heading}>Portrayed By (Live Action)</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Mackenyu</li>
          <li style={styles.listItem}>Maximilian Lee Piazza (young)</li>
          <li style={styles.listItem}>Minosuke Bando (Super Kabuki II)</li>
        </ul>

        <h2 style={styles.heading}>Voice Actors</h2>

        <h3 style={styles.subHeading}>Japanese</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Kazuya Nakai</li>
          <li style={styles.listItem}>Megumi Urawa (young)</li>
          <li style={styles.listItem}>Wataru Takagi</li>
        </ul>

        <h3 style={styles.subHeading}>English</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Christopher Sabat</li>
          <li style={styles.listItem}>Cynthia Cranz (young)</li>
          <li style={styles.listItem}>Brina Palencia (young)</li>
          <li style={styles.listItem}>Marc Diraison</li>
        </ul>

        <h2 style={styles.heading}>Personal Info</h2>
        <p><strong>Birthday:</strong> November 11</p>
        <p><strong>Alias:</strong> Pirate Hunter</p>
        <p><strong>Occupation:</strong> Pirate, Former Bounty Hunter</p>
       
        <h2 style={styles.heading}>Philosophy & Code</h2>
        <p style={styles.paragraph}>
        Zoro follows a strict warrior’s code based on honor, loyalty, and discipline.
       He believes a swordsman must never show weakness and accepts pain as the price of strength.
        </p>
      <p style={styles.paragraph}>
       His famous belief: <em>“Scars on the back are a swordsman’s shame.”</em>
       </p>

        <h2 style={styles.heading}>Affiliations</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Straw Hat Pirates (Swordsman)</li>
          <li style={styles.listItem}>Worst Generation</li>
        </ul>
        
        <h2 style={styles.heading}>Fighting Style</h2>
<p style={styles.paragraph}>
  <strong>Santoryu (Three Sword Style):</strong> A unique sword technique using one sword in each hand and one in the mouth.
</p>

<h3 style={styles.subHeading}>Swords</h3>
<ul style={styles.list}>
  <li style={styles.listItem}>Wado Ichimonji – Symbol of Zoro’s promise</li>
  <li style={styles.listItem}>Enma – Sword that draws out its wielder’s Haki</li>
  <li style={styles.listItem}>Sandai Kitetsu – Cursed blade</li>
</ul>

<h2 style={styles.heading}>Abilities & Haki</h2>
<ul style={styles.list}>
  <li style={styles.listItem}>Master Swordsman</li>
  <li style={styles.listItem}>Busoshoku Haki (Armament)</li>
  <li style={styles.listItem}>Kenbunshoku Haki (Observation)</li>
  <li style={styles.listItem}>Haoshoku Haki (Conqueror’s)</li>
</ul> 

<h2 style={styles.heading}>Iconic Moments</h2>
<ul style={styles.list}>
  <li style={styles.listItem}>“Nothing happened” – Thriller Bark</li>
  <li style={styles.listItem}>Bowing before Mihawk for strength</li>
  <li style={styles.listItem}>Defeating King of the Beasts Pirates</li>
</ul>

        <h2 style={styles.heading}>Bounties</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>1,111,000,000 (Current)</li>
          <li style={styles.listItem}>320,000,000</li>
          <li style={styles.listItem}>120,000,000</li>
          <li style={styles.listItem}>60,000,000</li>
        </ul>

        <h2 style={styles.heading}>Growth & Legacy</h2>
<p style={styles.paragraph}>
  From a lone bounty hunter to the right hand of Monkey D. Luffy,
  Zoro’s journey represents unwavering resolve and relentless self-improvement.
</p>
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div style={styles.imageContainer}>
        <img src={zoroImg} alt="Roronoa Zoro" style={styles.image} />
      </div>
    </div>
  );
}