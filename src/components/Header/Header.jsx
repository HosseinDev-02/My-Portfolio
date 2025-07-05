import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatsappIcon from "../icons/WhatsappIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";

function Header() {
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

    const setSocialMediaIcon = linkTitle => (
        linkTitle.includes('whatsapp') && WhatsappIcon ||
        linkTitle.includes('linkedin') && LinkedInIcon ||
        linkTitle.includes('instagram') && InstagramIcon ||
        linkTitle.includes('telegram') && TelegramIcon
    )

    return (
        <header className="fixed left-0 right-0 top-8">
            <div className="container">
                <div className="flex items-center justify-between h-20 px-6 bg-section rounded-2xl shadow border-b-2 border-primary/70">
                    {/* Logo */}
                    {/* Menu */}
                    <ul className="flex items-center gap-3 font-IransansWeb-Medium">
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
                    <div className="flex items-center gap-2">
                        {socialMediaLinks.map((link) => {
                            const Icon = setSocialMediaIcon(link.title);

                            return <Link className="flex items-center justify-center rounded w-10 h-10 shadow-md bg-box transition-all duration-300 hover:bg-caption hover:text-primary" key={link.id} href={link.href}>
                                <Icon color="currentColor" width={22} height={22}/>
                            </Link>;
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
