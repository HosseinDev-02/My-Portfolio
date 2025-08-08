"use client";
import React from "react";
import CrossIcon from "../icons/CrossIcon";
import SuccessIcon from "../icons/SuccessIcon";

function MyCustomToast({ closeToast, title, msg, type }) {
    return (
        <div className="p-4 rounded-md max-w-sm w-full bg-background text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                {/* Status Icon */}
                <div className="flex items-center gap-2">
                    <SuccessIcon
                        width={22}
                        height={22}
                        color={"var(--color-green-400)"}
                    />
                    <h6 className="font-IransansWeb-Bold text-lg">{title}</h6>
                </div>

                {/* Close Button */}
                <button onClick={closeToast} className="cursor-pointer">
                    <CrossIcon
                        width={22}
                        height={22}
                        color={"var(--color-red-400)"}
                    />
                </button>
            </div>
            {/* Body */}
            <div>
                <p className="font-IransansWeb-Medium text-sm">{msg}</p>
            </div>
        </div>
    );
}

export default MyCustomToast;
