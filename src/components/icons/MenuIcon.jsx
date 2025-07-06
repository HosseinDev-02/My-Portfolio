"use client";
import React from "react";

function MenuIcon({ width, height, color }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.28307 19L20 19M19.9996 12L4 12M20 5L12.9719 5"
                stroke={color || "currentColor"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default MenuIcon;
