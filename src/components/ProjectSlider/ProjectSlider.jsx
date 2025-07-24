"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
// import required modules
import { EffectCards, Pagination } from "swiper/modules";
import Image from "next/image";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
function ProjectSlider({ title, description, images, href }) {
    return (
        <>
            <div className="hidden md:flex justify-center">
                <div className="w-full md:w-[80%]">
                    <Swiper
                        effect={"cards"}
                        cardsEffect={{ perSlideOffset: 5 }}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper h-[500px]"
                    >
                        {images.map((img) => (
                            <SwiperSlide
                                key={img}
                                className="relative w-full shadow-[0_0_8px_4px_rgba(0,0,0,80%)] rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={img}
                                    alt=""
                                    objectFit="cover"
                                    fill
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Project Information */}
                    <ProjectInfo title={title} href={href} />
                </div>
            </div>
            <div className="md:hidden">
                <Swiper
                    pagination={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="h-[500px] project-slider-two !pb-8"
                >
                    {images.map((img) => (
                        <SwiperSlide
                            key={img}
                            className="relative w-full shadow-[0_0_8px_4px_rgba(0,0,0,80%)] rounded-xl overflow-hidden"
                        >
                            <Image src={img} alt="" objectFit="cover" fill />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Project Information */}
                <ProjectInfo title={title} href={href} className='!py-4' />
            </div>
        </>
    );
}

export default ProjectSlider;
