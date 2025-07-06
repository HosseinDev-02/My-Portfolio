import * as React from "react";
const ArrowLeftIcon = ({ width, height, color, className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M9.57 5.92999L3.5 12L9.57 18.07"
            stroke={color || "currentColor"}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.4999 12H3.66992"
            stroke={color || "currentColor"}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default ArrowLeftIcon;
