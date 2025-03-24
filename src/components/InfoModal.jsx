import React from 'react'

function InfoModal({ close, title, message, icon, link }) {

    if (!close) return null;
    console.log(icon);
    return (
        <>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-white/30 dark:bg-gray-900/60 backdrop-blur-md transition-opacity" aria-hidden="true"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <div className="relative transform overflow-hidden bg-white dark:bg-gray-800 text-left transition-all sm:my-8 md:w-[800px] rounded-lg border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                            <div className="p-4 flex items-center gap-4 pl-4 border transition-all bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-md dark:border-white/10 shadow-md dark:shadow-[0_0_30px_rgba(79,70,229,0.15)] text-gray-800 dark:text-white">
                                <div className='flex size-10 p-4 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                                    <i className={`text-lg text-blue-600 dark:text-blue-400 ${icon}`}></i>
                                </div>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white" id="modal-title">{title}</h3>
                                {link ? <a target="_blank" href={link}>
                                    <i className='bi bi-arrow-up-right-circle text-blue-500'></i>
                                </a>
                                    :
                                    null}
                            </div>
                            {/* <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> */}
                            <div class="bg-radial from-[#202231] from-40% to-[#17161F] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center">
                                        <div class="mt-2 text-justify">
                                            <p class="text-sm text-gray-600 dark:text-gray-300">
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
                            <div class="px-4 py-3 flex justify-center">
                                {/* <button onClick={close} type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:w-auto">OK</button> */}
                                {/* <button class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] shadow-lg hover:from-[#2563EB] hover:to-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Click Me
                                </button> */}

                                {/* <button onClick={close} class="h-10 px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Click Me
                                </button> */}

                                {/* <button class="h-10 px-6 py-2 rounded-full text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all">
                                    Click Me
                                </button> */}
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