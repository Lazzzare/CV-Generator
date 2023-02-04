import React from "react";
import HeaderLogo from "../assets/logo.png";
import BodyLogo from "../assets/logo2.png";

const FirstPage = () => {
    return (
        <div className="bg flex flex-col">
            <div>
                <img
                    src={HeaderLogo}
                    alt="redberry-logo"
                    className="py-[25px] pl-[90px]"
                />
                <hr className="w-[90%] border-1 border-black items-center mx-auto pt-6" />
            </div>

            <div className="flex justify-center mx-auto items-center">
                <button
                    href="#"
                    className="w-[464px] h-[60px] flex justify-center items-center mx-auto bg-black rounded-lg text-white"
                >
                    რეზიუმეს დამატება
                </button>
            </div>
        </div>
    );
};

export default FirstPage;
