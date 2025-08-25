import Link from "next/link";
import React from "react";

function PrimaryButton({
    href,
    title,
    className,
    icon,
    onClick,
    type,
    download,
}) {
    const defaultClassName =
        "flex items-center justify-center font-IransansWeb-Medium shrink-0 bg-primary rounded-md px-8 h-10 cursor-pointer transition-all duration-300 hover:opacity-80";
    return (
        <>
            {href ? (
                <Link
                    download={download}
                    className={`${defaultClassName} ${
                        icon && "gap-2"
                    } ${className}`}
                    href={href}
                >
                    {title && <span>{title}</span>}
                    {icon && icon}
                </Link>
            ) : (
                <button
                    onClick={onClick}
                    className={`${defaultClassName} ${
                        icon && "gap-2"
                    } ${className}`}
                    type={type}
                >
                    {title && <span>{title}</span>}
                    {icon && icon}
                </button>
            )}
        </>
    );
}

export default PrimaryButton;
