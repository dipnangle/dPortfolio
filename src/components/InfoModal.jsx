import React from 'react'

function InfoModal({close, title, message, icon, link}) {
    
    if(!close) return null;
    console.log(icon);
    return (
        <>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/85 transition-opacity blur-2xl" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div class="relative transform overflow-hidden bg-white dark:bg-gray-800 text-left transition-all sm:my-8  md:w-[800px] rounded-lg border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                            <div className='bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)] p-4 flex items-center gap-4 pl-4'>
                                <div className='flex size-12 p-4 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                                    <i className={`text-xl text-blue-600 dark:text-blue-400 ${icon}`}></i>
                                </div>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white" id="modal-title">{title}</h3>
                                <a target="_blank" href={link}>
                                    <i className='bi bi-arrow-up-right-circle text-blue-500'></i>
                                </a>
                            </div>
                            <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-600 dark:text-gray-300">{message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={close} type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:w-auto">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoModal