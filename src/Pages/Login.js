import React from "react";
import '../Style/Login.css';
import logg from '../Assets/loggg.jpeg';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/main");
  };

  return (
    <div className="wrapper">
      <div className="left-box">

        <div
          className="box-left-image"
          style={{ backgroundImage: `url(${logg})` }}
        >
          <div className="overlay">

            <div className="welcome-wrapper">
              <h2 className="welcome-title" style={{ marginRight: "80px", color: "white" }}>
                WELCOME
              </h2>

              <div className="line-text">
                <span className="line"></span>
                <h3 className="word" style={{ fontFamily: "Trocchi", color: "white" }}>
                  to wen nro7
                </h3>
              </div>
            </div>

            <h6
              style={{
                fontFamily: "Lexend",
                marginTop: "30px",
                color: "white",
              }}
            >
              ...We’re excited to have you back!
              Log in and let us help you find the perfect spot for your next plan
            </h6>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="right">

          <h5
            className="text-center"
            style={{
              color: "#4f9c6eff",
              fontFamily: "Radona Norm Bold",
              marginBottom: "10px",
            }}
          >
            Login to wen nro7
          </h5>

          <div className="row g-3 justify-content-center">
            <div className="col">
              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>
                Name
              </label>
              <input type="text" className="form-control custom-input" />
            </div>

            <div className="col">
              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>
                Username
              </label>
              <input type="text" className="form-control custom-input" />
            </div>
          </div>

          <div className="row g-3 justify-content-center">
            <div className="col">
              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>
                Email
              </label>
              <input type="text" className="form-control custom-input" />

              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>
                Password
              </label>
              <input type="text" className="form-control custom-input" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Button
              className="btn-login"
              style={{
                color: "#ffffff",
                borderRadius: "50px",
                padding: "7px 35px",
                fontSize: "1rem",
                background: "#0a5326ff",
              }}
              onClick={handleStartClick}
            >
              login
            </Button>
          </div>

          <div className="d-flex align-items-center my-3">
            <div style={{ height: "1px", background: "#8d8b8bff", flex: 1 }}></div>

            <span
              style={{
                padding: "0 10px",
                color: "#4f9c6eff",
                fontFamily: "Radona Norm Bold",
              }}
            >
              or with
            </span>
          </div>

          <div className="socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
