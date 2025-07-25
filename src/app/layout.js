import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
    title: "Portfolio",
    description: "My Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className="">
                <Header />
                {children}
            </body>
        </html>
    );
}
