import Link from "next/link";
import React from "react";
import ArrowLeftUpIcon from "../icons/ArrowLeftUpIcon";

function ProjectInfo({ title, href, className }) {
    return (
        <div className={`flex items-center justify-between py-8 ${className}`}>
            <h3 className="font-IransansWeb-Bold text-xl transition-colors duration-300 hover:text-primary">
                {title}
            </h3>
            <span
                className="group flex items-center justify-center rounded-md border-white/30 transition-all duration-300 hover:bg-white hover:border-white hover:text-background border w-10 h-10"
            >
                <ArrowLeftUpIcon
                    className="hover:-rotate-45 transition-all duration-300"
                    width={24}
                    height={24}
                />
            </span>
        </div>
    );
}

export default ProjectInfo;
