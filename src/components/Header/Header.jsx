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
import MenuIconDot from "../icons/MenuIconDot";
import PhoneIcon from "../icons/PhoneIcon";
import CrossIcon from "../icons/CrossIcon";
import DownloadIcon from "../icons/DownloadIcon";

function Header() {
    const [userScroll, setUserScroll] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const activeSection = useActiveSection(menuLinkIds);

    useEffect(() => {
        console.log('active section :', activeSection)
    }, [activeSection])

    useEffect(() => {
        if (document.documentElement.scrollTop > 250) {
            setUserScroll(true);
        } else {
            setUserScroll(false);
        }
        window.addEventListener("scroll", (e) => {
            const scrollTop = document.documentElement.scrollTop;
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
                className={`fixed left-0 md:left-12 xl:left-40 right-0 md:right-12 xl:right-40 top-0 md:top-6 lg:top-8 z-50 bg-gradient-to-l from-box to-section md:rounded-xl transition-all duration-300 ${
                    userScroll
                        ? "!top-0 !left-0 !right-0 !rounded-none shadow-[0px_0px_6px_2px_rgba(0,0,0,30%)]"
                        : ""
                }`}
            >
                <div className="flex items-center justify-between h-20 px-3 lg:px-6">
                    {/* Mobile Menu Button */}
                    <span
                        className="block md:hidden"
                        onClick={() =>
                            setShowMobileMenu((prevState) => !prevState)
                        }
                    >
                        {showMobileMenu ? (
                            <CrossIcon width={40} height={40} color="#fff" />
                        ) : (
                            <MenuIconDot width={40} height={40} color="#fff" />
                        )}
                    </span>
                    {/* Logo */}
                    <Link
                        href="#"
                        className="block font-HerrVonMuellerhoff-Regular text-4xl relative h-14 w-18"
                    >
                        <Image alt="logo" fill src="/images/primary-logo.png" />
                        {/* <LogoIcon width="72px" height="56px" /> */}
                    </Link>
                    {/* Menu */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-IransansWeb-Medium">
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
                        className={"hidden md:flex"}
                        title="دانلود رزومه"
                        href={'/hossein_rostami.pdf'}
                        download='Hossein-Rostami-Resume.pdf'
                    />
                    <PrimaryButton
                        className={"md:hidden !px-4"}
                        icon={<DownloadIcon width={24} height={24}/>}
                        href={"/hossein_rostami.pdf"}
                        download="Hossein-Rostami-Resume.pdf"
                    />
                </div>
            </header>
            {/* Mobile Menu */}
            <div
                className={`block md:hidden fixed overflow-hidden top-20 z-50 right-0 left-0 transition-all duration-300 bg-background ${
                    showMobileMenu ? "h-[216px]" : "h-0"
                }`}
            >
                <ul className="flex flex-col gap-4 items-center justify-center h-full">
                    {menuLinks.map((link) => (
                        <MenuLinkItem
                            className={`${
                                activeSection === link.sectionTag &&
                                "text-primary"
                            }`}
                            onClick={() => {
                                scrollToSection(link.sectionTag);
                                setShowMobileMenu(false);
                            }}
                            key={link.id}
                            {...link}
                        />
                    ))}
                </ul>
            </div>

            {/* Show Mobile Menu Overlay */}

            <div
                onClick={() => {
                    if (showMobileMenu) {
                        setShowMobileMenu(false);
                    }
                }}
                className={`fixed block md:hidden inset-0 w-full h-full transition-all duration-300 bg-background/50 z-[40] ${
                    showMobileMenu
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            ></div>
        </>
    );
}

export default Header;
