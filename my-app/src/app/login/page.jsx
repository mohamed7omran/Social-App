"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const geting = () => {
    const username = usernameRef.current.value;
    const userPassword = passwordRef.current.value;
    const params = {
      username: username,
      password: userPassword,
    };
    const url = "https://tarmeezacademy.com/api/v1/login";
    const token = "116204|gFvozZYAXT254byDv9QKLpovP4j7OQQ1JQk9eNsd";
    const header = {
      authorization: `Bearer ${token}`,
    };

    axios.post(url, params, { headers: header }).then((response) => {
      console.log(response.data);
    });
  };
  const loginBtnClick = (e) => {
    e.preventDefault();
    geting();
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" flex item-center mt-2 justify-center size-full ">
            <IoIosLock size={50} />
          </div>

          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login to your account
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
              <button
                form="login-form"
                onClick={loginBtnClick}
                type="submit"
                className="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
