import { FormEvent, useRef, useState } from "react";
import BackImg from "./assets/bg-img.png";
import arrow from "./assets/arrow.svg";
import Map from "./Map";

const Home = () => {
  // const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    setInputValue("");
    // inputRef.current.blur();
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full h-72 max-h-[300px]">
          <img src={BackImg} alt="background" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-0 right-0 z-50">
          <div className="flex flex-col items-center w-full justify-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
              IP Address Tracker
            </h2>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="w-full flex justify-center"
            >
              <div className="w-4/5 md:w-2/5 flex items-center justify-center">
                <input
                  type="text"
                  value={inputValue}
                  // ref={inputRef}
                  className="py-[18px] lg:py-4 px-3 sm:px-6 placeholder-[#2c2c2c7a] text-sm sm:text-base lg:text-lg bg-white w-4/5 rounded-l-xl focus:outline-none"
                  placeholder="Search for any IP address or domain"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <button className="px-6 py-5 sm:py-[23px] rounded-r-xl text-white bg-black">
                  <img src={arrow} alt="Proceed" />
                </button>
              </div>
            </form>

            <div className="w-full mt-12 flex justify-center">
              <div className="w-full lg:w-4/5 xl:w-3/5 px-6 lg:px-0">
                <div className="bg-white rounded-2xl py-9 flex shadow flex-wrap md:flex-nowrap">
                  <div className="mb-6 xs:mb-0 basis-[100%] xs:basis-1/2 md:basis-1/4 text-center xs:text-left flex flex-col border-r px-8 pb-4 md:pb-0">
                    <h4 className="text-[#969696] font-semibold text-xs mb-3">
                      IP ADDRESS
                    </h4>
                    <h5 className=" text-xl lg:text-2xl font-500">
                      192.212.174.101
                    </h5>
                  </div>
                  <div className="mb-6 xs:mb-0 basis-[100%] xs:basis-1/2 md:basis-1/4 text-center xs:text-left flex flex-col border-r px-8 pb-4 md:pb-0">
                    <h4 className="text-[#969696] font-semibold text-xs mb-3">
                      LOCATION
                    </h4>
                    <h5 className=" text-xl lg:text-2xl font-500">
                      Brooklyn, NY 10001
                    </h5>
                  </div>
                  <div className="mb-6 xs:mb-0 basis-[100%] xs:basis-1/2 md:basis-1/4 text-center xs:text-left flex flex-col border-r px-8 pt-4 md:pt-0">
                    <h4 className="text-[#969696] font-semibold text-xs mb-3">
                      TIMEZONE
                    </h4>
                    <h5 className=" text-xl lg:text-2xl font-500">
                      UTC -05:00
                    </h5>
                  </div>
                  <div className="mb-6 xs:mb-0 basis-[100%] xs:basis-1/2 md:basis-1/4 text-center xs:text-left flex flex-col border-r px-8 pt-4 md:pt-0">
                    <h4 className="text-[#969696] font-semibold text-xs mb-3">
                      ISP
                    </h4>
                    <h5 className=" text-xl lg:text-2xl font-500">
                      SpaceX Starlink
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Home;
