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

function PhoneIcon({ className = "w-4 h-4 text-neutral-400" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-3.28a2.25 2.25 0 00-1.656-2.176l-4.5-1.125a2.25 2.25 0 00-2.423.88l-1.07 1.428a11.042 11.042 0 01-5.516-5.516l1.428-1.07a2.25 2.25 0 00.88-2.424l-1.125-4.5A2.25 2.25 0 007.28 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function UserIcon({ className = "w-4 h-4 text-neutral-400" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { handleRegister } = useAuth();
  const { loading, error } = useSelector((state) => state.auth || {});

  // Registration form strictly in order: Email, Contact, Full Name, Password, Checkbox
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      contact: "",
      fullName: "",
      password: "",
      isSeller: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await handleRegister({
        email: data.email.trim(),
        contact: data.contact.trim(),
        fullName: data.fullName.trim(),
        password: data.password,
        isSeller: Boolean(data.isSeller),
      });
    } catch (err) {
      console.error("Registration submission error:", err);
    }
  };

  return (
    <AuthLayout currentPage="register">
      {/* Title & Subtitle */}
      <div className="mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-syne">
          Create Account
        </h2>
        <p className="text-xs text-neutral-500 mt-0.5">
          Join ZYROX for exclusive archive drops and member access
        </p>
      </div>

      {/* Redux / Server error message if any */}
      {error && (
        <div className="mb-2.5 p-2 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <span className="font-bold shrink-0">!</span>
          <span>{error?.response?.data?.message || error?.message || "Registration failed. Please try again."}</span>
        </div>
      )}

      {/* Form: Fields strictly in order: Email, Contact, Full Name, Password, Checkbox */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2.5">
        {/* 1. Email */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-800 mb-0.5" htmlFor="reg-email">
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <MailIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="reg-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className={`w-full pl-9 pr-3 py-2 bg-[#FCFCFB] text-xs text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
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
            <p className="text-[10px] text-red-600 mt-0.5 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* 2. Contact */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-800 mb-0.5" htmlFor="reg-contact">
            Contact
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <PhoneIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="reg-contact"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              className={`w-full pl-9 pr-3 py-2 bg-[#FCFCFB] text-xs text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
                errors.contact
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("contact", {
                required: "Contact phone number is required",
                minLength: {
                  value: 7,
                  message: "Please enter a valid phone number",
                },
              })}
            />
          </div>
          {errors.contact && (
            <p className="text-[10px] text-red-600 mt-0.5 font-medium">
              {errors.contact.message}
            </p>
          )}
        </div>

        {/* 3. Full Name */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-800 mb-0.5" htmlFor="reg-fullName">
            Full Name
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <UserIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="reg-fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              className={`w-full pl-9 pr-3 py-2 bg-[#FCFCFB] text-xs text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
                errors.fullName
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
              })}
            />
          </div>
          {errors.fullName && (
            <p className="text-[10px] text-red-600 mt-0.5 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* 4. Password */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-800 mb-0.5" htmlFor="reg-password">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <LockIcon className="w-4 h-4 text-neutral-400" />
            </span>
            <input
              id="reg-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a strong password"
              className={`w-full pl-9 pr-9 py-2 bg-[#FCFCFB] text-xs text-neutral-900 rounded-xl border transition-all placeholder:text-neutral-400 focus:outline-none focus:bg-white ${
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-[10px] text-red-600 mt-0.5 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* 5. Checkbox: Register as a seller (isSeller) */}
        <div className="pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none text-[11px] text-neutral-700 hover:text-black transition-colors group">
            <input
              type="checkbox"
              id="reg-isSeller"
              className="w-3.5 h-3.5 rounded border-neutral-300 text-black focus:ring-black cursor-pointer accent-black"
              {...register("isSeller")}
            />
            <span className="font-medium group-hover:text-black">
              Register as a seller
            </span>
          </label>
        </div>

        {/* Create Account Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-1 py-2.5 px-6 rounded-xl bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-black/10 disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRightIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Login link */}
      <div className="mt-3.5 sm:mt-4 text-center text-xs text-neutral-600">
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-black font-bold underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </AuthLayout>
  );
}