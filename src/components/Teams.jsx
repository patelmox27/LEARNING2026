import React from "react";
import { Link } from "react-router-dom";
import MI from "../assets/image/Mi.jpg";
import RCB from "../assets/image/RCB.jpg";
import DC from "../assets/image/Delhi.jpg";
import CSK from "../assets/image/Csk.jpg";
import GT from "../assets/image/GT.jpg";
import KKR from "../assets/image/KKR.jpg";
import LSG from "../assets/image/LSG.jpg";
import PBKS from "../assets/image/PBKS.jpg";
import RR from "../assets/image/RR.jpg";
import SRH from "../assets/image/SRH.jpg";




export const Teams = () => {
  const teamsList = [
  { TeamName: "Mumbai Indians", img: MI},
  { TeamName: "Royal Challengers Bangalore", img: RCB },
  { TeamName: "Chennai Super Kings", img: CSK },
  { TeamName: "Delhi Capitals", img: DC},
  { TeamName: "Gujarat Titans", img: GT },
  { TeamName: "Kolkata Knight Riders", img: KKR },
  { TeamName: "Lucknow Super Giants", img: LSG },
  { TeamName: "Punjab Kings", img: PBKS },
  { TeamName: "Rajasthan Royals", img: RR },
  { TeamName: "Sunrisers Hyderabad", img: SRH }
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
              style={{ backgroundImage: `url(${team.img})` }}
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