import Link from "next/link";
import React from "react";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import GithubIcon from "../icons/GithubIcon";

const setSocialMediaIcon = (linkTitle) =>
    (linkTitle.includes("whatsapp") && WhatsappIcon) ||
    (linkTitle.includes("linkedin") && LinkedInIcon) ||
    (linkTitle.includes("instagram") && InstagramIcon) ||
    (linkTitle.includes("github") && GithubIcon) ||
    (linkTitle.includes("telegram") && TelegramIcon);

function SocialMedia({
    iconWidth,
    iconHeight,
    href,
    className,
    title
}) {
    const Icon = setSocialMediaIcon(title);
    return (
        <Link
            className={`flex items-center justify-center ${className}`}
            href={href}
            target="_blank"
        >
            <Icon
                color="currentColor"
                width={22 || iconWidth}
                height={22 || iconHeight}
            />
        </Link>
    );
}

export default SocialMedia;
