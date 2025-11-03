const skills = [
    {
        id: 1,
        title: "HTML",
        percent: 40,
        count: 2,
    },
    {
        id: 2,
        title: "CSS",
        percent: 40,
        count: 2,
    },
    {
        id: 3,
        title: "Javascript",
        percent: 40,
        count: 2,
    },
    {
        id: 4,
        title: "TailwindCss",
        percent: 40,
        count: 2,
    },
    {
        id: 5,
        title: "React",
        percent: 30,
        count: 1.5,
    },
    {
        id: 6,
        title: "Next Js",
        percent: 10,
        count: 0,
    },
    {
        id: 7,
        title: "Typescript",
        percent: 10,
        count: 0,
    },
    {
        id: 8,
        title: "Regex",
        percent: 40,
        count: 2,
    },
    {
        id: 9,
        title: "Git",
        percent: 20,
        count: 1,
    },
    {
        id: 10,
        title: "Github",
        percent: 20,
        count: 1,
    },
];

const projects = [
    {
        id: 1,
        title: "داشبورد مدیریتی",
        description: `پنل مدیریتی طراحی‌شده با React و Tailwind CSS با رابط کاربری مدرن، واکنش‌گرا و کاربرپسند. شامل مدیریت داده‌ها، جداول و بخش‌های مختلف سیستم.`,
        href: "https://frest-dashboard.netlify.app",
        image: "/images/projects/frest-dashboard.png",
        skills: ["React Js", "Tailwind Css"],
        github: 'https://github.com/HosseinDev-02/frest-dashboard'
    },
    {
        id: 2,
        title: "سایت شرکتی",
        description: `وب‌سایت شرکتی ساخته‌شده با React و Tailwind CSS با طراحی مدرن و واکنش‌گرا، مناسب برای معرفی خدمات و نمایش اطلاعات سازمانی.`,
        href: "https://hr-landrick.netlify.app",
        image: "/images/projects/landrick-index-dark-theme.png",
        skills: ["React Js", "Tailwind Css"],
        github: 'https://github.com/HosseinDev-02/landrick'
    },
    {
        id: 3,
        title: "سایت آموزشی",
        description: `وب‌سایت آموزشی در حوزه برنامه‌نویسی، توسعه‌یافته با React و Tailwind CSS. دارای طراحی مدرن، واکنش‌گرا و مناسب برای ارائه‌ی محتوای آموزشی و منابع یادگیری.`,
        href: "https://hr-genius-academy.netlify.app",
        image: "/images/projects/nabeghe-academy-index-dark-theme.png",
        skills: ["React Js", "Tailwind Css"],
        github: 'https://github.com/HosseinDev-02/Programming-Learning-Site'
    },
    {
        id: 4,
        title: "سایت فروشگاهی",
        description: `وب‌سایت فروشگاهی لپ‌تاپ و لوازم جانبی، اولین پروژه بزرگ من پس از یادگیری JavaScript. توسعه‌یافته با HTML، Tailwind CSS و JavaScript با طراحی واکنش‌گرا و کاربرپسند.`,
        href: "https://digimode.netlify.app",
        image: "/images/projects/digimode-index.png",
        skills: ["HTML", "Tailwind Css", "Javascript"],
        github: 'https://github.com/HosseinDev-02/Digi-Mode'
    },
];

const socialMediaLinks = [
    {
        id: 1,
        title: "whatsapp",
        href: "https://wa.me/989227342901",
    },
    {
        id: 3,
        title: "instagram",
        href: "https://instagram.com/hosseinrostamidev",
    },
    {
        id: 4,
        title: "telegram",
        href: "https://t.me/HosseinRostamiDev",
    },
    {
        id: 5,
        title: "github",
        href: "https://github.com/HosseinDev-02",
    },
];

const menuLinks = [
    {
        id: 1,
        title: "درباره من",
        href: "#",
        sectionTag: "about-me",
    },
    {
        id: 2,
        title: "مهارت ها",
        href: "#",
        sectionTag: "skills",
    },
    {
        id: 3,
        title: "نمونه کارها",
        href: "#",
        sectionTag: "my-projects",
    },
    {
        id: 5,
        title: "تماس با من",
        href: "#",
        sectionTag: "contact-me",
    },
];

const menuLinkIds = ["about-me", "skills", "my-projects", "contact-me"];

export { skills, projects, socialMediaLinks, menuLinks, menuLinkIds };
