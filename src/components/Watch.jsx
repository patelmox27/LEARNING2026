import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

  const { movieName } = useParams();


  return (
    <div><h1 style={{ color: "whitesmoke" }}>Watching: {movieName}</h1></div>

  )
}
