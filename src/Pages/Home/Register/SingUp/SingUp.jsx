import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../Sevices/Config";
import { useState } from "react";
import { toast } from "sonner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [watchPassword,setWatchPassword]=useState(false)
  const navigate = useNavigate();

  const handleSignUp = () => {
  
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username.trim(),
      email: email.trim(),
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(`${baseUrl}/users/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.username) {
          toast.success("Account created!");
          navigate("/Login");
        } else if (result.email) {
          toast.warning(result.email);
        } else {
          toast.error(result.message || "Something went wrong");
        }
      })
      .catch(() => toast.error("Network error"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="py-10">
        <div className="container_1200 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="bg-[#C9E3E8]">
              <img
                src="/SingUp-img/cart.png"
                alt=""
                className="w-full h-140 object-contain"
              />
            </div>
            <div className="max-w-96 w-full mx-auto">
              <h2 className="text-[42px] font-semibold text-black leading-none">
                Create an account
              </h2>

              <p className="text-[13px] text-[#555] mt-3 mb-12">
                Enter your details below
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }}
                className="space-y-7"
              >
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  minLength={2}
                  placeholder="Name"
                  className="w-full border-b border-[#cfcfcf] pb-3 text-[14px] outline-none placeholder:text-[#a8a8a8]"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border-b border-[#cfcfcf] pb-3 text-[14px] outline-none placeholder:text-[#a8a8a8]"
                />
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={watchPassword ? "text" : "password"}
                    required
                    minLength={6}
                    placeholder="Password"
                    className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
                  />
                  <button className="absolute right-2 top-2 cursor-pointer text-[18px] text-gray-500" 
                  onClick={(()=>setWatchPassword((p)=>!p))} type="button">
                    {
                      watchPassword ? <FaRegEye/>:<FaRegEyeSlash />

                    }
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-[#db4444] text-white text-[15px] font-medium rounded hover:bg-[#c53b3b] duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? "Loading..." : "Create Account"}
                </button>

                <button
                  type="button"
                  className="w-full h-14 border border-[#d9d9d9] rounded flex items-center justify-center gap-3 text-[15px] text-[#333] cursor-pointer"
                >
                  <img
                    src="/SingUp-img/google.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>

                <div className="flex justify-center gap-2 text-[14px] text-[#777] pt-2">
                  <span>Already have account?</span>
                  <Link to={"/Login"} className="font-medium text-black">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
