import Link from "next/link";
import React from "react";

function PrimaryButton({ href, title, className, icon, onClick, type }) {
    const defaultClassName = 'flex items-center justify-center font-IransansWeb-Medium bg-primary rounded-md px-8 h-10 cursor-pointer transition-all duration-300 hover:opacity-80'
    return (
        <>
            {href ? (
                <Link
                    className={`${defaultClassName} ${icon && 'gap-2'} ${className}`}
                    href={href}
                >
                    <span>{title}</span>
                    {
                        icon && (
                            icon
                        )
                    }
                </Link>
            ) : (
                <button
                onClick={onClick}
                    className={`${defaultClassName} ${icon && 'gap-2'} ${className}`}
                    type={type}
                >
                    <span>{title}</span>
                    {
                        icon && (
                            icon
                        )
                    }
                </button>
            )}
        </>
    );
}

export default PrimaryButton;
