import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [imageUser, setImageUser] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDetail");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }

    const storedImageUser = localStorage.getItem("image");
    if (storedImageUser) {
      setImageUser(storedImageUser);
    }
  }, []);

  const logout = () => {
    try {
      localStorage.removeItem("image");
      localStorage.removeItem("userDetail");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(imageUser)
  // console.log(user)

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 px-4 sm:px-32 drop-shadow-md text-black bg-white h-auto sm:h-[80px]">
      <a
        href="/"
        className="flex items-center justify-center rounded-full bg-black w-[60px] h-[60px]"
      >
        <p className="text-white">LOGO</p>
      </a>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:mt-0 sm:ml-[50px]">
        <a
          href="/"
          className="text-[#2A4B6A] text-[20px] font-bold underline underline-offset-1 "
        >
          HOME
        </a>
      </div>
      {user ? (
        <div className="flex flex-row p-2  w-[100px] ">
          <img src={imageUser} className="  w-[50px] h-[50px] rounded-full" />
          <div className="w-[30px]"></div>
          <button onClick={logout}>
            <FontAwesomeIcon icon={faCaretDown} className="text-[20px]" />
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <p className="text-[#2A4B6A]">wadaw</p>
          </div>
        </div>
      ) : (
        <a
          href="/sign-up"
          className="bg-[#2A4B6A] text-white font-medium p-2 w-[100px] text-center rounded-full"
        >
          Sign In
        </a>
      )}
    </nav>
  );
};

export default Navbar;
