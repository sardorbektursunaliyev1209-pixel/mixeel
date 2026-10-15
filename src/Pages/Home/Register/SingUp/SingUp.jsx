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
  const [watchPassword, setWatchPassword] = useState(false);
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
          setToken(result.access);
          navigate("/");
        } else if (result.detail) {
          toast.error("royxatdan o'tilgan akaunt topilmadi ");
        }
      })
      .catch((error) => console.error(error));
  };

  const inputClass =
    "w-full border-b border-gray-300 bg-transparent pb-2 text-sm text-black outline-none transition-colors placeholder-gray-400 focus:border-black dark:border-gray-600 dark:text-white dark:placeholder-gray-500 dark:focus:border-white";

  return (
    <section className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="container_1200 mx-auto flex flex-col items-center justify-between gap-8 px-4 py-8 md:flex-row md:gap-12 md:py-12">
        <div className="hidden w-full items-center justify-center overflow-hidden rounded-r-md bg-[#CBE4E8] dark:bg-gray-800 md:flex md:w-1/2">
          <img
            src={cart}
            alt="Log in to Exclusive"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mx-auto w-full max-w-96 px-2 sm:px-4 md:mx-0 md:w-1/2">
          <h1 className="mb-3 text-2xl font-semibold tracking-wide text-black dark:text-white sm:text-3xl">
            Log in to Mixel
          </h1>
          <p className="mb-8 text-sm text-black dark:text-gray-400 md:mb-10">
            Enter your details below
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              LoginPage();
            }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Email or Phone Number"
              autoComplete="username"
              className={inputClass}
            />

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={watchPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                className={`${inputClass} pr-8`}
              />
              <button
                type="button"
                aria-label={watchPassword ? "Hide password" : "Show password"}
                className="absolute bottom-2 right-0 cursor-pointer text-[18px] text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                onClick={() => setWatchPassword((p) => !p)}
              >
                {watchPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="flex min-w-[110px] cursor-pointer items-center justify-center gap-2 rounded bg-[#DB4444] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c33838] disabled:cursor-not-allowed disabled:opacity-70 sm:px-10 sm:py-3.5"
              >
                Login
              </button>

              <a href="#" className="text-sm text-[#DB4444] hover:underline">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;