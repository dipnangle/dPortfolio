import React from "react";
import MetroJourney2 from "./MetroJourney2";
import MobJourney from "./MobJourney";

const Journey = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center md:flex hidden overflow-hidden">
                <MetroJourney2 />
            </div>
            <div className="bg-sky-50/90 w-full h-screen dark:bg-[#060d1e] flex my-auto items-center justify-center text-blue-600">
                Coming soon...
            </div>
        </>
    );
};

export default Journey;
