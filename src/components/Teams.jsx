import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
  const teamsList = [
    { TeamName: "Mumbai Indians" },
    { TeamName: "Royal Challengers Bangalore" },
    { TeamName: "Chennai Super Kings" },
    { TeamName: "Delhi Capitals" },
    { TeamName: "Gujarat Titans" },
    { TeamName: "Kolkata Knight Riders" },
    { TeamName: "Lucknow Super Giants" },
    { TeamName: "Punjab Kings" },
    { TeamName: "Rajasthan Royals" },
    { TeamName: "Sunrisers Hyderabad" },
  ];

  return (
    <div className="netflix-container">
      <h1 className="netflix-title">IPL TEAMS</h1>

      <div className="teams-grid">
        {teamsList.map((team) => {
          return (
            <Link
              to={`/playing/${team.TeamName}`}
              className="team-card"
            >
              <div className="team-overlay">
                <h3>{team.TeamName}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};