"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // اگر صفحه کامل لود شده بود، مستقیم مخفی کن
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return loading ? <Loader /> : <>{children}</>;
}
