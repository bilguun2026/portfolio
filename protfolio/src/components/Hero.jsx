import React from "react";

function Hero() {
    return (
        <div className="bg-zinc-900 w-full row-span-1">
            <div className="relative h-full w-full">
                <div className="absolute top-32 left-16 bg-zinc-700 w-72 h-72 rounded-2xl shadow-2xl shadow-red-400"></div>
                <div className="absolute top-48 left-32 bg-white w-96 h-96 rounded-2xl shadow-2xl shadow-teal-400"></div>

            </div>
        </div>
    )
}

export default Hero