import Image from "next/image";
import Link from "next/link";
import React from "react";


function ProjectItem({ title, description, href, image }) {
    return (
        <Link
            className="overflow-hidden backdrop-blur-xs shadow-[0_0_12px_2px_rgba(0,0,0,80%)] rounded-xl"
            href={href}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="h-[550px] w-full bg-cover bg-no-repeat bg-center">
                
            </div>
            {/* <div className="px-4 py-8 w-full rounded-b-xl">
                <h4 className="font-IransansWeb-Bold text-white text-xl">
                    {title}
                </h4>
            </div> */}
        </Link>
    );
}

export default ProjectItem;
