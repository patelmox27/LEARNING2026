import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const Omdb = () => {
  const [movies, setmovies] = useState([])

  const [searchParam, setsearchParam] = useState("")
  const searchParamHandler = (event) => {
    console.log(event.target.value)
    setsearchParam(event.target.value)
  }

  const searchmovies = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`)
    console.log(res)
    console.log(res.data)
    setmovies(res.data.Search || [])


  }
  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>

      <h1>Omdb</h1>
      <div>
        <label>Search</label>
        <input type='text' value={searchParam} onChange={searchParamHandler} />
      </div>
      <button onClick={searchmovies}>Search</button>

      <table className='table table-dark'>
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>POSTER</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return <tr>
              <td>{movie.imdbID}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>
                <img src={movie.Poster} style={{ height: "150px", width: "150px" }}></img>
              </td>
            </tr>
          })

          }

        </tbody>
      </table>


    </div>
  )
}

