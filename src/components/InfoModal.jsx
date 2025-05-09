import React from 'react'

function InfoModal({ close, title, message, icon, link }) {

    if (!close) return null;
    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-white/30 dark:bg-gray-900/60 backdrop-blur-md transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <div className="relative transform overflow-hidden bg-white dark:bg-gray-800 text-left transition-all sm:my-8 md:w-[800px] rounded-lg border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                            <div className="p-4 flex items-center gap-4 pl-4 border transition-all bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-md dark:border-white/10 shadow-md dark:shadow-[0_0_30px_rgba(79,70,229,0.15)] text-gray-800 dark:text-white">
                                <div className='flex size-10 p-4 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                                    <i className={`text-lg text-blue-600 dark:text-blue-400 ${icon}`}></i>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="modal-title">{title}</h3>
                                {link ? <a target="_blank" href={link}> <i className='bi bi-arrow-up-right-circle text-blue-500'></i></a> : null}
                            </div>
                            <div className="bg-radial from-[#202231] from-40% to-[#17161F] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center">
                                        <div className="mt-2 text-justify">
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {message.split("\n").map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 flex justify-center">
                                <button onClick={close} className='bg-gradient-to-r from-blue-500 to-blue-700 text-white backdrop-blur-md py-2 px-6 border border-white/20 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105'>
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoModal