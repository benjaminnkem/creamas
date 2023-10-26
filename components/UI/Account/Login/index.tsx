"use client";

import Link from "next/link";
import { Power1, gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".backLink",
          { xPercent: -100, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 1, ease: "power1.out" }
        )
        .fromTo(
          "#loginBox",
          { opacity: 0, yPercent: 20, scale: 1.2 },
          { opacity: 1, scale: 1, yPercent: 0, duration: 0.5 }
        );
    }, formRef);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("Login Failed");
  };

  return (
    <div ref={formRef}>
      <Link href={"/"}>
        <div className="absolute backLink top-4 left-4 w-12 h-12 bg-primaryColorLight rounded-full grid place-content-center cursor-pointer">
          <ArrowLeftIcon />
        </div>
      </Link>

      <div
        className="min-w-[20rem] max-h-[30rem] overflow-y-auto backdrop-blur-lg p-8 rounded-sm shadow-lg"
        id="loginBox"
      >
        <div className="">
          <h1 className="text-2xl font-bold">Login</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-4 mt-4">
              {/* <div className="">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="w-full block bg-transparent p-2 border-b border-white/50 outline-none transition-colors duration-200"
              />
            </div> */}
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full block bg-transparent py-2 border-b border-white/50 outline-none transition-colors duration-200"
                />
              </div>
              <div className="">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full block bg-transparent py-2 border-b border-white/50 outline-none transition-colors duration-200"
                />
              </div>

              <button className="border-2 py-2 w-full rounded-sm transition-colors duration-200 hover:bg-white hover:text-primaryColor">
                Login
              </button>
            </div>
          </form>

          <p className="text-sm mt-2 text-center">
            Don&apos;t have an account?{" "}
            <Link href={"/account/register"} className="font-medium border-b">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
