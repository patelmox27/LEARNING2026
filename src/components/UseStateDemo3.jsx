import React, { useState } from 'react'

export const UseStateDemo3 = () => {
  const [users, setusers] = useState(["Momo", "Zoro"])
  const adduser = () => {
    setusers([...users, "mxdynamite"])
  }
  return (
    <div>
      <h1 style={{ color: "whitesmoke" }}>UseStateDemo3</h1>
      {
        users.map((u) => {
          return <li style={{ color: 'greenyellow' }}>{u}</li>
        })
      }
      <button onClick={adduser}>PUSH</button>

    </div>
  )
}
