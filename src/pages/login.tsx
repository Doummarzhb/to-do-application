import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          //  api
          const res = await fetch(
            `https://689ef2f03fed484cf87886a9.mockapi.io/api/r1/users?email=${email}`
          );
          const users = await res.json();
    
          if (users.length === 0) {
            alert("Email not found!");
            return;
          }
    
          const user = users[0];
    
        
          if (user.password === password) {
            //  localStorage
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("isLoggedIn", "true");
    
            alert("Login successful!");
            navigate("/todo_section");
          } else {
            alert("Incorrect password!");
          }
        } catch (error) {
          console.error(error);
          alert("Something went wrong!");
        }
      };
      
  return (
    <Layout>
      
      <div className="flex items-center justify-center   bg-[#23262C]">
  <div
    className="
    w-full max-w-[1120px] h-[438px]
      flex flex-col gap-[30px]
      bg-transparent
      items-center
      pt-[20px]
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
        font-poppins
      "
    >
      Login
    </h2>

    <form onSubmit={handleLogin} className="flex flex-col items-center gap-[30px] w-full">
      <input
        type="email"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
        w-full max-w-[500px] h-[80px]
        px-4
        rounded-[10px]
        bg-[#2E3239] text-white
        placeholder-gray-400
        focus:outline-none
        border-none
          
          
        "
      />
      <input
        type="password"
        placeholder="   Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="
        w-full max-w-[500px] h-[80px]
    px-4
    rounded-[10px]
    bg-[#2E3239] text-white
    placeholder-gray-400
    focus:outline-none
    border-none
        "
      />

      <p
        className="
        w-full max-w-[470px] h-[33px]
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
        className="   w-full max-w-[300px] h-[50px]  bg-[#F4F6FA] text-black rounded-[10px] font-medium hover:bg-gray-200 transition "
      >
        Login
      </button>
    </form>
  </div>
</div>

    </Layout>
  );
}
