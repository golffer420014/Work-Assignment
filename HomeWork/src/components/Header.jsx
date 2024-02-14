import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [imageUser, setImageUser] = useState(null);

  const [dd, setDd] = useState(false);

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
  // console.log(user);
  // console.log(dd);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 px-4 sm:px-32 drop-shadow-md text-black bg-white h-auto sm:h-[80px]">
      <a
        href="/"
        className="flex items-center justify-center rounded-full bg-black w-[60px] h-[60px]"
      >
        <p className="text-white">LOGO</p>
      </a>
      <div className="flex flex-col sm:flex-row items-center sm:mt-0 sm:ml-[50px]">
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
          <div className="w-[10px]"></div>
          <button onClick={() => setDd(!dd)}>
            <FontAwesomeIcon icon={faCaretDown} className="text-[20px]" />
          </button>

          {/* <!-- Dropdown menu --> */}
          {dd ? (
            <div class="w-[120px]  h-[150px] z-50 absolute bottom-[-155px] right-[200px] sm:right-[145px] bg-white divide-y  rounded-sm shadow w-44">
              <div className="flex flex-col gap-1 items-center justify-center pt-2">
                <img
                  src={imageUser}
                  className=" w-[35px] h-[35px] rounded-full"
                />
                <p className="text-md font-bold text-[#2A4B6A]">
                  {user.email}
                </p>
                <div className=" w-[95%]  border-[#2A4B6A] border-b-[1px]"></div>
              </div>
              <div className="border-none px-2 pt-2 flex flex-col items-start">
                <button className="text-[#2A4B6A]  text-start font-bold">
                  Profile
                </button>
                <button
                  onClick={logout}
                  className=" text-[#2A4B6A] text-start font-bold"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
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
