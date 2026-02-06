import React, { useState } from 'react'

export const UseStateDemo1 = () => {
  const [count, setcount] = useState(0)
  const increseCount = () => {
    setcount(count + 1)
    console.log('count after increse ', count)

  }

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>USE STATE DEMO 1</h1>
      <h1>Count = {count}</h1>
      <button onClick={increseCount}>+</button>
    </div>
  )
}
