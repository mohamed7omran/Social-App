"use client";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { IoMdPersonAdd } from "react-icons/io";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const proImgRef = useRef();

  const geting = () => {
    const username = usernameRef.current.value;
    const userPassword = passwordRef.current.value;
    const proImg = passwordRef.current.files[0];
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", userPassword);
    formData.append("image", proImg);

    const url = "https://tarmeezacademy.com/api/v1/login";

    axios.post(url, formData).then((response) => {
      console.log(response.data);
    });
  };
  const loginBtnClick = (e) => {
    e.preventDefault();
    geting();
  };
  //   useEffect(() => {
  //     geting();
  //   }, [loginBtnClick]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" mt-2 flex item-center  justify-center size-full ">
            <IoMdPersonAdd size={55} />
          </div>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form id="login-form" className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  ref={usernameRef}
                  id="email"
                  name="username"
                  type="text"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="proImg"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Profile Image
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={proImgRef}
                  id="proImg"
                  name="password"
                  type="file"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                form="login-form"
                onClick={loginBtnClick}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
