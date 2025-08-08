import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowLeftUpIcon from "../icons/ArrowLeftUpIcon";

function ProjectItem({ image, title, href }) {
    return (
        <Link target="_blank" href={href} className="group">
            <div className="h-[500px] relative w-full rounded-xl overflow-hidden">
                <Image
                    layout="fill"
                    objectPosition="top"
                    src={image}
                    objectFit="cover"
                    alt={title}
                    className="transition-all duration-500 group-hover:scale-[1.05]"
                />
            </div>
            {/* Project Information */}
            <div
                className={`flex items-center justify-between py-8 $`}
            >
                <h3 className="font-IransansWeb-Bold text-xl transition-colors duration-300 hover:text-primary">
                    {title}
                </h3>
                <span className="group flex items-center justify-center rounded-md border-border transition-all duration-300 hover:bg-white hover:border-white hover:text-background border w-10 h-10">
                    <ArrowLeftUpIcon
                        className="hover:-rotate-45 transition-all duration-300"
                        width={24}
                        height={24}
                    />
                </span>
            </div>
        </Link>
    );
}

export default ProjectItem;
