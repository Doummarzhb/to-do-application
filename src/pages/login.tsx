import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Layout>
      
      <div className="flex items-center justify-center min-h-screen bg-[#23262C]">
  <div
    className="
      w-[1120px] h-[438px]
      flex flex-col gap-[30px]
      bg-transparent
      items-center
    "
  >
    <h2
      className="
        w-[106px] h-[24px]
        opacity-50
        font-normal
        text-[40px] leading-[24px] tracking-[0]
        text-[#FFFFFF]
        text-center
      "
    >
      Login
    </h2>

    <form onSubmit={handleLogin} className="flex flex-col items-center gap-[30px]">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          w-[500px] h-[80px]
          px-4
          rounded-[10px]
          bg-[#2E3239] text-white
          placeholder-gray-400
          focus:outline-none
        "
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="
          w-[500px] h-[80px]
          px-4
          rounded-[10px]
          bg-[#2E3239] text-white
          placeholder-gray-400
          focus:outline-none
        "
      />

      <p
        className="
          w-[470px] h-[33px]
          opacity-50 font-poppins
          text-[16px] leading-[24px] tracking-[0]
          text-[#F4F6FA]
          
        "
      >
        Don’t have an account yet?{" "}
        <Link
    to="/register"
    className="
      font-normal text-[16px] leading-[24px]
      underline decoration-solid underline-offset-[0] decoration-[0]
      text-[#F4F6FA]
    "
  >
   Register
  </Link>
      </p>

      <button
        type="submit"
        className="w-[300px] h-[50px] bg-[#F4F6FA] text-black rounded-[10px] font-medium hover:bg-gray-200 transition "
      >
        Login
      </button>
    </form>
  </div>
</div>

    </Layout>
  );
}
