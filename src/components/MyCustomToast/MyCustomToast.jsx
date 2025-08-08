'use client'
import React from "react";
import LikeIcon from "../icons/LikeIcon";
import CrossIcon from "../icons/CrossIcon";

function MyCustomToast({ closeToast, toastProps }) {
    return (
        <div className="p-4 rounded-md max-w-sm w-full bg-background shadow-md shadow-background">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                {/* Status Icon */}
                <LikeIcon
                    width={20}
                    height={20}
                    color={"var(--color-green-500)"}
                />
                {/* Close Button */}
                <button onClick={closeToast}>
                    <CrossIcon width={20} height={20} color={'var(--color-red-500)'}/>
                </button>
            </div>
            {/* Body */}
            <div>
                <p>پیام شما با موفقیت ارسال شد .</p>
            </div>
        </div>
    );
}

export default MyCustomToast;
