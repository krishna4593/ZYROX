import React from "react";
import { useNavigate } from "react-router";

// Clean vector icons for benefits
function TruckIcon({ className = "w-4 h-4 text-black" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875A1.125 1.125 0 0013.125 3.75h-9.75A1.125 1.125 0 002.25 4.875v10.5c0 .621.504 1.125 1.125 1.125H5.25" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-4 h-4 text-black" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function TagIcon({ className = "w-4 h-4 text-black" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

export default function AuthLayout({ currentPage = "login", children }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#FAF9F5] text-[#121212] font-sans antialiased relative overflow-hidden flex flex-col justify-center">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e5e1d8_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

      {/* Main Single-Screen Content Wrapper */}
      <div className="relative w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-10 py-3 lg:py-5 flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT SECTION: Brand Storytelling & Lookbook Collage (7 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 xl:space-y-6 relative z-10">
            {/* Header / Typography */}
            <div className="space-y-2 xl:space-y-3">
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] xl:text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase">
                  STREETWEAR / EVERYDAY / BOLD
                </span>
              </div>

              {/* Bold Headline */}
              <div>
                <h1 className="font-syne text-4xl sm:text-5xl lg:text-[52px] xl:text-[66px] font-extrabold uppercase leading-[0.93] tracking-tight text-black">
                  WEAR<br />YOUR STORY
                </h1>
              </div>

              {/* Short Brand Description */}
              <p className="text-neutral-600 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
                Premium streetwear for the next generation. Explore bold designs, high-quality fabrics and everyday essentials designed to stand out.
              </p>
            </div>

            {/* Three Key Benefits */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2.5 xl:py-3 border-y border-neutral-200/80">
              {/* Benefit 1 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <TruckIcon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-black tracking-tight leading-tight">
                    Free Shipping
                  </h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">On all orders</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-neutral-200/70">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <ShieldCheckIcon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-black tracking-tight leading-tight">
                    Secure Payment
                  </h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">100% safe</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-neutral-200/70">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <TagIcon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-black tracking-tight leading-tight">
                    Premium Quality
                  </h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">Built to last</p>
                </div>
              </div>
            </div>

            {/* Lookbook Thumbnail Collage */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {/* Thumbnail 1: Hoodie Model */}
              <div className="group relative h-24 sm:h-28 xl:h-32 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/60 transition-all duration-300 hover:shadow-md">
                <img
                  src="/images/zyrox-hoodie.jpg"
                  alt="ZYROX Streetwear Hoodie Model"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Thumbnail 2: T-shirt Rack */}
              <div className="group relative h-24 sm:h-28 xl:h-32 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/60 transition-all duration-300 hover:shadow-md">
                <img
                  src="/images/zyrox-rack.jpg"
                  alt="ZYROX Heavyweight T-shirts Rack"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Thumbnail 3: Cap & Essentials */}
              <div className="group relative h-24 sm:h-28 xl:h-32 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/60 transition-all duration-300 hover:shadow-md">
                <img
                  src="/images/zyrox-cap.jpg"
                  alt="ZYROX Streetwear Cap and Essentials"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metrics & Handwritten Script Accent */}
            <div className="flex items-center justify-between gap-4 pt-1">
              {/* Stats Bar */}
              <div className="flex items-center gap-4 sm:gap-7">
                <div>
                  <div className="text-lg xl:text-xl font-extrabold text-black font-syne tracking-tight">
                    100K+
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-neutral-500 font-medium">
                    Happy Customers
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-neutral-200" />

                <div>
                  <div className="text-lg xl:text-xl font-extrabold text-black font-syne tracking-tight">
                    500+
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-neutral-500 font-medium">
                    Premium Designs
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-neutral-200" />

                <div>
                  <div className="text-lg xl:text-xl font-extrabold text-black font-syne tracking-tight flex items-center gap-1">
                    4.8
                    <span className="text-amber-500 text-sm">★</span>
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-neutral-500 font-medium">
                    Customer Rating
                  </div>
                </div>
              </div>

              {/* Handwritten Script Accent: Beyond Basics */}
              <div className="relative select-none -rotate-6">
                <div className="font-script text-2xl xl:text-3xl text-neutral-800 font-bold tracking-wide leading-none">
                  Beyond<br />
                  <span className="inline-block relative">
                    Basics
                    <svg className="w-full h-1.5 text-neutral-800/80 -mt-0.5" viewBox="0 0 60 8" fill="none">
                      <path d="M2 5C18 2 42 2 58 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT SECTION: Floating Card & Editorial Background (5 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            
            {/* Background Editorial Lookbook Graphic (Desktop Architectural Layer) */}
            <div className="hidden xl:block absolute -left-28 top-1/2 -translate-y-1/2 w-[280px] h-[430px] pointer-events-none rounded-3xl overflow-hidden shadow-lg border border-neutral-200/50 opacity-90 z-0">
              <img
                src="/images/zyrox-hero.jpg"
                alt="ZYROX Models in Beyond Basics Streetwear"
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAF9F5]/40" />
            </div>

            {/* Floating Authentication Card */}
            <div className="relative z-10 w-full max-w-[420px] xl:max-w-[440px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-neutral-100 p-5 sm:p-6 xl:p-8 transition-all duration-300">
              
              {/* Tab Switcher: Navigates between separate pages */}
              <div className="flex border-b border-neutral-200/80 mb-4 sm:mb-5">
                <button
                  type="button"
                  id="tab-login-btn"
                  onClick={() => navigate("/")}
                  className={`flex-1 pb-2.5 text-sm sm:text-base font-semibold transition-all relative cursor-pointer ${
                    currentPage === "login"
                      ? "text-black"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  Login
                  {currentPage === "login" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black rounded-full" />
                  )}
                </button>

                <button
                  type="button"
                  id="tab-register-btn"
                  onClick={() => navigate("/register")}
                  className={`flex-1 pb-2.5 text-sm sm:text-base font-semibold transition-all relative cursor-pointer ${
                    currentPage === "register"
                      ? "text-black"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  Create Account
                  {currentPage === "register" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black rounded-full" />
                  )}
                </button>
              </div>

              {/* Render Page-Specific Form */}
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
