const skills = [
    {
        id: 1,
        title: "HTML",
        percent: 40,
        count: 2
    },
    {
        id: 2,
        title: "CSS",
        percent: 40,
        count: 2
    },
    {
        id: 3,
        title: "Javascript",
        percent: 40,
        count: 2
    },
    {
        id: 4,
        title: "TailwindCss",
        percent: 40,
        count: 2
    },
    {
        id: 5,
        title: "React",
        percent: 30,
        count: 1.5
    },
    {
        id: 6,
        title: "Next Js",
        percent: 10,
        count: 0
    },
    {
        id: 7,
        title: "Typescript",
        percent: 10,
        count: 0
    },
    {
        id: 8,
        title: "Regex",
        percent: 40,
        count: 2
    },
    {
        id: 9,
        title: "Git",
        percent: 20,
        count: 1
    },
    {
        id: 10,
        title: "Github",
        percent: 20,
        count: 1
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
        href: "https://wa.me/989227342901",
    },
    {
        id: 3,
        title: "instagram",
        href: "https://instagram.com/hossein__ro",
    },
    {
        id: 4,
        title: "telegram",
        href: "https://t.me/HosseinRo",
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
        title: "مقاله ها",
        href: "#",
        sectionTag: 'blogs'
    },
    {
        id: 5,
        title: "تماس با من",
        href: "#",
        sectionTag: 'contact-me'
    },
];

const menuLinkIds = [
    'about-me',
    'skills',
    'projects',
    'contact-me',
    'blogs'
]

export { skills, projects, socialMediaLinks, menuLinks, menuLinkIds };
