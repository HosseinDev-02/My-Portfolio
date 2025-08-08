import Header from "@/components/Header/Header";
import "./globals.css";
// import { ToastContainer } from "react-toastify";

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
                {/* Toast Container */}
                {/* <ToastContainer/> */}
            </body>
        </html>
    );
}
