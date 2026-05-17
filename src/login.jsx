import React, { useState } from "react";
import "./signup.css";

export default function Login() {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup form:", form);
    alert("Login complete!");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-page">
        <h1 className="signup-title">LOGIN</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-field">
            <label className="signup-label" htmlFor="userId">
              ID
            </label>
            <input
              id="userId"
              name="userId"
              type="text"
              className="signup-input"
              value={form.userId}
              onChange={handleChange}
            />
          </div>

          <div className="signup-field">
            <label className="signup-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="signup-input"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="signup-field">
            <label className="signup-label" htmlFor="name">
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="signup-input"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="signup-field">
            <label className="signup-label" htmlFor="phone">
              PHONE
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="signup-input"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
