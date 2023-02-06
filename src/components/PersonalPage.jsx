import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CancelArror from "../assets/cancel-arrow.png";
import CV from "./CV";

const PersonalPage = () => {
    const { register, handleSubmit, watch } = useForm();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");

    return (
        <div className="flex">
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
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="text-[#2E2E2E] font-light text-sm mt-2">
                            მინიმუმ 2 ასო, ქართული ასოები
                        </span>
                    </div>
                    <div className="flex-col ml-14">
                        <h1 className="font-medium text-[#000000] text-base">გვარი</h1>
                        <input
                            type="text"
                            placeholder="ჩხარტიშვილი"
                            className="border border-[#BCBCBC] rounded w-[371px] py-2 px-3 mt-4"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <span className="text-[#2E2E2E] font-light text-sm mt-2">
                            მინიმუმ 2 ასო, ქართული ასოები
                        </span>
                    </div>
                </form>

                <div className="pl-36 mt-11">
                    <div className="flex flex-row gap-5 items-center">
                        <h1>პირადი ფოტოს ატვირთვა</h1>
                        <input type="file" />
                    </div>
                    <div className="flex flex-col mt-11 gap-2">
                        <h1>ჩემს შესახებ (არასავალდებულო)</h1>
                        <input
                            placeholder="ზოგადი ინფო შენს შესახებ"
                            className="border rounded border-[#BCBCBC] w-[798px] pb-16 pl-3 pt-4"
                            onChange={(e) => setAbout(e.target.value)}
                        ></input>
                    </div>
                    <div className="mt-6 gap-2">
                        <h1>ელ.ფოსტა</h1>
                        <input
                            type="text"
                            placeholder="lazare111@rebderry.ge"
                            className="border rounded border-[#BCBCBC] w-[798px] py-[14px] pl-3"
                            onChange={(e) => setMail(e.target.value)}

                        />
                        <span className="text-[#2E2E2E] font-light text-sm mt-2">
                            უნდა მთავრდებოდეს @redberry.ge-ით
                        </span>
                    </div>
                    <div className="mt-6 gap-2">
                        <h1>მობილურის ნომერი</h1>
                        <input
                            type="text"
                            placeholder="+995 551 12 34 56"
                            className="border rounded border-[#BCBCBC] w-[798px] py-[14px] pl-3"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span className="text-[#2E2E2E] font-light text-sm mt-2">
                            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                        </span>
                    </div>
                </div>
                <div className="flex justify-end text-end mt-24">
                    <button className="bg-[#6B40E3] text-white px-[35px] py-[14px] mr-5 rounded">შემდეგი</button>
                </div>
            </div>
            <CV name={name} lastName={lastName} mail={mail} phone={phone} about={about} />
        </div>
    );
};

export default PersonalPage;
