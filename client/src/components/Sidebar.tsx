"use client";

import { LockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)



    return (
        <div className="fixed flex flex-col justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64">
            <div className="flex h-full w-full flex-col justify-start">
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        OwlDone
                    </div>
                </div>

                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <div>
                        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                            GenAI Center
                        </h3>
                        <div className="mt-1 items-start gap-2 flex">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>


                <div></div>

            </div>
        </div>
    )
}

export default Sidebar