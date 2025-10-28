"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuLinks, socialMediaLinks } from "@/data";
import SocialMedia from "../SocialMedia/SocialMedia";
import { scrollToSection } from "@/utils";

function Footer() {
    return (
        <footer className="bg-section px-4 md:px-0">
            {/* Footer Container */}
            <div className="container">
                {/* Footer Content */}
                <div className="flex flex-wrap justify-between gap-10 mb-4 pt-12 md:pt-20 pb-4">
                    {/* Footer About Me */}
                    <div className="max-w-[394px] w-full">
                        <Link
                            href="#"
                            className="block font-HerrVonMuellerhoff-Regular text-4xl relative h-14 w-18 mb-1"
                        >
                            <Image
                                alt="logo"
                                fill
                                src="/images/primary-logo.png"
                            />
                            {/* <LogoIcon width="72px" height="56px" /> */}
                        </Link>
                        <p className="font-IransansWeb-Medium">
                            توسعه دهنده فرانت اند با علاقه‌مندی ویژه به طراحی و
                            پیاده‌سازی رابط‌های کاربری مدرن و کاربرپسند. هدف من
                            ایجاد وب‌سایت‌هایی سریع، بهینه و ساده برای استفاده‌ی
                            کاربران است. من به یادگیری مداوم، حل چالش‌های جدید و
                            ارتقای مهارت‌هام علاقه دارم و همیشه تلاش می‌کنم در
                            هر پروژه‌ای بهترین نتیجه رو ارائه بدم.
                        </p>
                    </div>
                    {/* Footer Fast Links */}
                    <div className="max-w-[110px] w-full">
                        <h5 className="font-IransansWeb-Bold text-lg mb-8 text-white">
                            لینک سریع
                        </h5>
                        <ul className="flex flex-col gap-2 font-IransansWeb-Medium">
                            {menuLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.sectionTag);
                                        }}
                                        href={link.href}
                                        className="flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 md:group-hover:w-6 md:group-hover:bg-primary"></span>
                                        <span className="md:group-hover:text-primary transition-colors duration-300">
                                            {link.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Footer Contact Info */}
                    <div className="">
                        <h5 className="font-IransansWeb-Bold text-lg mb-8 text-white">
                            اطلاعات تماس
                        </h5>
                        <div className="flex flex-col gap-2">
                            {/* Address */}
                            <div className="">
                                <span className="font-IransansWeb-Medium">
                                    آدرس :{" "}
                                </span>
                                استان مرکزی ، شهرستان زرندیه ، شهر مامونیه
                            </div>
                            {/* Phone Number */}
                            <div className="">
                                <span className="font-IransansWeb-Medium">
                                    تلفن :{" "}
                                </span>
                                <span className="dir-ltr">
                                    +989930094221 | +989227342901
                                </span>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-1">
                                <span className="font-IransansWeb-Medium">
                                    ایمیل :
                                </span>
                                <a
                                    href="mailto:rostamidev2002@gmail.com"
                                    className="dir-ltr"
                                >
                                    Rostamidev2002@gmail.com
                                </a>
                            </div>
                            {/* Social Medias */}
                            <div className="flex items-center gap-5 mt-3">
                                {socialMediaLinks.map((link) => (
                                    <SocialMedia
                                        className="shadow-md text-primary transition-all duration-300 hover:text-white hover:border-white rounded-full"
                                        key={link.id}
                                        {...link}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copy Right */}
                <div className="py-4 border-t border-input-border">
                    <p className="font-IransansWeb-Medium">
                        توسعه داده شده با{" "}
                        <span className="text-primary"> ❤ </span> توسط حسین
                        رستمی
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
