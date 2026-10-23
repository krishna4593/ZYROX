import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth.jsx";
import AuthLayout from "../components/AuthLayout.jsx";

// Icons
function MailIcon({ className = "w-4 h-4 text-neutral-400" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LockIcon({ className = "w-4 h-4 text-neutral-400" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function EyeIcon({ className = "w-4 h-4 text-neutral-400 hover:text-neutral-700 transition-colors" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EyeOffIcon({ className = "w-4 h-4 text-neutral-400 hover:text-neutral-700 transition-colors" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { handleLogin } = useAuth();
  const { loading, error } = useSelector((state) => state.auth || {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await handleLogin({
        email: data.email.trim(),
        password: data.password,
      });
    } catch (err) {
      console.error("Login submission error:", err);
    }
  };

  return (
    <AuthLayout currentPage="login">
      {/* Title & Subtitle */}
      <div className="mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-syne">
          Welcome Back
        </h2>
        <p className="text-xs text-neutral-500 mt-0.5">
          Sign in to continue to ZYROX
        </p>
      </div>

      {/* Redux / Server error message if any */}
      {error && (
        <div className="mb-3.5 p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <span className="font-bold shrink-0">!</span>
          <span>{error?.response?.data?.message || error?.message || "Login failed. Please check your credentials."}</span>
        </div>
      )}

      {/* Form with React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3 sm:space-y-3.5">
        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-neutral-800 mb-1" htmlFor="login-email">
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <MailIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-[#FCFCFB] text-xs sm:text-sm text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
                errors.email
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-semibold text-neutral-800 mb-1" htmlFor="login-password">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <LockIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              className={`w-full pl-10 pr-10 py-2.5 bg-[#FCFCFB] text-xs sm:text-sm text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
                errors.password
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-[11px] text-red-600 mt-1 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember me & Forgot Password Row */}
        <div className="flex items-center justify-between text-xs pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none text-neutral-600 hover:text-black transition-colors">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-neutral-300 text-black focus:ring-black cursor-pointer accent-black"
            />
            <span>Remember me</span>
          </label>

          <a
            href="#forgot-password"
            onClick={(e) => {
              e.preventDefault();
              alert("Password reset instructions have been dispatched to your email address.");
            }}
            className="text-neutral-800 underline underline-offset-2 hover:text-black font-medium transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-1.5 py-3 px-6 rounded-xl bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-black/10 disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRightIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Register link */}
      <div className="mt-4 sm:mt-5 text-center text-xs text-neutral-600">
        <span>New to ZYROX? </span>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-black font-bold underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
        >
          Create an account
        </button>
      </div>
    </AuthLayout>
  );
}