import React from "react";

function ArrowLeftUpIcon(props) {
    return (
        <svg
            width={props.width || 24}
            height={props.height || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className || ''}
        >
            <path
                d="M17 17L7 7M7 7V15M7 7H15"
                stroke={props.color || 'currentColor'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ArrowLeftUpIcon;
