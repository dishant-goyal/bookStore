import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("✅ Submitted data:", data);
    // You can handle signup API here, then redirect or close modal
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal modal-open">
        <div className="modal-box relative">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-2">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-70 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-70 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-70 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
              >
                Sign up
              </button>
              <p>
                Have an account?{" "}
                <button
                  type="button" // 👈 important!
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
