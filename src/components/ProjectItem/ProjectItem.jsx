import Image from "next/image";
import React from "react";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import Link from "next/link";

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
            <ProjectInfo title={title} href={href} />
        </Link>
    );
}

export default ProjectItem;
