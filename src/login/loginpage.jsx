import React from 'react'

const Loginpage = () => {
  return (
    <div style={styles.container}>
      {/* Left Section: Logo and Description */}
      <div style={styles.leftSection}>
        <h1 style={styles.logo}>MyApp</h1>
        <p style={styles.description}>
          Connect with friends and the world around you on MyApp.
        </p>
      </div>

      {/* Right Section: Login Form */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <input
            type="email"
            placeholder="Email or Phone Number"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
          <button style={styles.loginButton}>Log In</button>
          <a href="#" style={styles.forgotPassword}>
            Forgot Password?
          </a>
          <div style={styles.divider}></div>
          <button style={styles.createAccountButton}>Login as teacher</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  },
  leftSection: {
    marginRight: "50px",
    textAlign: "center",
  },
  logo: {
    fontSize: "48px",
    color: "#1877f2",
    marginBottom: "10px",
  },
  description: {
    fontSize: "20px",
    color: "#606770",
    maxWidth: "350px",
  },
  rightSection: {
    width: "350px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: "40px",
    marginBottom: "10px",
    padding: "0 10px",
    fontSize: "16px",
    border: "1px solid #dddfe2",
    borderRadius: "6px",
  },
  loginButton: {
    height: "40px",
    backgroundColor: "#1877f2",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  forgotPassword: {
    fontSize: "14px",
    color: "#1877f2",
    textAlign: "center",
    textDecoration: "none",
    marginBottom: "10px",
    cursor: "pointer",
  },
  divider: {
    height: "1px",
    backgroundColor: "#dddfe2",
    margin: "10px 0",
  },
  createAccountButton: {
    height: "40px",
    backgroundColor: "#42b72a",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Loginpage