"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // ۶۰٪ از سکشن دیده بشه
    );

    sectionIds.forEach((id) => {
      console.log(id)
      const element = document.getElementById(id);
      console.log('element :', element)
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
