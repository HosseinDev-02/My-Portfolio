"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { menuLinks } from "@/data";
import MenuLinkItem from "../MenuLinkItem/MenuLinkItem";

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

    return (
        <>
            <header
                className={`fixed left-0 md:left-12 xl:left-40 right-0 md:right-12 xl:right-40 top-0 md:top-6 lg:top-8 z-40 bg-gradient-to-l from-background to-section md:rounded-xl transition-all duration-300 shadow-[0px_2px_10px_4px_rgba(0,0,0,45%)] md:shadow-none ${
                    userScroll
                        ? "!top-0 !left-0 !right-0 !rounded-none md:!shadow-[0px_2px_10px_4px_rgba(0,0,0,45%)]"
                        : ""
                }`}
            >
                <div className="flex items-center justify-between h-20 px-3 lg:px-6">
                    {/* Logo */}
                    <Link
                        href="#"
                        className="block font-HerrVonMuellerhoff-Regular text-4xl relative h-14 w-18"
                    >
                        <Image alt="logo" fill src="/images/primary-logo.png" />
                        {/* <LogoIcon width="72px" height="56px" /> */}
                    </Link>
                    {/* Menu */}
                    <ul className="hidden md:flex items-center gap-10 font-IransansWeb-Medium">
                        {menuLinks.map((link) => (
                            <MenuLinkItem key={link.id} {...link} />
                        ))}
                    </ul>
                    {/* Contact Me Button */}
                    <PrimaryButton
                        className={"!shrink-0"}
                        href={"#"}
                        title={"تماس با من"}
                    />
                </div>
            </header>
            <div className="bg-box fixed bottom-0 left-0 right-0 py-8 md:hidden z-50 shadow-[0px_-2px_10px_4px_rgba(0,0,0,45%)] bg-gradient-to-l from-background to-section">
                <ul className="flex items-center justify-around">
                    {menuLinks.map(link => (
                        <MenuLinkItem key={link.id} {...link}/>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
