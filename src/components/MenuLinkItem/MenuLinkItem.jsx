import Link from "next/link";
import React from "react";

function MenuLinkItem({ href, title, sectionTag, scrollSection, onClick, className }) {
    return (
        <li
            onClick={() => onClick(sectionTag)}
            className={`transition-colors duration-300 hover:text-primary cursor-pointer ${className}`}
        >
            {title}
        </li>
    );
}

export default MenuLinkItem;
