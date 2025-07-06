import Header from "@/components/Header/Header";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import SendIcon from "@/components/icons/SendIcon";
import IntroShape from "@/components/shapes/IntroShape";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <Header />
            <main className="pt-34 md:pt-36">
                {/* Container */}
                <div className="container">
                    {/* About Me */}
                    <section className="rounded-xl bg-section shadow-section-middle px-8 py-30 border-b-2 border-primary relative overflow-hidden">
                        {/*Intro Shape */}
                        {/* <IntroShape
                            className="absolute inset-0 w-full h-full"
                            color="var(--color-background)"
                        /> */}

                        {/* About Me Content */}

                        <div className="">
                            <div className="text-primary font-IransansWeb-Bold text-5xl/snug flex flex-col items-start gap-px max-w-100 w-full">
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
                                    هستم<span className="text-2xl"> . </span>
                                </span>
                            </div>
                            <p className="text-lg max-w-120 w-full mt-10">
                                توسعه دهنده فرانت اند توانمند و خلاق با انگیزه
                                بالا برای حل چالش های فنی و بهبود تجربه کاربری .
                                علاقه مند به یادگیری فناوری های جدید و ایجاد
                                رابط های مدرن و بهینه.
                            </p>
                            <Link className="bg-primary transition-all duration-300 hover:opacity-90 rounded-4xl h-11 px-6 inline-flex items-center justify-center gap-2 font-IransansWeb-Medium mt-8" href='#'>
                                تماس با من
                                <ArrowLeftIcon width={24} height={24}/>
                            </Link>
                        </div>
                        {/* About Me Picture */}
                    </section>
                </div>
            </main>
        </div>
    );
}
