import React from "react";

function RegexIcon({ width, height, color }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="-1.6 -1.6 19.20 19.20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0}>
                <rect
                    x={-1.6}
                    y={-1.6}
                    width={19.2}
                    height={19.2}
                    rx={0}
                    fill="#7ed0ec"
                    strokeWidth={0}
                />
            </g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.012 2h.976v3.113l2.56-1.557.486.885L11.47 6l2.564 1.559-.485.885-2.561-1.557V10h-.976V6.887l-2.56 1.557-.486-.885L9.53 6 6.966 4.441l.485-.885 2.561 1.557V2zM2 10h4v4H2v-4z"
                />
            </g>
        </svg>
    );
}

export default RegexIcon;
