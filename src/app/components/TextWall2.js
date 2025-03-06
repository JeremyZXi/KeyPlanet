"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TextWall2({ onClose }) {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={onClose} // Click outside to close
        >
            {/* 🔹 Background Image (StandardBG.png) */}
            <Image
                src="/StandardBG.png" // Ensure StandardBG.png is in /public/
                alt="Background"
                fill
                className="object-contain pointer-events-none"
            />

            {/* 📜 Transparent, Taller Scrollable Text Block */}
            <div
                className="absolute w-[80vw] max-w-[350px] h-[65vh] max-h-[400px] bg-transparent p-6 overflow-y-auto text-white border border-white rounded-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <h1 className="text-2xl font-bold mb-4">📜 Scrollable Transparent Text</h1>
                <p className="text-gray-200 font-bold">
                    This is a transparent scrollable text area. Users can read long content here without affecting the main layout.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec urna id purus tempus malesuada.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <p className="text-gray-200 font-bold mt-4">
                    Vestibulum tincidunt augue eget tellus pretium, eget dignissim magna ornare.
                    Suspendisse potenti. Proin vitae luctus sapien. Nulla facilisi. Integer pharetra urna at vehicula viverra.
                    Fusce tincidunt dapibus nulla, eget convallis odio lacinia id.
                </p>
                <p className="text-gray-200 font-bold mt-4">
                    Aenean ac lectus sed lacus tempus tempus. Integer aliquet justo ut turpis cursus, euismod posuere neque ultricies.
                    Ut blandit nulla ut ipsum tristique, id facilisis nunc facilisis. Aliquam erat volutpat.
                </p>
                {/* Repeat text blocks to ensure scrolling */}
            </div>
        </div>
    );
}