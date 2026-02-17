import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const ApiDemo1 = () => {

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])

  const getUsers = async () => {

    //get function Promise
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response) //axios object //AxiosResponse
    console.log(response.data) //api response.
    console.log(response.data.message)
    setmessage(response.data.message)
    console.log(response.data.data) //array
    setusers(response.data.data)
    // eslint-disable-next-line no-undef
    get()
  }

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>API DEMO 1</h1>
      <button onClick={() => { getUsers() }}>GET</button>
      <h1>MESSAGE = {message}</h1>
      {users.length > 0 && (
        <table className='table table-dark'>
          <thead>
            <tr>

              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>ACTIVE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td style={{ color: user.isActive ? "green" : "red" }}>
                    {user.isActive ? "Active" : "Inactive"}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>)}
      {
        users.map((user) => {
          return <li>{user.name}|{user.email}</li>
        })
      }
    </div>
  )
}
