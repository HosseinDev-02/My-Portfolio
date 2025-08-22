import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowLeftUpIcon from "../icons/ArrowLeftUpIcon";

function ProjectItem({ image, title, href, description, skills, github }) {
    return (
        <div className="">
            {/* Project Image */}
            <div className="h-[500px] relative group w-full rounded-xl overflow-hidden">
                <Image
                    layout="fill"
                    objectPosition="top"
                    src={image}
                    objectFit="cover"
                    alt={title}
                    className="transition-all duration-500 group-hover:scale-[1.05]"
                />
                {/* Project OverLay */}
                <div className="absolute overflow-y-auto inset-0 bg-background/95 transition-all duration-300 p-6 invisible opacity-0 group-hover:opacity-100 group-hover:visible flex flex-col items-start gap-4 divide-y divide-border">
                    {/* Project Description */}
                    <p className="font-IransansWeb-Medium text-white leading-8 pb-4">
                        <span className="font-IransansWeb-Bold">توضیحات :</span>{" "}
                        {description}
                    </p>
                    {/* Project Technologies */}
                    <div className="flex items-center gap-1 flex-wrap text-white font-IransansWeb-Medium pb-4 w-full">
                        <span className="font-IransansWeb-Bold">
                            فناوری های استفاده شده :
                        </span>
                        {skills.map((skill, index) => (
                            <span key={skill}>
                                {skill} {index < skills.length - 1 && "-"}
                            </span>
                        ))}
                    </div>
                    {/* Project Live Links */}
                    <div className="flex items-center gap-2 flex-wrap pb-4 w-full">
                        <span className="font-IransansWeb-Bold shrink-0">
                            لینک آنلاین :
                        </span>
                        <Link
                            href={href}
                            target="_blank"
                            className="font-IransansWeb-Medium transition-colors duration-300 hover:text-primary dir-ltr"
                        >
                            {href}
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <span className="font-IransansWeb-Bold shrink-0">
                            سورس کد پروژه :
                        </span>
                        <Link
                            href={href}
                            target="_blank"
                            className="font-IransansWeb-Medium transition-colors duration-300 hover:text-primary dir-ltr"
                        >
                            {github}
                        </Link>
                    </div>
                </div>
            </div>
            {/* Project Information */}
            <div className={`flex items-center justify-between py-8 $`}>
                <h3 className="font-IransansWeb-Bold text-xl transition-colors duration-300 hover:text-primary">
                    <Link href={href} target="_blank">
                        {title}
                    </Link>
                </h3>
                <Link
                    href={href}
                    target="_blank"
                    className="group flex items-center justify-center rounded-md border-border transition-all duration-300 hover:bg-white hover:border-white hover:text-background border w-10 h-10"
                >
                    <ArrowLeftUpIcon
                        className="hover:-rotate-45 transition-all duration-300"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProjectItem;
