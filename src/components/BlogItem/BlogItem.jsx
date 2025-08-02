import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

function BlogItem() {
    return (
        <div className="group rounded-md shadow-[0_0_8px_1px_rgba(0,0,0,40%)] overflow-hidden">
            {/* Blog Picture */}
            <div className="relative h-[250px] flex items-center justify-center">
                {/* h-[350px] -> h-[250px] */}
                {/* <Image
                    fill
                    objectFit="cover"
                    alt="image"
                    src="/images/projects/img-1.jpg"
                /> */}
                <h5 className="font-lobster text-6xl flex items-center flex-col gap-1">
                    <span>Coming</span>
                    <span>Soon</span>
                </h5>
            </div>
            {/* Blog Content */}
            <div className="py-4 px-2 mt-2">
                <h4 className="font-IransansWeb-Bold text-xl line-clamp-2">
                    <Link href="#">بزودی قرار میگیرد ...</Link>
                </h4>
                <div className="flex items-center justify-between mt-8">
                    {/* Blog Date */}
                    <span className="text-xs font-IransansWeb-Medium">
                        28 خرداد 1404
                    </span>
                    {/* Blog Show More */}
                    <Link
                        className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
                        href="#"
                    >
                        <span className="font-IransansWeb-Medium text-sm">
                            مشاهده
                        </span>
                        <ArrowLeftIcon width={16} height={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
