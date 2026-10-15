import { useState } from "react";
import cart from "../../../../../public/SingUp-img/cart.png";
import { baseUrl } from "../../../../Sevices/Config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { setToken } from "../../../../Sevices/Token";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [watchPassword,setWatchPassword]=useState(false)
  const navigate = useNavigate();
  const LoginPage = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(`${baseUrl}/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.access) {
          toast.success("krildi");
          setToken(result.access)
          navigate("/");
        } else if (result.detail) {
          toast.error("royxatdan o'tilgan akaunt topilmadi ");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container_1200 mx-auto py-8 md:py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="hidden md:flex w-full md:w-1/2 bg-[#CBE4E8] justify-center items-center rounded-r-md overflow-hidden">
        <img
          src={cart}
          alt="Log in to Exclusive"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-96 mx-auto md:mx-0 px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-black mb-3">
          Log in to Mixel
        </h1>
        <p className="text-sm text-black mb-8 md:mb-10">
          Enter your details below
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            LoginPage()
          }}
          className="flex flex-col gap-6 md:gap-8"
        >                                                                                                                                                                                    
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Email or Phone Number"
            className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
          />

          <div className="relative">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={watchPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400 pr-8"
            />
            <button
              type="button"
              className="absolute right-0 bottom-2 cursor-pointer text-[18px] text-gray-500"
              onClick={(()=>setWatchPassword((p)=>!p))}
            >
              {
                watchPassword ? <FaRegEye/>:<FaRegEyeSlash/>
              }

            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="bg-[#DB4444] hover:bg-[#c33838] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-medium py-3 px-8 sm:py-3.5 sm:px-10 rounded transition-colors cursor-pointer flex items-center justify-center gap-2 min-w-[110px]"
            >
              Login
            </button>

            <a href="#" className="text-[#DB4444] text-sm hover:underline">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
