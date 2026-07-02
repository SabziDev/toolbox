import { useEffect } from "react";
import { createPortal } from "react-dom";

const AppLoadError = () => {
  useEffect(() => document.body.classList.add("overflow-hidden"));

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex-center h-screen flex-col overflow-hidden px-4 text-center select-none"
      style={{
        background:
          "radial-gradient(circle at top right, #000041, #004162, #89a0ae)",
      }}
    >
      <span
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 2px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
        }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-17.5 fill-amber-700"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z" />
      </svg>

      <h1 className="mb-2 text-3xl font-bold text-amber-700">
        {/* TODO AppLoadError Title */}
        مشکلی پیش آمد
        {/* Something went wrong */}
      </h1>

      <p className="mb-8 max-w-md text-lg text-gray-300">
        {/* TODO AppLoadError Desc */}
        لطفا صفحه را رفرش کنید
        {/* Please refresh the page */}
      </p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="shadow-xl hover:shadow-2xl z-10 cursor-pointer rounded-lg bg-white/90 p-3 font-medium text-black/60 active:scale-[0.96]"
      >
        {/* TODO AppLoadError Btn-Text */}
        تلاش مجدد
        {/* Try Again */}
      </button>
    </div>,
    document.body,
  );
};

export default AppLoadError;
