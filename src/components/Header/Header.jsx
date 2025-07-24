"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WhatsappIcon from "../icons/WhatsappIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";
import { useEffect } from "react";

function Header() {
    const [userScroll, setUserScroll] = useState(false);

    useEffect(() => {
        if (document.documentElement.scrollTop > 250) {
            console.log("header fixed");
            setUserScroll(true);
        } else {
            console.log("header top");
            setUserScroll(false);
        }
        window.addEventListener("scroll", (e) => {
            const scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 250) {
                console.log("header fixed");
                setUserScroll(true);
            } else {
                console.log("header top");
                setUserScroll(false);
            }
        });
    }, []);

    const menuLinks = [
        {
            id: 1,
            title: "درباره من",
            href: "#",
        },
        {
            id: 2,
            title: "مهارت ها",
            href: "#",
        },
        {
            id: 3,
            title: "نمونه کارها",
            href: "#",
        },
        {
            id: 4,
            title: "وبلاگ",
            href: "#",
        },
        {
            id: 5,
            title: "تماس با من",
            href: "#",
        },
    ];

    const socialMediaLinks = [
        {
            id: 1,
            title: "whatsapp",
            href: "#",
        },
        {
            id: 2,
            title: "linkedin",
            href: "#",
        },
        {
            id: 3,
            title: "instagram",
            href: "#",
        },
        {
            id: 4,
            title: "telegram",
            href: "#",
        },
    ];

    const setSocialMediaIcon = (linkTitle) =>
        (linkTitle.includes("whatsapp") && WhatsappIcon) ||
        (linkTitle.includes("linkedin") && LinkedInIcon) ||
        (linkTitle.includes("instagram") && InstagramIcon) ||
        (linkTitle.includes("telegram") && TelegramIcon);

    return (
        <header
            className={`fixed left-0 md:left-12 xl:left-40 right-0 md:right-12 xl:right-40 top-0 md:top-6 lg:top-8 z-40 bg-gradient-to-l from-background to-section md:rounded-xl transition-all duration-300 shadow-[0px_2px_10px_4px_rgba(0,0,0,45%)] md:shadow-none ${
                userScroll
                    ? "!top-0 !left-0 !right-0 !rounded-none md:!shadow-[0px_2px_10px_4px_rgba(0,0,0,45%)]"
                    : ""
            }`}
        >
            <div className="flex items-center justify-between h-20 px-3 lg:px-6">
                {/* Logo */}
                <div className="flex flex-row-reverse sm:flex-row items-center justify-between sm:justify-start gap-2.5 w-full sm:w-auto">
                    <Link
                        href="#"
                        className="block font-HerrVonMuellerhoff-Regular text-4xl relative h-14 w-18"
                    >
                        <Image alt="logo" fill src="/images/primary-logo.png" />
                        {/* <LogoIcon width="72px" height="56px" /> */}
                    </Link>
                    <div className="block lg:hidden relative w-7 h-6">
                        <span className="absolute right-0 top-0 bg-white w-full h-0.5 rounded-xl"></span>
                        <span className="absolute right-0 top-0 bottom-0 my-auto bg-white w-3/4 h-0.5 rounded-xl"></span>
                        <span className="absolute right-0 bottom-0 bg-white w-full h-0.5 rounded-xl"></span>
                    </div>
                </div>
                {/* Menu */}
                <ul className="hidden lg:flex items-center gap-10 font-IransansWeb-Medium">
                    {menuLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                className="transition-colors duration-300 hover:text-primary"
                                href={link.href}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Social Media Links */}
                <div className="hidden sm:flex items-center gap-2">
                    {socialMediaLinks.map((link) => {
                        const Icon = setSocialMediaIcon(link.title);
                        return (
                            <Link
                                className="flex items-center justify-center rounded w-10 h-10 shadow-md bg-box transition-all duration-300 hover:text-primary"
                                key={link.id}
                                href={link.href}
                            >
                                <Icon
                                    color="currentColor"
                                    width={22}
                                    height={22}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;
