import React from "react";

const Tooltip = ({ children, tooltipTitle, tooltipText, show, position = "top", onClick, icon }) => {
    // Define positioning styles
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
        left: "right-full top-1/2 -translate-y-1/2 mr-3",
        right: "left-full top-1/2 -translate-y-1/2 ml-3",
    };

    const arrowPositionClasses = {
        top: "-bottom-1.5 left-1/2 -translate-x-1/2 rotate-45",
        bottom: "-top-1.5 left-1/2 -translate-x-1/2 rotate-45",
        left: "-right-1.5 top-1/2 -translate-y-1/2 rotate-45",
        right: "-left-1.5 top-1/2 -translate-y-1/2 rotate-45",
    };

    return (
        <div className={`${children ? "relative inline-block group" : ""}`} onClick={onClick}>
            {/* Render children only if provided */}
            {children && <div className="inline-block">{children}</div>}

            {/* Tooltip */}
            {(show || children) && (
                // <div className={`w-full absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 ${positionClasses[position]}`}>
                //     <div className="relative w-full p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                //         <div className="flex items-center gap-3 mb-2">
                //             <div className="flex items-center w-full justify-center rounded-full bg-indigo-500/20">
                //                 <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-indigo-400">
                //                     <path
                //                         clipRule="evenodd"
                //                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                //                         fillRule="evenodd"
                //                     ></path>
                //                 </svg>
                //             </div>
                //             <h3 className="text-sm font-semibold text-white">{tooltipTitle}</h3>
                //         </div>
                //         <p className="text-sm text-gray-300">{tooltipText}</p>
                //         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>

                //         {/* Arrow */}
                //         <div className={`absolute w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-r border-b border-white/10 ${arrowPositionClasses[position]}`}></div>
                //     </div>
                // </div>
                // <div className={`absolute  invisible opacity-0 group-hover:visible group-hover:opacity-100 ${positionClasses[position]} mb-3 w-60 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2`}>
                //     <div className="relative p-2 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                //         <div className="flex items-center gap-3">
                //             <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-500/20 text-sm">
                //                 <i className={`${icon} text-blue-500 dark:text-indigo-300`}></i>
                //                 {/* <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-indigo-400">
                //                     <path clip-rule="evenodd"
                //                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                //                         fill-rule="evenodd"></path>
                //                 </svg> */}
                //             </div>
                //             <h3 className="text-sm font-semibold text-white">{tooltipTitle}<span className="text-blue-600 ml-1 text-lg">...</span></h3>
                //         </div>
                //         <div className="space-y-2">
                //             <p className="text-sm text-gray-300">
                //                 {tooltipText}
                //             </p>
                //         </div>
                //         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
                //         <div className={`absolute ${arrowPositionClasses[position]} w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-r border-b border-white/10`}></div>
                //     </div>
                // </div>
                <div className={`absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 ${positionClasses[position]} mb-3 w-60 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2`}>
                    <div className="relative p-2 bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-sm">
                                <i className={`${icon} text-blue-600 dark:text-indigo-200`}></i>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                                {tooltipTitle}
                                <span className="text-blue-500 dark:text-blue-600 ml-1 text-lg">...</span>
                            </h3>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {tooltipText}
                            </p>
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-200/30 dark:from-indigo-500/10 to-purple-200/30 dark:to-purple-500/10 blur-xl opacity-50"></div>
                        <div className={`absolute ${arrowPositionClasses[position]} w-3 h-3 bg-white dark:bg-gray-900 border-r border-b border-gray-300 dark:border-white/10`}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
