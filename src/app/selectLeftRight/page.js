"use client";

import { useState } from "react";
import Image from "next/image";
import TextWall1 from "@/app/components/TextWall1"; // Import TextWall1

export default function SelectLeftRight() {
    const [showTextWall1, setShowTextWall1] = useState(false); // State to control TextWall1

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-2xl">
            {/* 🔹 Background Image (select.png with object-contain) */}
            <Image
                src="/select.png" // Ensure select.png is in /public/
                alt="Select Page Background"
                fill
                className="object-contain pointer-events-none"
            />

            {/* 🔹 Large Transparent Left/Right Buttons */}
            <div className="absolute flex gap-5 bottom-[10vh]">
                {/* 🔵 Left Button - Transparent */}
                <button
                    className="px-32 py-48 bg-transparent cursor-pointer"
                    onClick={() => alert("Still under development!")}
                ></button>

                {/* 🟢 Right Button - Transparent */}
                <button
                    className="px-32 py-48 bg-transparent cursor-pointer"
                    onClick={() => setShowTextWall1(true)}
                ></button>
            </div>

            {/* 🔹 TextWall1 Component (Only visible when showTextWall1 is true) */}
            {showTextWall1 && <TextWall1 onClose={() => setShowTextWall1(false)} />}
        </div>
    );
}