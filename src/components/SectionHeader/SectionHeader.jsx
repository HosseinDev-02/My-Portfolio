import React from "react";

function SectionHeader({title, className}) {
    return (
        <h3 className={`text-white font-IransansWeb-Black text-2xl text-center mb-12 md:mb-20 ${className}`}>
            {title} <span className="text-primary">من</span>
        </h3>
    );
}

export default SectionHeader;
