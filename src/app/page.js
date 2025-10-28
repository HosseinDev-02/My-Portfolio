import EmailForm from "@/components/EmailForm/EmailForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SkillItem from "@/components/SkillItem/SkillItem";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

import { projects, skills, socialMediaLinks } from "@/data";
import Image from "next/image";

export default function Home() {

    console.warn("codding soft skills section");
    return (
        <div className="">
            <Header />
            <main className="">
                {/* About Me */}
                <section
                    id="about-me"
                    className="bg-section md:px-8 py-36 md:py-48 relative overflow-hidden bg-[url(/images/about-me.svg)] bg-center bg-cover bg-no-repeat"
                >
                    {/* Container */}
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-y-16 gap-x-10">
                            {/* About Me Content */}
                            <div className="px-4 md:px-0 text-center lg:text-right basis-1/2">
                                <div className="font-IransansWeb-Bold leading-snug text-4xl md:text-5xl lg:justify-start lg:items-start gap-px lg:max-w-100 w-full">
                                    <span className="text-2xl">سلام 🖐</span>{" "}
                                    <br />{" "}
                                    <span className="text-caption">
                                        من حسین رستمی هستم
                                    </span>{" "}
                                    ،{" "}
                                    <span className="font-IransansWeb-Black text-primary">
                                        توسعه دهنده فرانت اند
                                    </span>
                                </div>
                                <p className="text-base/relaxed md:text-lg lg:max-w-120 w-full mt-10">
                                    با علاقه‌مندی ویژه به طراحی و پیاده‌سازی
                                    رابط‌های کاربری مدرن و کاربرپسند. هدف من
                                    ایجاد وب‌سایت‌هایی سریع، بهینه و ساده برای
                                    استفاده‌ی کاربران است. من به یادگیری مداوم،
                                    حل چالش‌های جدید و ارتقای مهارت‌هام علاقه
                                    دارم و همیشه تلاش می‌کنم در هر پروژه‌ای
                                    بهترین نتیجه رو ارائه بدم.
                                </p>
                                {/* Social Media Links */}
                                <div className="flex justify-center sm:justify-start items-center gap-2 mt-8">
                                    {socialMediaLinks.map((link) => (
                                        <SocialMedia
                                            className="shadow-md border-2 border-primary text-primary transition-all duration-300 hover:text-white hover:border-white w-10 h-10 rounded-full"
                                            key={link.id}
                                            {...link}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* About Me Picture */}

                            <div className="flex items-center justify-center lg:justify-end basis-1/2">
                            {/* Image Wrapper Style => p-1.5 border-4 border-background rounded-full shadow-[0_0_8px_4px_rgba(0,0,0,0.8)] */}
                                <div className="p-1.5 border-4 border-background rounded-full shadow-[0_0_8px_6px_rgba(83,127,231,0.8)]">
                                    <div className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] relative rounded-full overflow-hidden">
                                        <Image
                                            alt="hossein rostami"
                                            fill
                                            objectFit="cover"
                                            src="/images/me-2.webp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills */}
                <div className="">
                    <section
                        id="skills"
                        className="skills py-20 md:py-40 px-4 md:px-0"
                    >
                        {/* Container */}
                        <div className="container">
                            {/* Content */}
                            <div>
                                <SectionHeader title="مهارت های" />
                                {/* Skills Content Wrapper */}
                                <div className="">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {/* Skill Item */}
                                        {skills.map((skill) => (
                                            <SkillItem
                                                key={skill.id}
                                                {...skill}
                                            />
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
                        className="projects py-20 md:py-40 relative px-4 md:px-0"
                    >
                        {/* Container */}
                        <div className="container">
                            {/* Projects Wrapper */}
                            <div>
                                {/* Section Title */}
                                <div className="flex flex-col items-center mb-12 md:mb-20 !text-lg">
                                    <SectionHeader
                                        className={"!mb-6"}
                                        title="نمونه کار های"
                                    />
                                    <p className="md:text-lg text-center">
                                        <span className="text-red-500 font-IransansWeb-Bold">
                                            توجه :
                                        </span>{" "}
                                        لطفا برای دیدن نمونه کار ها از وی پی ان
                                        استفاده کنید .
                                    </p>
                                </div>
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
                    </section>
                </div>
                {/* Blogs */}
                {/* تکمیل نشده ... */}

                {/* <BlogsSection /> */}

                {/* Contact Me */}
                <section
                    id="contact-me"
                    className="contact pt-20 md:pt-40 px-4 md:px-0 relative py-12 md:py-20"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-box/80 via-box/90 to-box -z-10"></div>
                    <div className="container flex items-center py-16 md:py-40">
                        {/* Section Content */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* Contact Us Text */}
                            <div className="col-span-5 self-center">
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
                                {/* <div className="flex items-center gap-2 mt-8">
                                    {socialMediaLinks.map((link) => (
                                        <SocialMedia key={link.id} {...link} />
                                    ))}
                                </div> */}
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
