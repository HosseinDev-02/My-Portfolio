import BlogItem from "@/components/BlogItem/BlogItem";
import EmailForm from "@/components/EmailForm/EmailForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import BlogsSection from "@/components/Sections/BlogsSection";
import SkillItem from "@/components/SkillItem/SkillItem";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import PaperPlaneIcon from "@/components/icons/PaperPlaneIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

import { projects, skills, socialMediaLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    console.warn("codding soft skills section");
    return (
        <div className="">
            <Header />
            <main className="">
                {/* About Me */}
                <section
                    id="about-me"
                    className="bg-section md:px-8 pt-40 md:pt-48 pb-20 relative overflow-hidden bg-[url(/images/about-me.svg)] bg-center bg-cover bg-no-repeat"
                >
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
                                    توسعه دهنده فرانت اند{" "}
                                    <span className="font-IransansWeb-Medium text-primary">
                                        توانمند
                                    </span>{" "}
                                    و{" "}
                                    <span className="font-IransansWeb-Medium text-primary">
                                        خلاق
                                    </span>{" "}
                                    با انگیزه بالا برای حل چالش های فنی و بهبود
                                    تجربه کاربری .{" "}
                                    <span className="font-IransansWeb-Medium text-primary">
                                        علاقه مند
                                    </span>{" "}
                                    به یادگیری فناوری های جدید و ایجاد رابط های
                                    مدرن و بهینه.
                                </p>
                                {/* Social Media Links */}
                                <div className="flex justify-center sm:justify-start items-center gap-2 mt-8">
                                    {socialMediaLinks.map((link) => (
                                        <SocialMedia
                                            className="shadow-md bg-box transition-all duration-300 hover:text-primary w-10 h-10 rounded"
                                            key={link.id}
                                            {...link}
                                        />
                                    ))}
                                </div>
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
                <section id="skills" className="skills pt-20 px-4 md:px-0">
                    {/* Container */}
                    <div className="container">
                        {/* Content */}
                        <div>
                            <SectionHeader title="مهارت های" />
                            {/* Skills Content Wrapper */}
                            <div className="">
                                {/* Hard Skills */}
                                {/* <div className="p-4 rounded-lg bg-gradient-to-l from-section to-background mb-4">
                                    <h6 className="font-IransansWeb-Bold text-xl">
                                        مهارت های{" "}
                                        <span className="text-primary">
                                            سخت
                                        </span>
                                    </h6>
                                </div> */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Skill Item */}
                                    {skills.map((skill) => (
                                        <SkillItem key={skill.id} {...skill} />
                                    ))}
                                </div>
                                {/* Soft Skills */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects */}
                <section
                    id="my-projects"
                    className="projects pt-20 relative bg-[url(/images/projects-shape-3.svg)] bg-center bg-cover bg-no-repeat px-4 md:px-0"
                >
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
                                    <ProjectItem
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
                {/* تکمیل نشده ... */}

                {/* <BlogsSection /> */}

                {/* Contact Me */}
                <section
                    id="contact-me"
                    className="contact mt-20 px-4 md:px-0 relative py-12 md:py-20"
                >
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
                    <div className="container flex items-center py-16 md:py-40">
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
                                <div className="flex items-center gap-2 mt-8">
                                    {socialMediaLinks.map((link) => (
                                        <SocialMedia key={link.id} {...link} />
                                    ))}
                                </div>
                            </div>
                            {/* Contact Us Form */}
                            <EmailForm />
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
