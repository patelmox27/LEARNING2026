import React from "react";

export const Routecomponent = () => {
  const Bgmi = [
    { id: 1, name: "Zoro", kill: 16, assist: 3, headshot: 5 },
    { id: 2, name: "Arq", kill: 10, assist: 5, headshot: 3 },
    { id: 3, name: "i miss her", kill: 9, assist: 2, headshot: 2 },
    { id: 4, name: "Jod thunder", kill: 8, assist: 1, headshot: 1 },
    { id: 5, name: "OP thunder", kill: 11, assist: 5, headshot: 4 },
    { id: 6, name: "Luffy", kill: 10, assist: 3, headshot: 3 },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#141414", // Netflix background
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      <h2
        style={{
          color: "#e50914", // Netflix red
          fontSize: "32px",
          fontWeight: "800",
          marginBottom: "20px",
        }}
      >
        BGMI LEADERBOARD
      </h2>

      <table
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "85%",
          backgroundColor: "#181818",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.8)",
        }}
      >
        <thead style={{ backgroundColor: "#000" }}>
          <tr>
            <th style={{ padding: "12px", borderRight: "1px solid #333", }}>ID</th>
            <th style={{ padding: "12px", borderRight: "1px solid #333" }}>NAME</th>
            <th style={{ padding: "12px", borderRight: "1px solid #333" }}>KILL</th>
            <th style={{ padding: "12px", borderRight: "1px solid #333" }}>ASSIST</th>
            <th style={{ padding: "12px", borderRight: "1px solid #333" }}>HEADSHOT</th>
          </tr>
        </thead>

        <tbody>
          {Bgmi.map((bg) => (
            <tr
              key={bg.id}
              style={{
                borderBottom: "1px solid #333",
                transition: "0.3s",
              }}
            >
              <td style={{ padding: "12px", borderRight: "1px solid #333" }}>{bg.id}</td>

              <td style={{ padding: "12px", borderRight: "1px solid #333", fontWeight: "600" }}>
                {bg.name}
              </td>

              <td
                style={{
                  padding: "12px", borderRight: "1px solid #333",
                  color: bg.kill >= 12 ? "#46d369" : "white", // dynamic Netflix green highlight
                }}
              >
                {bg.kill}
              </td>

              <td style={{ padding: "12px", borderRight: "1px solid #333" }}>{bg.assist}</td>

              <td style={{ padding: "12px", color: "#f5c518", borderRight: "1px solid #333" }}>
                {bg.headshot}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};