import React from "react";
import { useForm } from "react-hook-form";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const submitHandler = (data) => {
    console.log("Form Data:", data);
  };

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password"); // watch example

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>
        Password Validation Form
      </h1>

      <form
        onSubmit={handleSubmit(submitHandler)}   // ✅ correct usage
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};