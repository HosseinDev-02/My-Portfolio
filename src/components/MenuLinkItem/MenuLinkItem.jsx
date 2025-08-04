import Link from "next/link";
import React from "react";

function MenuLinkItem({ href, title }) {
    return (
        <li>
            <Link
                className="transition-colors duration-300 hover:text-primary"
                href={href}
            >
                {title}
            </Link>
        </li>
    );
}

export default MenuLinkItem;
