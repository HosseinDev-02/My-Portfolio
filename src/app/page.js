import Header from "@/components/Header/Header";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import SendIcon from "@/components/icons/SendIcon";
import CSSIcon from "@/components/icons/brands/CSSIcon";
import GitIcon from "@/components/icons/brands/GitIcon";
import GithubIcon from "@/components/icons/brands/GithubIcon";
import HTMLIcon from "@/components/icons/brands/HTMLIcon";
import JavascriptIcon from "@/components/icons/brands/JavascriptIcon";
import NextJsIcon from "@/components/icons/brands/NextJsIcon";
import ReactIcon from "@/components/icons/brands/ReactIcon";
import ReduxIcon from "@/components/icons/brands/ReduxIcon";
import TailwindCssIcon from "@/components/icons/brands/TailwindCssIcon";
import TypescriptIcon from "@/components/icons/brands/TypescriptIcon";
import IntroShape from "@/components/shapes/IntroShape";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <Header />
            <main className="">
                {/* About Me */}
                <section className="bg-section md:px-8 pt-40 md:pt-48 pb-20 relative overflow-hidden bg-[url(/images/about-me.svg)] bg-center bg-cover bg-no-repeat">
                    {/* Container */}
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-y-16 gap-x-10">
                            {/* About Me Content */}
                            <div className="text-center lg:text-right basis-1/2">
                                <div className="text-primary font-IransansWeb-Bold leading-snug text-4xl md:text-5xl flex flex-col items-center justify-center lg:justify-start lg:items-start gap-px lg:max-w-100 w-full">
                                    <span className="text-caption text-2xl">
                                        درود🖐
                                    </span>
                                    <div className="text-caption">
                                        حسین رستمی
                                        <span className="text-2xl"> ، </span>
                                    </div>
                                    <div className="font-IransansWeb-Black">
                                        برنامه نویس
                                        <span className="text-2xl text-caption">
                                            {" "}
                                            و{" "}
                                        </span>
                                        توسعه دهنده فرانت اند
                                    </div>
                                    <span className="text-caption text-2xl">
                                        هستم
                                        <span className="text-2xl"> . </span>
                                    </span>
                                </div>
                                <p className="text-base/relaxed md:text-lg lg:max-w-120 w-full mt-10">
                                    توسعه دهنده فرانت اند توانمند و خلاق با
                                    انگیزه بالا برای حل چالش های فنی و بهبود
                                    تجربه کاربری . علاقه مند به یادگیری فناوری
                                    های جدید و ایجاد رابط های مدرن و بهینه.
                                </p>
                                <Link
                                    className="bg-primary transition-all duration-300 hover:opacity-90 rounded-4xl h-11 px-6 inline-flex items-center justify-center gap-2 font-IransansWeb-Medium mt-8"
                                    href="#"
                                >
                                    تماس با من
                                    <ArrowLeftIcon width={20} height={20} />
                                </Link>
                            </div>
                            {/* About Me Picture */}

                            <div className="flex items-center justify-center lg:justify-end basis-1/2">
                                <div className="p-1.5 border-4 border-background rounded-full shadow-[0_0_8px_4px_rgba(0,0,0,80%)]">
                                    <div className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] relative rounded-full overflow-hidden">
                                        <Image
                                            alt="hossein rostami"
                                            fill
                                            objectFit="cover"
                                            src="/images/me-2.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills */}
                <section className="skills py-20">
                    {/* Container */}
                    <div className="container">
                        {/* Content */}
                        <div>
                            {/* Section Title */}
                            <h3 className="text-white font-IransansWeb-Black text-2xl text-center">
                                مهارت های{" "}
                                <span className="text-primary">من</span>
                            </h3>
                            {/* Skills Content Wrapper */}
                            <div>
                                <HTMLIcon width={50} height={100}/>
                                <JavascriptIcon color='var(--color-primary)' width={50} height={100}/>
                                <CSSIcon width={50} height={100}/>
                                <NextJsIcon color='var(--color-primary)' width={50} height={100}/>
                                <ReactIcon width={50} height={100}/>
                                <GithubIcon width={50} height={100}/>
                                <GitIcon color='var(--color-primary)' width={50} height={100}/>
                                <TailwindCssIcon color='var(--color-primary)' width={50} height={100}/>
                                <TypescriptIcon color='var(--color-primary)' width={50} height={100}/>
                                <ReduxIcon width={50} height={100}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
