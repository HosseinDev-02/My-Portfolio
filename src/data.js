const skills = [
    {
        id: 1,
        title: "HTML",
        percent: 90,
    },
    {
        id: 2,
        title: "CSS",
        percent: 90,
    },
    {
        id: 3,
        title: "Javascript",
        percent: 75,
    },
    {
        id: 4,
        title: "TailwindCss",
        percent: 80,
    },
    {
        id: 5,
        title: "React",
        percent: 75,
    },
    {
        id: 6,
        title: "Next Js",
        percent: 35,
    },
    {
        id: 7,
        title: "Typescript",
        percent: 25,
    },
    {
        id: 8,
        title: "Regex",
        percent: 30,
    },
    {
        id: 9,
        title: "Git",
        percent: 50,
    },
    {
        id: 10,
        title: "Github",
        percent: 50,
    },
];

const projects = [
    {
        id: 1,
        title: "داشبورد مدیریتی",
        description: `
        برای مدیریت و نگهداری مشاغل مختلف مناسب Frest پنل مدیریت
        است.
        توسعه داده شده است. Tailwind و React با استفاده از
    `,
        href: "https://frest-dashboard.vercel.app",
        image: "/images/projects/frest-dashboard.png"
    },
    {
        id: 2,
        title: "سایت شرکتی",
        description: `لندریک یک سایت شرکتی است و دارای صفحات مختلفی است .
        توسعه داده شده است. React ، Tailwind با استفاده`,
        href: "https://landrick-neon.vercel.app",
        image: "/images/projects/landrick-index-dark-theme.png"
    },
    {
        id: 3,
        title: "سایت آموزشی",
        description: `یک سایت آموزش برنامه نویسی است.
        توسعه داده شده است . React , Tailwind با استفاده از`,
        href: "https://programming-learning-site.vercel.app",
        image: "/images/projects/nabeghe-academy-index-dark-theme.png"
    },
    {
        id: 4,
        title: "سایت فروشگاهی",
        description: `سایت فروش لوازم جانبی لپ تاپ و کامپیوتر .
        توسعه داده شده است . HTML , CSS , JavaScript با استفاده ا`,
        href: "https://digi-mode.vercel.app",
        image: "/images/projects/digimode-index.png"
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

const menuLinks = [
    {
        id: 1,
        title: "درباره من",
        href: "#",
        sectionTag: 'about-me'
    },
    {
        id: 2,
        title: "مهارت ها",
        href: "#",
        sectionTag: 'skills'
    },
    {
        id: 3,
        title: "نمونه کارها",
        href: "#",
        sectionTag: 'projects'
    },
    {
        id: 4,
        title: "وبلاگ",
        href: "#",
        sectionTag: 'blogs'
    },
];

export { skills, projects, socialMediaLinks, menuLinks };
