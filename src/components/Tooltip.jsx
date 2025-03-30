import React from "react";

const Tooltip = ({ children, tooltipTitle, tooltipText, show, position = "top", onClick, icon }) => {
    // tooltip position
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
        left: "right-full top-1/2 -translate-y-1/2 mr-3",
        right: "left-full top-1/2 -translate-y-1/2 ml-3",
    };

    // tooltip arrow position
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
                <div className={`absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 ${positionClasses[position]} mb-3 w-60 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2`}>
                    <div className="tTContainer">
                        <div className="ttTitleArea">
                            <div className="tTLogo">
                                <i className={`${icon} text-blue-600 dark:text-indigo-200`}></i>
                            </div>
                            <h3 className="tTTitle">
                                {tooltipTitle}
                                <span className="tTMore">...</span>
                            </h3>
                        </div>
                        <div className="space-y-2">
                            <p className="">
                                {tooltipText}
                            </p>
                        </div>
                        <div className="tTBg"></div>
                        <div className={`${arrowPositionClasses[position]} tTArrow`}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
