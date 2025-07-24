import Link from "next/link";
import React from "react";
import ArrowLeftUpIcon from "../icons/ArrowLeftUpIcon";

function ProjectInfo({title, href, className}) {
    return (
        <div className={`flex items-center justify-between py-8 ${className}`}>
            <h3 className="font-IransansWeb-Bold text-xl transition-colors duration-300 hover:text-primary">
                <Link href={href} target="_blank" className="">
                    {title}
                </Link>
            </h3>
            <Link
                target="_blank"
                className="group flex items-center justify-center rounded-md border-white/30 transition-all duration-300 hover:bg-white hover:border-white hover:text-background border w-10 h-10"
                href={href}
            >
                <ArrowLeftUpIcon
                    className="group-hover:-rotate-45 transition-all duration-300"
                    width={24}
                    height={24}
                />
            </Link>
        </div>
    );
}

export default ProjectInfo;
