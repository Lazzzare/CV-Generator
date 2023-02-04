import React from "react";
import HeaderLogo from "../assets/logo.png";
import BodyLogo from "../assets/logo2.png";

const FirstPage = () => {
    return (
        <div className="bg ">
            <img
                src={HeaderLogo}
                alt="redberry-logo"
                className="py-[25px] pl-[90px]"
            />
            <hr className="w-[90%] border-1 border-black items-center mx-auto pt-6" />

            <div>
                <a href="#" className="bg-black px-[126px] py-[18px] rounded-lg text-white">რეზიუმეს დამატება</a>
            </div>
        </div>
    );
};

export default FirstPage;
