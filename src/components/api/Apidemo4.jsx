import React, { useState } from "react"
import axios from "axios"

export const Apidemo4 = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    isActive: false,
    password: ""
  })

  const [message, setMessage] = useState("")

  // 🔹 Input Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  // 🔹 Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault()
    submitHandler(formData)
  }

  // 🔹 Async API Call
  const submitHandler = async (data) => {
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        data
      )

      console.log(res.data)
      setMessage("User Registered Successfully ✅")

    } catch (error) {
      console.log(error.message)
      setMessage("Registration Failed ❌")
    }
  }

  return (
    <div style={{ padding: "30px", color: "whitesmoke" }}>
      <h2>Register User</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Is Active
          </label>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit">Register</button>

      </form>

      <h3>{message}</h3>

    </div>
  )
}