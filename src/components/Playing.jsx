import React from 'react'
import { useParams } from 'react-router-dom'

export const Playing = () => {
  const {TeamName} = useParams();
  return (
  
        <div><h1>Playing: {TeamName}</h1></div>
  )
}
