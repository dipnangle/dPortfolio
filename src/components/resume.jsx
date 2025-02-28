import React from "react";

// it is fucntion for download function
const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Dipesh_Nangle_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Resume = () => {
    return (
        <div className="flex justify-center items-center h-full transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-100 text-black gap-10" >
            <iframe
                src="/resume.pdf"
                className="w-[60%] mt-10 h-[100vh] shadow-lg rounded-lg border-2 border-gray-300"
                title="Resume"
            />
            <div className="pl-24">
                <button onClick={downloadResume} className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
                    </span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] dark:bg-gradient-to-tr dark:from-[#121128]  dark:via-[#1D1A38] dark:to-[#180747] px-7 text-md font-medium text-white backdrop-blur-3xl gap-2">
                        Resume
                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" strokeWidth="0" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Resume;
