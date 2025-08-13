import { scrollToSection } from "@/utils";
import React, { useEffect, useState } from "react";

function ScrollHandler() {
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            setTimeout(() => {
                scrollToSection(hash);
            }, 100);
        }
    }, []);
    return null;
}

export default ScrollHandler;
