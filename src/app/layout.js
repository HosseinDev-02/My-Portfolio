import Header from "@/components/Header/Header";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
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
                <ClientWrapper>{children}</ClientWrapper>
                {/* Toast Container */}
                {/* <ToastContainer/> */}
            </body>
        </html>
    );
}
