import React from "react";
import MetroJourney2 from "./MetroJourney2";

const Journey = () => {
    return (
        <>
            <div className="w-full h-screen justify-center items-center md:flex lg:flex hidden overflow-hidden">
                <MetroJourney2 />
            </div>
            <div className="background w-full h-screen flex md:hidden lg:hidden my-auto items-center justify-center text-blue-600">
                Coming soon...
            </div>
        </>
    );
};

export default Journey;
