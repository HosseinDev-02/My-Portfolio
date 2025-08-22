"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuLinks, socialMediaLinks } from "@/data";
import SocialMedia from "../SocialMedia/SocialMedia";
import { scrollToSection } from "@/utils";

function Footer() {
    return (
        <footer className="bg-background px-4 md:px-0">
            {/* Footer Container */}
            <div className="container">
                {/* Footer Content */}
                <div className="flex flex-wrap justify-between gap-10 mb-4 pt-12 md:pt-20 pb-4">
                    {/* Footer About Me */}
                    <div className="max-w-[394px] w-full">
                        <Link
                            href="#"
                            className="block font-HerrVonMuellerhoff-Regular text-4xl relative h-14 w-18 mb-6"
                        >
                            <Image
                                alt="logo"
                                fill
                                src="/images/primary-logo.png"
                            />
                            {/* <LogoIcon width="72px" height="56px" /> */}
                        </Link>
                        <p className="font-IransansWeb-Medium">
                            توسعه دهنده فرانت اند توانمند و خلاق با انگیزه بالا
                            برای حل چالش های فنی و بهبود تجربه کاربری . علاقه
                            مند به یادگیری فناوری های جدید و ایجاد رابط های مدرن
                            و بهینه.
                        </p>
                    </div>
                    {/* Footer Fast Links */}
                    <div className="">
                        <h5 className="font-IransansWeb-Bold text-lg mb-6 text-white">
                            لینک سریع
                        </h5>
                        <ul className="flex flex-col items-start gap-2 font-IransansWeb-Medium">
                            {menuLinks.map((link) => (
                                <li
                                    className="transition-colors duration-300 hover:text-primary before:transition-colors before:duration-300 hover:before:bg-primary relative before:absolute before:w-3 before:h-1 before:rounded before:bg-white before:right-0 pr-5 before:top-0 before:bottom-0 before:my-auto"
                                    key={link.id}
                                >
                                    <Link
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.sectionTag);
                                        }}
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Footer Contact Info */}
                    <div className="">
                        <h5 className="font-IransansWeb-Bold text-lg mb-6 text-white">
                            تماس با من
                        </h5>
                        <div className="flex flex-col gap-2">
                            {/* Address */}
                            <div className="flex items-center gap-1">
                                <span className="font-IransansWeb-Medium">
                                    آدرس :
                                </span>
                                <span>
                                    استان مرکزی ، شهرستان زرندیه ، شهر مامونیه
                                </span>
                            </div>
                            {/* Phone Number */}
                            <div className="flex items-center gap-1">
                                <span className="font-IransansWeb-Medium">
                                    تلفن :
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
                            <div className="flex items-center gap-2">
                                {socialMediaLinks.map((link) => (
                                    <SocialMedia
                                        className="w-8 h-8"
                                        key={link.id}
                                        {...link}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copy Right */}
                <div className="py-4 border-t border-border">
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
