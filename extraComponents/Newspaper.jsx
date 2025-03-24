import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Newspaper() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize scroll animations
    }, []);

    return (
        <div
            className="bg-gray-200 min-h-screen flex justify-center items-center p-5 newspaper-bg"
        >
            <div className="bg-white w-full max-w-4xl shadow-xl border border-gray-400 p-6 font-serif newspaper">
                {/* 📰 Newspaper Header */}
                <header className="text-center border-b border-gray-500 pb-2">
                    <h1 className="text-4xl font-extrabold uppercase tracking-wide">
                        Dipesh's Life Edition
                    </h1>
                    <p className="text-sm text-gray-600">March 2025 | Special Feature</p>
                </header>

                {/* 🏆 Breaking News Section */}
                <section className="mt-5" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-center border-b-2 border-black pb-1">
                        Breaking News: Dipesh Completes SSC with Distinction!
                    </h2>
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="SSC Achievement"
                        className="w-full h-40 object-cover mt-3 rounded-md sepia-effect"
                    />
                    <p className="mt-2 text-justify">
                        In an inspiring turn of events, young Dipesh has successfully completed
                        his SSC with distinction, setting the stage for a brilliant career ahead.
                        Teachers and mentors describe him as a determined student with a passion
                        for learning.
                    </p>
                </section>

                {/* 📰 Grid Layout for Different Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Achievements */}
                    <div className="border border-gray-400 p-4 shadow-sm bg-gray-100" data-aos="fade-right">
                        <h3 className="text-xl font-bold border-b-2 border-black pb-1">
                            🏆 Achievements
                        </h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>Graduated with Distinction (SSC, HSC)</li>
                            <li>Completed a Master's Degree in [Your Field]</li>
                            <li>Built a Machine Learning Model for Credit Risk Analysis</li>
                        </ul>
                    </div>

                    {/* Career Forecast */}
                    <div className="border border-gray-400 p-4 shadow-sm bg-gray-100" data-aos="fade-left">
                        <h3 className="text-xl font-bold border-b-2 border-black pb-1">
                            📈 Career Forecast
                        </h3>
                        <p className="mt-2">
                            Experts predict that Dipesh is on the path to success, with a keen
                            interest in AI, Data Science, and Web Development.
                        </p>
                    </div>

                    {/* Featured Article */}
                    <div className="col-span-2 border border-gray-400 p-4 shadow-sm bg-gray-100" data-aos="zoom-in">
                        <h3 className="text-xl font-bold border-b-2 border-black pb-1">
                            🔍 Featured Article: The Journey of a Tech Enthusiast
                        </h3>
                        <p className="mt-2 text-justify">
                            From early coding days in high school to developing advanced AI
                            solutions, Dipesh has always been passionate about technology.
                            His journey is a testament to perseverance, learning, and innovation.
                        </p>
                    </div>

                    {/* Upcoming Plans */}
                    <div className="border border-gray-400 p-4 shadow-sm bg-gray-100" data-aos="fade-up">
                        <h3 className="text-xl font-bold border-b-2 border-black pb-1">
                            📅 Upcoming Plans
                        </h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>Building a Full-Stack Portfolio</li>
                            <li>Learning Advanced AI & ML</li>
                            <li>Contributing to Open Source Projects</li>
                        </ul>
                    </div>
                </div>

                {/* 📸 Footer Section */}
                <footer className="text-center text-sm text-gray-500 mt-6">
                    © 2025 Dipesh’s Life Times. All Rights Reserved.
                </footer>
            </div>
        </div>
    );
}
