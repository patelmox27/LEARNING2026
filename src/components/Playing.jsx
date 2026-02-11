import React from 'react'
import { useParams } from 'react-router-dom'

export const Playing = () => {
  const { TeamName } = useParams();
  return (

    <div><h1 style={{ color: "whitesmoke" }}>Playing: {TeamName}</h1></div>
  )
}
