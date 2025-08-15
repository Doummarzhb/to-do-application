import { useState } from "react";
import Layout from "../components/Layout";
import { Link   } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();  

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
        //api in mockApi
      const res = await fetch("https://689ef2f03fed484cf87886a9.mockapi.io/api/r1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (res.ok) {
        alert("Account created successfully!");
  
        // localStorage
        const userData = { email, password };
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");
  
        navigate("/todo_section");
      } else {
        alert("Failed to register");
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
          w-full max-w-[1120px] h-auto
            flex flex-col gap-[30px]
            bg-transparent
            items-center
            pt-[20px]
          "
        >
          <h2
            className="
              w-auto h-[24px]
              opacity-50
              font-normal
              text-[40px] leading-[24px] tracking-[0]
              text-[#FFFFFF]
              text-center
              font-poppins
            "
          >
         Register
          </h2>

          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center gap-[30px]  w-full px-4"
          >
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

            <input
              type="password"
              placeholder="   Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                text-[16px] sm:text-[16px] leading-[24px] tracking-[0]
                text-[#F4F6FA]
                
              "
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  font-normal text-[16px]  sm:text-[16px] leading-[24px]
                  underline decoration-solid underline-offset-[0] decoration-[0]
                  text-[#F4F6FA]
                "
              >
                Login
              </Link>
            </p>

            <button
              type="submit"
              className="w-full max-w-[300px] h-[45px] sm:h-[50px] bg-[#F4F6FA] text-black rounded-[10px] font-medium hover:bg-gray-200 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
