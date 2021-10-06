import { useRouter } from "next/router";
import IconsPack from "../../public/images/IconsPack";
const NavBar = () => {
  const router = useRouter();
  return (
    <header className="transition duration-1000 hover:bg-black fixed w-screen p-4 flex items-center h-20">
      <div onClick={() => router.push("/")}>{IconsPack.alsfairLogo}</div>

      <div className=" flex  justify-center items-center ml-auto pr-4 space-x-4">
        <button>EN</button>
        <label>Menu</label>
        <button>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H17.4545V2H0V0ZM0 5H17.4545V7H0V5ZM0 10H17.4545V12H0V10Z"
              fill="#BEA782"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
