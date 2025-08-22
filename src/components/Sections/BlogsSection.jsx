import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import BlogItem from "../BlogItem/BlogItem";

function BlogsSection() {
    return (
        <section id="blogs" className="blogs pt-20 px-4 md:px-0">
            <div className="container">
                {/* Section Title */}
                <SectionHeader title="مقاله های" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
            </div>
        </section>
    );
}

export default BlogsSection;
