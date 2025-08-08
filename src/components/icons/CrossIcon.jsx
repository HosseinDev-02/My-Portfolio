import React from "react";

function CrossIcon({ width, height, color }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 18L6 6M18 6L6 18"
                stroke={color || "currentColor"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default CrossIcon;
