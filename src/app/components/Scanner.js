"use client";

import { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Scanner({ onClose }) {
    const router = useRouter();
    const scannerRef = useRef(null);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    useEffect(() => {
        if (!scannerRef.current) return;

        const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });

        scanner.render(
            (decodedText) => {
                if (decodedText === "wangshenyushishabi") {
                    sessionStorage.setItem("scannedQR", decodedText); // Store scanned data
                    router.push("/selectLeftRight"); // Navigate to the new page
                } else {
                    alert("Invalid QR Code. Try again!");
                }
            },
            (error) => {
                console.warn("QR Scan Error:", error);
            }
        );

        return () => {
            scanner.clear();
        };
    }, [router]);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={onClose} // Click outside to close
        >
            {/* 🔹 Scanner UI (Scan.png as Full-Screen Background) */}
            <Image
                src="/Scan.png" // Ensure Scan.png is in /public/
                alt="Scanner Interface"
                fill
                className="object-contain pointer-events-none"
            />

            {/* 🔲 QR Scanner Area */}
            <div
                className="absolute bottom-[20vh] w-[50vw] h-[30vh] max-w-48 max-h-48 min-w-16 min-h-16 bg-transparent cursor-pointer"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div id="qr-reader" className="w-full h-full"></div>
            </div>
        </div>
    );
}