import React from "react";
import MetroJourney2 from "./MetroJourney2";

const Journey = () => {
    return (
        <>
            <div className="w-full h-screen hidden justify-center items-center md:flex lg:flex overflow-hidden">
                <MetroJourney2 />
            </div>
            <div className="bg-sky-50/90 w-full h-screen flex md:hidden lg:hidden dark:bg-[#060d1e] my-auto items-center justify-center text-blue-600">
                Coming soon...
            </div>
        </>
    );
};

export default Journey;
