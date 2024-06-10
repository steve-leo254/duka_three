import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import UseGoogleLogin from "../components/GoogleLogin";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

interface AuthType {
  user_name: string;
  // email: string;
  user_password: string;
}

interface ResponseData {
  access_token: string;
}

const login: React.FC = () => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formContent: AuthType = {
      user_name: username,
      user_password: password,
    };
    try {
      // const apiUrl = "http://127.0.0.1:5000/login";
      const apiUrl = "http://161.35.148.255:8000/login";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);
      const responseData: ResponseData = response.data;
      console.log("test", responseData);
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("isLoggedIn", true.toString()); //  login status to local storage
      // setIsLoggedIn(true);
      navigate("/");
      // toast.success("Login successfull");
    } catch (error) {
      // toast.error("An error occured logging in! try again");
      console.error(error);
    }
  };
  return (
    <>
      <main className="main" id="top">
        {/* <ToastContainer /> */}
        <section className="text-center py-0">
          <div
            className="bg-holder overlay overlay-2"
            style={{ backgroundImage: "url(src/assets/images/header-5.jpg)" }}
          ></div>
          <div className="container">
            <div className="row min-vh-100 align-items-center">
              <div
                className="col-md-8 col-lg-5 mx-auto"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="mb-5" data-zanim-xs='{"delay":0,"duration":1}'>
                  <a href="../index.html">
                    <img src="src/assets/images/logo-light.png" alt="logo" />
                  </a>
                </div>
                <div
                  className="card"
                  data-zanim-xs='{"delay":0.1,"duration":1}'
                >
                  <div className="card-body p-md-5">
                    <h4 className="text-uppercase fs-0 fs-md-1">login</h4>
                    <form onSubmit={handleSubmit} className="text-start mt-4">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text bg-100">
                              <span className="far fa-user"></span>
                            </div>
                            <input
                              className="form-control"
                              // type="email"
                              placeholder="Email or username"
                              aria-label="Text input with dropdown button"
                              value={username}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 mt-2 mt-sm-4">
                          <div className="input-group">
                            <div className="input-group-text bg-100">
                              <span className="fas fa-lock"></span>
                            </div>
                            <input
                              className="form-control"
                              type="Password"
                              placeholder="Password"
                              aria-label="Text input with dropdown button"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="rememberMe"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label text-500">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 mt-2 mt-sm-3">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-6 mt-2 mt-sm-3">
                          <Link
                            to="/register"
                            className="btn btn-primary w-100"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <UseGoogleLogin /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default login;
