import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export const Imdb = () => {

  const [movies, setmovies] = useState([])
  const [searchParam, setsearchParam] = useState("")
  const searchParamHandler = (event) => {
    console.log(event.target.value)
    setsearchParam(event.target.value)
  }
  const searchmovies = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=bb6a5234&s=${searchParam}`
      )

      if (res.data.Response === "True") {
        setmovies(res.data.Search)
      } else {
        setmovies([])
        console.log(res.data.Error)
      }

    } catch (error) {
      console.log(error.message)
      setmovies([])
    }
  }



  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>Movie Search</h1>

      {/* 🔍 Search Section (Above Grid) */}
      <div style={{ marginBottom: "20px" }}>
        <label>Search </label>
        <input
          type='text'
          value={searchParam}
          onChange={searchParamHandler}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={searchmovies}>Search</button>
      </div>

      {/* 🎬 Grid Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >

        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              background: "#1e1e1e",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <h4>
              <Link
                to={`/movie/${movie.imdbID}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {movie.Title}
              </Link>
            </h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
