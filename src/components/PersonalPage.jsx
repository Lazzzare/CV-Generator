import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CancelArror from "../assets/cancel-arrow.png";

const PersonalPage = () => {
    const { register, handleSubmit, watch } = useForm();
    return (
        <div className="h-screen w-1/2">
            <div className="flex pt-11">
                <div className="pl-12 flex">
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

            <form className="flex flex-row pl-[140px] mt-16">
                <div className="flex-col">
                    <h1 className="font-medium text-[#000000] text-base">სახელი</h1>
                    <input
                        type="text"
                        placeholder="ლაზარე"
                        className="border border-[#BCBCBC] rounded w-[371px] py-2 px-3 mt-4"
                    />
                    <span className="text-[#2E2E2E] font-light text-sm mt-2">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
                <div className="flex-col ml-14">
                    <h1 className="font-medium text-[#000000] text-base">გვარი</h1>
                    <input
                        type="text"
                        placeholder="ჩხარტიშვილი"
                        className="border border-[#BCBCBC] rounded w-[371px] py-2 px-3 mt-4"
                    />
                    <span className="text-[#2E2E2E] font-light text-sm mt-2">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
            </form>
        </div>
    );
};

export default PersonalPage;
