"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { menuLinkIds, menuLinks } from "@/data";
import MenuLinkItem from "../MenuLinkItem/MenuLinkItem";
import { scrollToSection } from "@/utils";
import ScrollHandler from "../ScrollHandler/ScrollHandler";
import useActiveSection from "@/hooks/useActiveSection";

function Header() {
    const [userScroll, setUserScroll] = useState(false);
    const activeSection = useActiveSection(menuLinkIds);
 
    useEffect(() => {
        if (document.documentElement.scrollTop > 250) {
            setUserScroll(true);
        } else {
            setUserScroll(false);
        }
        window.addEventListener("scroll", (e) => {
            const scrollTop = document.documentElement.scrollTop;

            // if (scrollTop > 0 && scrollTop < 655) {
            //     setScrollSection("about-me");
            // }
            // if (scrollTop > 655 && scrollTop < 1306) {
            //     setScrollSection("skills");
            // }
            // if (scrollTop > 1306 && scrollTop < 2717) {
            //     setScrollSection("projects");
            // }
            // if (scrollTop > 2717 && scrollTop < 3317) {
            //     setScrollSection("blogs");
            // }
            // if (scrollTop > 3317) {
            //     setScrollSection("contact-me");
            // }

            if (scrollTop > 250) {
                setUserScroll(true);
            } else {
                setUserScroll(false);
            }
        });
    }, []);

    return (
        <>
            <ScrollHandler />
            <header
                className={`fixed left-0 md:left-12 xl:left-40 right-0 md:right-12 xl:right-40 top-0 md:top-6 lg:top-8 z-40 bg-gradient-to-l from-background to-section md:rounded-xl transition-all duration-300 ${
                    userScroll
                        ? "!top-0 !left-0 !right-0 !rounded-none shadow-[0px_0px_6px_2px_rgba(0,0,0,30%)]"
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
                            <MenuLinkItem
                                className={`${
                                    activeSection === link.sectionTag &&
                                    "text-primary"
                                }`}
                                onClick={() => {
                                    scrollToSection(link.sectionTag);
                                }}
                                key={link.id}
                                {...link}
                            />
                        ))}
                    </ul>
                    {/* Contact Me Button */}
                    <PrimaryButton
                        onClick={() => scrollToSection("contact-me")}
                        className={"!shrink-0"}
                        title={"تماس با من"}
                    />
                </div>
            </header>
            <div className="bg-box fixed bottom-0 left-0 right-0 py-8 md:hidden z-50 shadow-[0px_0px_6px_2px_rgba(0,0,0,30%)] bg-gradient-to-l from-background to-section">
                <ul className="flex items-center justify-around">
                    {menuLinks.map((link) => (
                        <MenuLinkItem key={link.id} {...link} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
