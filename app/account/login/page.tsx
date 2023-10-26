import LoginForm from "@/components/UI/Account/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Creamas",
};

const Login = () => {
  return (
    <main>
      <div
        className="fixed w-full h-full top-0 left-0 bg-gradient-to-r to-primaryColor from-[#a96b5c]"
        id="loginContainer"
      >
        <div className="w-full h-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
