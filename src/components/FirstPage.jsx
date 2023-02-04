import React from "react";
import HeaderLogo from "../assets/logo.png";
import BodyLogo from "../assets/logo2.png";

const FirstPage = () => {
    return (
        <div className="bg">
            <div>
                <img
                    src={HeaderLogo}
                    alt="redberry-logo"
                    className="py-[25px] pl-[90px]"
                />
                <hr className="w-[90%] border-1 border-black items-center mx-auto pt-6" />
            </div>

            <div className="btn">
                <button
                    href="#"
                    className="w-[464px] px-[60px] py-[18px] bg-[#1A1A1A] rounded-lg text-white"
                >
                    რეზიუმეს დამატება
                </button>
                <div className="absolute top-[-50px] right-[-140px] -z-10">
                    <img src={BodyLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
