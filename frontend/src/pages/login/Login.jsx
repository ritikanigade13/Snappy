import React, { useState } from "react";
import { Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] =  useState("");
  const [password, setPassword] =  useState("");

  const {loading, login}= useLogin();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className="flex flex-col w-1/2 items-center justify-center min-h-screen p-6 mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Snappy</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-blue-50">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-blue-50">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup"
            className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
             <button className="btn btn-block btn-sm mt-2" disabled={loading} >
              {loading ? <span className="loading loading-spineer text-white"></span>:"Login"}
             </button>
            {" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
