import React from 'react'

export const FunctionDemo1 = () => {

  const test = () => {
    alert("test function called...")
  }
  const test1 = (x) => {
    alert("value of x " + x)

  }

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>FunctionDemo1</h1>
      <button onClick={test}>Click</button>
      <button onClick={() => {
        test1(27)
      }}>Clicks</button>
    </div>
  )
}
