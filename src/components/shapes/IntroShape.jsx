'use client'
import React from "react";

function IntroShape({color, className}) {
    return (
        <svg
            id="intro-shape"
            viewBox="0 0 1280 630"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
        >
            <path
                d="M613 0L601 21C589 42 565 84 573 126C581 168 621 210 627.2 252C633.3 294 605.7 336 574 378C542.3 420 506.7 462 509.5 504C512.3 546 553.7 588 574.3 609L595 630L0 630L0 609C0 588 0 546 0 504C0 462 0 420 0 378C0 336 0 294 0 252C0 210 0 168 0 126C0 84 0 42 0 21L0 0Z"
                fill={color}
                strokeLinecap="round"
                strokeLinejoin="miter"
            />
        </svg>
    );
}

export default IntroShape;
