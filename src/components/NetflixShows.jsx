import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/netflix.css";

export const NetflixShows = () => {
    const shows = [
    { showName: "Breaking Bad" },
    { showName: "Stranger Things" },
    { showName: "Money Heist" },
    { showName: "Dark" },
    { showName: "The Boys" },
  ];
  return (
    <div className="netflix-container">
  <h1 className="netflix-title">NETFLIX SHOWS</h1>

  <div className="shows-grid">
    {shows.map((show) => {
      return (
        <Link
          key={show.showName}
          to={`/watch/${show.showName}`}
          className="show-card"
        >
          <div className="show-overlay">
            <h3>{show.showName}</h3>
          </div>
        </Link>
      );
    })}
  </div>
</div>
  )
}
