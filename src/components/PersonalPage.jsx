import React from "react";
import { Link } from "react-router-dom";
import CancelArror from "../assets/cancel-arrow.png";

const PersonalPage = () => {
    return (
        <div className="h-screen w-1/2 pt-11 flex">
            <div className="pl-12">
                <Link to="/">
                    <img src={CancelArror} alt="Cancel-arrow-icon" />
                </Link>
            </div>
            <div className="w-full">
                <div className="flex justify-between w-full pl-14 text-center">
                    <h1 className="text-[#1A1A1A] font-bold text-2xl">პირადი ინფო</h1>
                    <h2 className="text-[#1A1A1A] text-xl">1/3</h2>
                </div>
                <hr className="border-[#1A1A1A] mt-3 ml-14" />
            </div>
        </div>
    );
};

export default PersonalPage;
