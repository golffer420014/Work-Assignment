import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faLock,
  faMailBulk,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faImage } from "@fortawesome/free-regular-svg-icons";

import { useHistory } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// data json
import CountryCodes from "../json/CountryCodes.json";
import Province from "../json/from.json";

const SignUp = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [state, setState] = useState({
    email: "",
    password: "",
    conPassword: "",
    company: "",
    texId: "",
    name: "",
    country: "",
    phone: "",
    website: "",
    address: "",
    stateProvince: "",
    subDi: "",
    city: "",
    zip: "",
  });

  const {
    email,
    password,
    conPassword,
    company,
    texId,
    name,
    country,
    phone,
    website,
    address,
    stateProvince,
    subDi,
    city,
    zip,
  } = state;

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const submitForm = () => {
    localStorage.setItem("userDetail", JSON.stringify(state));

    localStorage.setItem("image", image);
    history.push("/");
  };

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  console.log(state);
  console.log(image);

  return (
    <>
      {/* modal image */}
      <div className="flex justify-center h-screen absolute ">
        <dialog id="my_modal_1" className=" border-8 border-[#2A4B6A]">
          <div className="w-[300px] h-[300px] ">
            <img
              src={image}
              className="w-[300px] h-[300px] bg-cover bg-center"
            />
            <div className="absolute top-3 right-3 p-2 py-0 bg-black rounded-full">
              <form method="dialog">
                <button className="text-white outline-none">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/*  */}
      <div className="flex  justify-center h-screen">
        <form onSubmit={submitForm}>
          <div className="flex flex-col items-center  w-[500px] sm:w-[1263px] sm:h-[80vh] h-[1650px] my-6 sm:mt-6 py-[35px] border shadow-md shadow-gray-600/30">
            <div>
              <div className="flex justify-center">
                {/* img */}
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-[100px] h-[100px] rounded-full border border-[#2A4B6A] cursor-pointer overflow-hidden relative"
                >
                  {image && (
                    <div
                      className="relative w-full h-full bg-cover bg-center rounded-full object-cover transition-transform transform-gpu "
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row items-center justify-center w-[100px] h-[100px] hover:bg-black m-auto opacity-0 transition-opacity  hover:opacity-45">
                        <div
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          <FontAwesomeIcon
                            icon={faEye}
                            className="text-[#ffff] text-[20px]"
                          />
                        </div>
                        <div onClick={() => setImage(null)}>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="text-[#ffff] text-[20px]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {!image && (
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faImage}
                        className="text-[#2A4B6A] text-[40px]"
                      />
                      <p className="absolute bottom-6 left-8 text-[#2A4B6A] text-[30px] ">
                        +
                      </p>
                    </div>
                  )}
                  {!image && (
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  )}
                </label>
              </div>
              {/* email pass conPass */}
              <div className="flex flex-col gap-5 my-4">
                <div className="flex flex-col  sm:flex-row gap-4">
                  {/* email */}
                  <div>
                    <p>Email</p>
                    <div className="p-2 border flex  items-center ">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-[#2A4B6A] text-[18px]"
                      />
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[300px]"
                        onChange={inputValue("email")}
                        value={email}
                      />
                    </div>
                  </div>
                  {/* password */}
                  <div>
                    <p>Password</p>
                    <div className="p-2 border flex items-center">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-[#2A4B6A] text-[18px]"
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[300px]"
                        onChange={inputValue("password")}
                        value={password}
                      />
                    </div>
                  </div>
                  {/* conPass */}
                  <div>
                    <p>Confirm Password</p>
                    <div className="p-2 border flex items-center">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-[#2A4B6A] text-[18px]"
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[300px]"
                        onChange={inputValue("conPassword")}
                        value={conPassword}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* information */}
              {/* section 1 */}
              <h1 className="font-bold text-[#2A4B6A] mt-5 text-[20px]">
                Information
              </h1>
              <div className="flex flex-col gap-5 my-5 ">
                <div className="flex flex-col  sm:flex-row gap-4">
                  {/* company */}
                  <div>
                    <p>Company Name</p>
                    <div className="p-2 border flex  items-center ">
                      <input
                        type="text"
                        placeholder="Enter company name"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                        onChange={inputValue("company")}
                        value={company}
                      />
                    </div>
                  </div>
                  <div>
                    {/* tex id */}
                    <p>Tax ID</p>
                    <div className="p-2 border flex items-center">
                      <input
                        type="text"
                        placeholder="Enter Tax ID"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                        onChange={inputValue("texId")}
                        value={texId}
                      />
                    </div>
                  </div>
                  {/* full name */}
                  <div>
                    <p>Full Name</p>
                    <div className="p-2 border flex items-center">
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                        onChange={inputValue("name")}
                        value={name}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* section 2 */}
              <div className="flex flex-col gap-5 my-5 ">
                <div className="flex flex-col  sm:flex-row gap-4">
                  {/* company */}
                  <div>
                    <p>Country</p>
                    <div className="p-2 border flex items-center">
                      <select
                        className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                        onChange={inputValue("country")}
                        value={country}
                      >
                        <option value={country} disabled>
                          {country ? country : "Choose Country"}
                        </option>
                        {CountryCodes.map((c) => (
                          <option key={c.code} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div>
                    <p>Phone Number</p>
                    <div className="flex">
                      <div className="p-2 border flex items-center">
                        <select className=" focus:outline-none placeholder-gray-500 w-[70px]">
                          <option value={country} disabled>
                            {phone ? phone : "+XX"}
                          </option>
                          {CountryCodes.sort((a, b) =>
                            a.dial_code.localeCompare(b.dial_code)
                          ).map((c) => (
                            <option key={c.code} value={c.dial_code}>
                              {c.dial_code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-[10px]"></div>
                      {/* phone number */}
                      <input
                        type="number"
                        placeholder="Enter your phone"
                        className="px-2 focus:outline-none border placeholder-gray-500 w-[240px]"
                        onChange={inputValue("phone")}
                        value={phone}
                      />
                    </div>
                  </div>
                  {/* website */}
                  <div>
                    <p>Website</p>
                    <div className="p-2 border flex items-center">
                      <input
                        type="text"
                        placeholder="Enter website"
                        className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                        onChange={inputValue("website")}
                        value={website}
                      />
                    </div>
                  </div>
                </div>
                {/* section 3 */}
                <div className="flex flex-col gap-5  ">
                  <div className="flex flex-col  sm:flex-row gap-4">
                    {/* address */}
                    <div>
                      <p>Address</p>
                      <div className="p-2 border flex  items-center ">
                        <textarea
                          onChange={inputValue("address")}
                          value={address}
                          className="w-[320px] h-[110px] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex flex-col sm:flex-row mb-5 gap-4">
                        {/* State/Province */}
                        <div>
                          <p>State/Province</p>
                          <div className="p-2 border flex items-center">
                            <select
                              className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                              onChange={inputValue("stateProvince")}
                              value={stateProvince}
                            >
                              <option value={country} disabled>
                                {stateProvince
                                  ? stateProvince
                                  : "Choose Province"}
                              </option>
                              {Province.RECORDS.map((c) => (
                                <option key={c.code} value={c.name_th}>
                                  {c.name_th}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {/* subDi */}
                        <div>
                          <p>Sub-District</p>
                          <div className="p-2 border flex items-center">
                            <select
                              className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                              onChange={inputValue("subDi")}
                              value={subDi}
                            >
                              <option value={subDi} disabled>
                                {subDi
                                  ? subDi
                                  : "ไม่มีข้อมูล json ไม่สามารถนำมาแสดงได้"}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* city */}
                        <div>
                          <p>City/District</p>
                          <div className="p-2 border flex items-center">
                            <select
                              className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                              onChange={inputValue("city")}
                              value={city}
                            >
                              <option value={country} disabled>
                                {city
                                  ? city
                                  : "ไม่มีข้อมูล json ไม่สามารถนำมาแสดงได้"}
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* zip */}
                        <div>
                          <p>Zip Code</p>
                          <div className="p-2 border flex items-center">
                            <input
                              type="text"
                              placeholder="Enter Zip Code"
                              className="px-2 focus:outline-none placeholder-gray-500 w-[318px]"
                              onChange={inputValue("zip")}
                              value={zip}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-10  mt-10 gap-4">
                  <p className="bg-[#021e42] text-white font-medium p-2 px-8 rounded-full shadow-xl">
                    Cancel
                  </p>
                  <button className="bg-[#5fc198] text-white font-medium p-2 px-8 rounded-full shadow-xl">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

// console.log(country)

export default SignUp;
