import React from "react";
import { useForm } from "react-hook-form";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" }); // ✅ fixed

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password") || ""; // ✅ safe

  const submithandler = (data) => {
    console.log(data);
    alert("Password Created Successfully");
  };

  const validationScheme = {
    passwordValidator: {
      required: {
        value: true,
        message: "**Password is required",
      },
      validate: {
        capital: (value) =>
          /[A-Z]/.test(value) || "**Must contain one capital letter",

        small: (value) =>
          /[a-z]/.test(value) || "**Must contain one small letter",

        specialchar: (value) =>
          /[!@#$%^&*]/.test(value) ||
          "**Must include at least one special character",

        digit: (value) =>
          /[0-9]/.test(value) || "**Must include at least one digit",

        length: (value) =>
          value.length >= 8 || "**Must be at least 8 characters long",
      },
    },
  };

  return (
    <div style={{ color: "skyblue", textAlign: "center" }}>
      <h1>Password Game</h1>

      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", validationScheme.passwordValidator)}
          />
          <span style={{ color: "red" }}>
            {errors.password?.message}
          </span>
        </div>

        <div>
          <input type="submit" />
        </div>

        <div>
          <h5 style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
            1. Must contain 1 capital letter
          </h5>

          <h5 style={{ color: /[a-z]/.test(password) ? "green" : "red" }}>
            2. Must contain 1 small letter
          </h5>

          <h5 style={{ color: /[!@#$%^&*]/.test(password) ? "green" : "red" }}>
            3. At least 1 special character
          </h5>

          <h5 style={{ color: /[0-9]/.test(password) ? "green" : "red" }}>
            4. Must include 1 digit
          </h5>

          <h5 style={{ color: password.length >= 8 ? "green" : "red" }}>
            5. Minimum length 8
          </h5>
        </div>
      </form>
    </div>
  );
};