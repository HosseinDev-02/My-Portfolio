'use client'
import React from "react";
import GitIcon from "../icons/brands/GitIcon";
import ReactIcon from "../icons/brands/ReactIcon";
import ReduxIcon from "../icons/brands/ReduxIcon";
import JavascriptIcon from "../icons/brands/JavascriptIcon";
import CSSIcon from "../icons/brands/CSSIcon";
import HTMLIcon from "../icons/brands/HTMLIcon";
import NextJsIcon from "../icons/brands/NextJsIcon";
import TypescriptIcon from "../icons/brands/TypescriptIcon";
import GithubIcon from "../icons/brands/GithubIcon";
import TailwindCssIcon from "../icons/brands/TailwindCssIcon";

const skillIcons = {
    Git: GitIcon,
    React: ReactIcon,
    Redux: ReduxIcon,
    Javascript: JavascriptIcon,
    CSS: CSSIcon,
    HTML: HTMLIcon,
    "Next Js": NextJsIcon,
    Typescript: TypescriptIcon,
    Github: GithubIcon,
    TailwindCss: TailwindCssIcon,
};

function SkillItem({ title, percent }) {
    console.log(title)
    const Icon = skillIcons[title];
    return (
        <div className="basis-1/4 bg-section rounded-xl p-4">
            {/* Statistic */}
            <div className="flex items-center justify-between pb-4">
                {/* Text */}
                {Icon && <Icon width={30} />}

                <span className="font-IransansWeb-Bold">{title}</span>
                {/* Icon */}
            </div>
            {/* Progress Bar */}
            <div className="w-full h-3 rounded-2xl bg-background flex items-center mt-4">
                <div
                    style={{
                        width: `${percent}%`,
                    }}
                    className="relative bg-primary h-2.5 rounded-2xl"
                >
                    <span className="absolute left-0 font-IransansWeb-Medium text-sm -top-6">
                        {percent}%
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;
