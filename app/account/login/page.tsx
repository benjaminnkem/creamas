import LoginForm from "@/components/UI/Account/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Creamas",
};

const Login = () => {
  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default Login;
