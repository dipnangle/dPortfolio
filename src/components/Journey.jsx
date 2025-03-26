import React from "react";
import MetroJourney2 from "./MetroJourney2";
import Mob from "./Mob";

const Journey = () => {
    return (
        <>
            <div className="w-full h-screen hidden justify-center items-center md:flex lg:flex overflow-hidden">
                <MetroJourney2 />
            </div>
            <Mob/>
        </>
    );
};

export default Journey;
