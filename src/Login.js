import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import './App.css';
import Dashboard from './Dashboard';


function Login() {
  const [enableDashboard, setEnableDashboard] = useState(false);
  const loginClick = () => {
    setEnableDashboard(true);
  }

  let loginConatiner = (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "150vh" }}
    >
      <button className="btn btn-success btn-lg" onClick={loginClick}>
        Login With Spotify Music
      </button>
    </Container>
  )

  return (
    <div className="containerRoot">
      {enableDashboard ? <Dashboard /> : loginConatiner}
    </div>

  )
}

export default Login
