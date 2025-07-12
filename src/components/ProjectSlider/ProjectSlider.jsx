"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftUpIcon from "../icons/ArrowLeftUpIcon";
function ProjectSlider({ title, description, images, href }) {
    return (
        <div className="flex justify-center">
            <div className="w-[80%]">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper h-[500px]"
                >
                    {images.map((img) => (
                        <SwiperSlide
                            key={img}
                            className="relative h-[100px] w-full shadow-[0_0_8px_4px_rgba(0,0,0,80%)] rounded-xl overflow-hidden"
                        >
                            <Image src={img} alt="" objectFit="cover" fill />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Project Information */}
                <div className="flex items-center justify-between py-8">
                    <h3 className="font-IransansWeb-Bold text-xl transition-colors duration-300 hover:text-primary">
                        <Link href={href} target="_blank" className="">{title}</Link>
                    </h3>
                    <Link target="_blank" className="group flex items-center justify-center rounded-md border-white/30 transition-all duration-300 hover:bg-white hover:border-white hover:text-background border w-10 h-10" href={href}>
                        <ArrowLeftUpIcon className='group-hover:-rotate-45 transition-all duration-300' width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlider;
