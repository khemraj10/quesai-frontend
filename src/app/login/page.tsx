"use client";

import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const configuration = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: process.env.NEXT_PUBLIC_API_URL + "auth/login",
        data: {
          email: email,
          password: password,
        },
        withCredentials: true,
      };
      const response = await axios(configuration);

      localStorage.setItem("token", response.data.token);
      console.log(response);
      // const data = await response.json();

      // if (response?.ok) {
      //   router.push("/dashboard");
      // } else {
      //   setError(data.message || "Failed to login");
      // }
      router.push("/podcast");
    } catch (error) {
      setError("An error occurred during login");
      console.error("Error logging in", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.leftSection}`}>
        <h1>Ques.AI</h1>
        <h2>Your podcast will no longer be just a hobby.</h2>
        <p>Supercharge Your Distribution using our AI assistant!</p>
      </div>
      <div className={`${styles.rightSection}`}>
        <h2>
          Welcome to <span>Ques.AI</span>
        </h2>
        <form className={`${styles.form}`} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={`${styles.rememberMe}`}>
            <div>
              <input type="checkbox" id="remember" required />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button>Forgot Password?</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className={styles.divider}>
            <span className={styles.or}>or</span>
          </div>
          <button className={`${styles.googleButton}`}>
            Continue with Google
          </button>
          <div className={`${styles.createAccount}`}>
            <p>
              Don&apos;t have an account? <a href="#">Create Account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
