import React, { useState } from 'react'

export const UseStateDemo2 = () => {
  const [loading, setloading] = useState(true)
  const stoploader = () => {
    setloading(false)

  }
  const startloader = () => {
    setloading(true)
  }
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>UseStateDemo2</h1>
      {
        loading == true ? <h1 style={{ color: "green" }}>ZORO IS LOST</h1> : <h1 style={{ color: "green" }}>ZORO IS LOST EVEN IF YOU TRY TO STOP</h1>
      }
      <button onClick={startloader}>Start</button>
      <button onClick={stoploader}>STOP</button>

    </div>
  )
}
