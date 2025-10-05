"use client";
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
import RegexIcon from "../icons/brands/RegexIcon";

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
    Regex: RegexIcon,
};

const setStyleToIcons = {
    Github: "#fff",
    "Next Js": "#fff",
};

function SkillItem({ title, percent, id, count }) {
    const Icon = skillIcons[title];
    const style = setStyleToIcons[title];
    return (
        <div
            className={`bg-section border-2 border-border rounded-lg p-3 ${
                id === 10 && "md:col-start-2"
            }`}
        >
            {/* Statistic */}
            <div className="flex items-center justify-between pb-4">
                {/* Text */}
                {Icon && <Icon color={style} width={30} />}

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
                    <>
                        {count === 0 ? (
                            <span className="absolute -left-4 font-IransansWeb-Medium text-sm -top-7">
                                تازه کار
                            </span>
                        ) : (
                            <span className="absolute -left-4 font-IransansWeb-Medium text-sm -top-7">
                                {count} سال تجربه
                            </span>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;
