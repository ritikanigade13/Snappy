import React from 'react'
import GenderCheckbox from './GenderCheckbox';

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Snappy</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-50">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text  text-blue-50">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-blue-50">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            className="text-sm hover:underline text-blue-50 hover:text-blue-500 mt-2 inline-block"
            href="#"
          >
            Already have an account?{" "}
          </a>{" "}
          <div>
            {" "}
            <button className="btn btn-block btn-sm mt-2 border border-white-700">
              Sign Up
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp
