import React, { useState } from "react";
// import SVGComponent from "./SVGComponent";
import JourneyPath from "./JourneyPath";
import Bus from "./Bus";
import Career from "./Career";
import InfoModal from "./InfoModal";
import JourneyParallax from "./JourneyParallax";
import Newspaper from "./Newspaper";
import MetroJourney from "./MetroJourney";
import MetroJourney2 from "./MetroJourney2";

const Journey = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [journeyTitle, setJourneyTitle] = useState("");
    const [journeyMessage, setJourneyMessage] = useState("");

    const modalOpen = (title, message) => {
        setIsModalOpen(true);
        setJourneyTitle(title);
        setJourneyMessage(message);
    };

    const modalClose = () => {
        setIsModalOpen(false);
        setJourneyTitle("");
        setJourneyMessage("");
    };

    return (
        <>
            {/* <div className="w-screen h-full bg-sky-50/90 px-10 flex justify-between items-center dark:bg-[#060d1e]">
                <div className=" w-full relative">
                    <JourneyPath className="relative w-full"/>
                    <div className="absolute top-[16%] left-[8%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                        <Bus />
                    </div>
                    <div className="absolute top-[32%] left-[8%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("SSC", "2006 - 2013")}>
                            📌 (SSC) (2006 - 2013)
                        </div>
                    </div>
                    <div className="absolute top-[48%] left-[20%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Diploma in Engg", "2013 - 2016")}>
                            📌 Diploma in Engg (2013 - 2016)
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[15%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Bachelor of Engg", "2016-2019")}>
                            📌 Bachelor of Engg (2016-2019)
                        </div>
                    </div>
                    <div className="absolute top-[77%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("M.SC (Data Science)", "2023 - 2025")}>
                            📌 M.SC (Data Science) (2023 - 2025)
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[35%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                        <Career />
                    </div>
                    <div className="absolute top-[57%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Lithotech Food (2019-2021)")}>
                            📌 <a className="hover:text-indigo-400" target="_blank" href="https://www.lithotechfoodspicemachinery.com/">Lithotech Food </a> (2019-2021)
                        </div>
                    </div>
                    <div className="absolute top-[37%] left-[41%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Grade & Grind Technologies (2021)")}>
                            <a className="hover:text-indigo-400" target="_blank" href="http://ggtpl.com/">Grade & Grind Technologies 📌</a>(2021)
                        </div>
                    </div>
                    <div className="absolute top-[30%] right-[5%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Softaculous.ltd (2021 - Current)")}>
                            📌<a className="hover:text-indigo-400" target="_blank" href="http://softaculous.com/">Softaculous.ltd</a> (2021 - Current)
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <InfoModal 
                    close={modalClose} 
                    title={journeyTitle} 
                    message={journeyMessage} 
                />
            )}
            <JourneyParallax /> */}
            {/* <Newspaper/>
            {/* <MetroJourney/> */}
            <div className="relative">
                <MetroJourney2/>
                <div className="absolute top-[75%] left-[58%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                    <Career />
                </div>
                <div className="absolute top-[30%] right-10">
                    <div className="flex content-center justify-center">
                        dipesh
                    </div>
                </div>
            </div>
        </>
    );
};

export default Journey;
