import Link from "next/link";
import React from "react";

function MenuLinkItem({ href, title, sectionTag, scrollSection, onClick }) {
    return (
        <li>
            <Link onClick={(e) => onClick(e, sectionTag)}
                className={`transition-colors duration-300 hover:text-primary ${scrollSection === sectionTag && 'text-primary'}`}
                href={href}
            >
                {title}
            </Link>
        </li>
    );
}

export default MenuLinkItem;
