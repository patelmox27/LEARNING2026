import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export const MovieDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    const getMovieDetails = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=bb6a5234&i=${id}`
        )

        if (res.data.Response === "True") {
          setMovie(res.data)
        } else {
          setError(res.data.Error)  // ✅ string only
        }

      } catch (err) {
        setError(err.message)  // ✅ store only message
      } finally {
        setLoading(false)
      }
    }

    getMovieDetails()

  }, [id])

  // 🔄 Loading State
  if (loading) {
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Loading...
      </h2>
    )
  }

  // ❌ Error State
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h2>{error}</h2>
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    )
  }

  // 🛑 Safety Check
  if (!movie) return null

  return (
    <div style={{ color: "white", padding: "20px", textAlign: "center" }}>

      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px" }}
      >
        ⬅ Back
      </button>

      <h1>{movie.Title}</h1>

      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Rated:</strong> {movie.Rated}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>

    </div>
  )
}