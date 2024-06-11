import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

interface AuthType {
  user_name: string;
  user_password: string;
}

interface ResponseData {
  access_token: string;
}

const login: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username ||!password) {
      alert("Please fill in both username and password.");
      return;
    }

    let formContent: AuthType = {
      user_name: username,
      user_password: password,
    };

    try {
      const apiUrl = "http://161.35.148.255:8000/login";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData: ResponseData = response.data;
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (error) {
      console.error(error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <>
      <main className="main" id="top">
        <section className="text-center py-0">
          <div className="container">
            <div className="row min-vh-100 align-items-center">
              <div className="col-md-8 col-lg-5 mx-auto">
                <div className="card">
                  <div className="card-body p-md-5">
                    <h4 className="text-uppercase fs-0 fs-md-1">Login</h4>
                    <form onSubmit={handleSubmit} className="text-start mt-4">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text bg-100">
                              <span className="far fa-user"></span>
                            </div>
                            <input
                              className="form-control"
                              placeholder="Username"
                              aria-label="Text input with dropdown button"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
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
                              type="password"
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
                          <button className="btn btn-primary w-100" type="submit">
                            Login
                          </button>
                        </div>
                        <div className="col-6 mt-2 mt-sm-3">
                          <Link to="/register" className="btn btn-primary w-100">
                            Register
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
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
