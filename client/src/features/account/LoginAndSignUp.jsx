import React, { useState } from 'react';

const LoginAndSignUp = () => {
  const [currentView, setCurrentView] = useState("signUp");

  const changeView = (view) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "signUp":
        return (
          <form className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-extralight text-center mb-4">Sign Up!</h2>
            <fieldset className="bg-white rounded p-4 shadow-md">
              <legend className="mb-4 text-xl font-semibold">Create Account</legend>
              <ul>
                <li className="mb-4">
                  <label htmlFor="username" className="block mb-2">Username:</label>
                  <input type="text" id="username" required className="w-full border rounded py-2 px-3" />
                </li>
                <li className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email:</label>
                  <input type="email" id="email" required className="w-full border rounded py-2 px-3" />
                </li>
                <li className="mb-4">
                  <label htmlFor="password" className="block mb-2">Password:</label>
                  <input type="password" id="password" required className="w-full border rounded py-2 px-3" />
                </li>
              </ul>
            </fieldset>
            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Submit
            </button>
            <button
              type="button"
              onClick={() => changeView("logIn")}
              className="w-full mt-2 text-blue-500 text-center hover:text-blue-600"
            >
              Have an Account?
            </button>
          </form>
        );

      case "logIn":
        return (
          <form className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-extralight text-center mb-4">Welcome Back!</h2>
            <fieldset className="bg-white rounded p-4 shadow-md">
              <legend className="mb-4 text-xl font-semibold">Log In</legend>
              <ul>
                <li className="mb-4">
                  <label htmlFor="username" className="block mb-2">Username:</label>
                  <input type="text" id="username" required className="w-full border rounded py-2 px-3" />
                </li>
                <li className="mb-4">
                  <label htmlFor="password" className="block mb-2">Password:</label>
                  <input type="password" id="password" required className="w-full border rounded py-2 px-3" />
                </li>
                <li className="mb-4 flex items-center">
                  <i />
                  <a onClick={() => changeView("PWReset")} href="#" className="text-blue-500 hover:text-blue-600 ml-2">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
            <button
              type="button"
              onClick={() => changeView("signUp")}
              className="w-full mt-2 text-blue-500 text-center hover:text-blue-600"
            >
              Create an Account
            </button>
          </form>
        );

      case "PWReset":
        return (
          <form className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-extralight text-center mb-4">Reset Password</h2>
            <fieldset className="bg-white rounded p-4 shadow-md">
              <legend className="mb-4 text-xl font-semibold">Password Reset</legend>
              <ul>
                <li className="mb-4">
                  <em className="text-center">A reset link will be sent to your inbox!</em>
                </li>
                <li className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email:</label>
                  <input type="email" id="email" required className="w-full border rounded py-2 px-3" />
                </li>
              </ul>
            </fieldset>
            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Send Reset Link
            </button>
            <button
              type="button"
              onClick={() => changeView("logIn")}
              className="w-full mt-2 text-blue-500 text-center hover:text-blue-600"
            >
              Go Back
            </button>
          </form>
        );

      default:
        break;
    }
  };

  return (
    <section id="entry-page" className="min-h-screen flex items-center justify-center">
      {renderCurrentView()}
    </section>
  );
};

export default LoginAndSignUp;
