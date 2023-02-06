import React, { useState } from "react";
import GmailIcon from "../assets/Vector.png";
import PhoneIcon from "../assets/Vector2.png";
import ProfileImg from "../assets/profile-img.png";
import { MdAlternateEmail } from 'react-icons/md'

const CV = ({ name, lastName, mail, phone, about, image }) => {
    return (
        <div className="w-1/2 flex pl-[262px]">
            <div className="flex flex-col mt-16">
                <div className="flex gap-5">
                    <h1 className="text-[#F93B1D] font-bold text-[34px]">{name}</h1>
                    <h1 className="text-[#F93B1D] font-bold text-[34px]">{lastName}</h1>
                </div>
                <div className="">
                    <h2 className="flex items-center mt-5 text-[#1A1A1A] text-lg mb-3">
                        {/* <img src={GmailIcon} alt="gmail-icon" className="w-4 h-4 mr-3" /> */}
                        {mail}
                    </h2>
                    <h2 className="flex items-center text-[#1A1A1A] text-lg">
                        {/* <img src={PhoneIcon} alt="phone-icon" className="w-4 h-4 mr-3" /> */}
                        {phone}
                    </h2>
                </div>
                <h3 className="text-[#F93B1D] text-lg font-bold mt-8 mb-3">
                    {/* ჩემს შესახებ */}
                </h3>
                <p className="max-w-[423px]">
                    {about}
                </p>
            </div>
            <div className="mt-12 ml-6">
                {/* <img src="" alt="" className="w-[246px] h-[246px]" /> */}
            </div>
        </div>
    );
};

export default CV;
