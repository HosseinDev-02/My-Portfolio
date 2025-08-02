import BlogItem from "@/components/BlogItem/BlogItem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SkillItem from "@/components/SkillItem/SkillItem";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import PaperPlaneIcon from "@/components/icons/PaperPlaneIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

import { projects, skills } from "@/data";
import Image from "next/image";
import Link from "next/link";

const setSocialMediaIcon = (linkTitle) =>
    (linkTitle.includes("whatsapp") && WhatsappIcon) ||
    (linkTitle.includes("linkedin") && LinkedInIcon) ||
    (linkTitle.includes("instagram") && InstagramIcon) ||
    (linkTitle.includes("telegram") && TelegramIcon);

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
                            <div className="px-4 md:px-0 text-center lg:text-right basis-1/2">
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
                                    className="bg-primary transition-all duration-300 hover:opacity-80 rounded-4xl h-11 px-6 inline-flex items-center justify-center gap-2 font-IransansWeb-Medium mt-8"
                                    href="#"
                                >
                                    تماس با من
                                    {/* <ArrowLeftIcon width={20} height={20} /> */}
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
                <section className="skills pt-20 px-4 md:px-0">
                    {/* Container */}
                    <div className="container">
                        {/* Content */}
                        <div>
                            <SectionHeader title="مهارت های" />
                            {/* Skills Content Wrapper */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Skill Item */}
                                {skills.map((skill) => (
                                    <SkillItem key={skill.id} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects */}
                <section className="projects pt-20 relative bg-[url(/images/projects-shape-3.svg)] bg-center bg-cover bg-no-repeat">
                    {/* Container */}
                    <div className="container">
                        {/* Projects Wrapper */}
                        <div>
                            {/* Section Title */}
                            <SectionHeader title="نمونه کار های" />
                            {/* Projects Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Project Item */}
                                {projects.map((project) => (
                                    <ProjectSlider
                                        key={project.id}
                                        {...project}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Shapes */}
                    {/* Right-Shape */}
                    {/* <div className="absolute -right-1/10 top-0 w-[750px] h-[750px] bg-[#1D1D20] rounded-full -z-10 blur-2xl"></div> */}
                    {/* Left Shape */}
                    {/* <div className="absolute -left-1/10 bottom-0 w-[750px] h-[750px] bg-[#1D1D20] rounded-full -z-10 blur-2xl"></div> */}
                </section>
                {/* Blogs */}
                <section className="blogs pt-20 px-4 md:px-0">
                    <div className="container">
                        {/* Section Title */}
                        <SectionHeader title="مقاله های" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <BlogItem />
                            <BlogItem />
                            <BlogItem />
                        </div>
                    </div>
                </section>
                {/* Contact Us */}
                <section className="contact mt-20 px-4 md:px-0 relative py-20">
                    {/* Section Title */}
                    <SectionHeader title="تماس با" />
                    <Image
                        src="/images/contact.jpg"
                        className="-z-10"
                        fill
                        objectFit="cover"
                        alt="contact-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/90 to-background -z-10"></div>
                    <div className="container flex items-center py-20 md:py-40">
                        {/* Section Content */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* Contact Us Text */}
                            <div className="col-span-5">
                                <h5 className="font-IransansWeb-Bold text-xl mb-6">
                                    <span className="text-primary">
                                        آماده همکاری
                                    </span>{" "}
                                    هستم .
                                </h5>
                                <p className="font-IransansWeb-Medium leading-relaxed">
                                    اگر پروژه ای در ذهن دارید ، سوالی دارید یا
                                    فقط می خواهید سلامی بفرستید خوشحال میشم
                                    ازتون دریافت کنم .
                                </p>
                                <div className="hidden sm:flex items-center gap-2 mt-8">
                                    {socialMediaLinks.map((link) => {
                                        const Icon = setSocialMediaIcon(
                                            link.title
                                        );
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
                            {/* Contact Us Form */}
                            <div className="col-span-7">
                                <form
                                    className="sm:grid sm:grid-cols-12 gap-4"
                                    action="#"
                                >
                                    <Input
                                        label="نام :"
                                        require={true}
                                        type="text"
                                        className="sm:col-span-6 mt-4 sm:mt-0"
                                        placeholder="نام خود را وارد کنید ..."
                                    />
                                    <Input
                                        label="ایمیل :"
                                        require={true}
                                        type="text"
                                        className="sm:col-span-6 mt-4 sm:mt-0"
                                        placeholder="ایمیل خود را وارد کنید ..."
                                    />
                                    <Input
                                        label="موضوع :"
                                        require={false}
                                        type="text"
                                        className="col-span-12 mt-4 sm:mt-0"
                                        placeholder="موضوع خود را وارد کنید ..."
                                    />
                                    <Input
                                        label="متن :"
                                        require={true}
                                        type="textarea"
                                        className="sm:col-span-12 mt-4 sm:mt-0"
                                        placeholder="متن پیام خود را وارد کنید ..."
                                    />
                                </form>
                                <button
                                    className="flex items-center justify-center gap-2 font-IransansWeb-Medium bg-primary rounded-md px-8 h-10 mt-4 mx-auto cursor-pointer transition-all duration-300 hover:opacity-80"
                                    type="submit"
                                >
                                    <span>ارسال</span>
                                    <PaperPlaneIcon
                                        className="shrink-0 -rotate-[135deg]"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    );
}
