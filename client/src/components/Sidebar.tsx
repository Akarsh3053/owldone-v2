"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/store";
import { useGetProjectsQuery } from "@/store/api";
import {
    AlertOctagonIcon,
    AlertTriangle,
    Briefcase,
    CalendarRange,
    ChevronDown,
    ChevronUp,
    ClockAlertIcon,
    HomeIcon,
    ListEnd,
    LockIcon,
    LucideIcon,
    Search,
    SettingsIcon,
    ShieldAlertIcon,
    User2Icon,
    Users2Icon,
    X,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    variant?: string;
}

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const { data: projects } = useGetProjectsQuery();
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);


    return (
        <div className={`fixed flex flex-col justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
        ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`}>
            <div className="flex h-full w-full flex-col justify-start">
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        OwlDone
                    </div>
                    {isSidebarCollapsed ? null : (
                        <button className="py-3" onClick={() => { dispatch(setIsSidebarCollapsed(!isSidebarCollapsed)) }}>
                            <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded"
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



                <nav className="z-10 w-full">
                    <SidebarLink icon={HomeIcon} label="Home" href="/" />
                    <SidebarLink icon={CalendarRange} label="Timeline" href="/timeline" />
                    <SidebarLink icon={Search} label="Search" href="/search" />
                    <SidebarLink icon={SettingsIcon} label="Settings" href="/settings" />
                    <SidebarLink icon={User2Icon} label="Users" href="/users" />
                    <SidebarLink icon={Users2Icon} label="Teams" href="/teams" />
                </nav>

                <button
                    onClick={() => setShowProjects((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Projects</span>
                    {showProjects ? (
                        <ChevronUp className="h-5 w-5" />
                    ) : (
                        <ChevronDown className="h-5 w-5" />
                    )}
                </button>

                {showProjects && projects?.map((project) => (
                    <SidebarLink
                        key={project.id}
                        icon={Briefcase}
                        label={project.name}
                        href={`/projects/${project.id}`}
                    />
                ))}

                <button
                    onClick={() => setShowPriority((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Priority</span>
                    {showPriority ? (
                        <ChevronUp className="h-5 w-5" />
                    ) : (
                        <ChevronDown className="h-5 w-5" />
                    )}
                </button>
                {showPriority && (
                    <>
                        <SidebarLink icon={AlertTriangle} label="Urgent" href="/priority/urgent" />
                        <SidebarLink icon={ShieldAlertIcon} label="High" href="/priority/high" />
                        <SidebarLink icon={AlertOctagonIcon} label="Medium" href="/priority/medium" />
                        <SidebarLink icon={ClockAlertIcon} label="Low" href="/priority/low" />
                        <SidebarLink icon={ListEnd} label="Backlog" href="/priority/backlog" />
                    </>
                )}

            </div>
        </div>
    )
}

const SidebarLink = ({ href, icon: Icon, label, variant }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full">
            <div
                className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 
                    ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
                    } justify-start px-8 py-3`}
            >
                {isActive && (<div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />)}

                <Icon className={`h-6 w-6 text-gray-800 dark:text-gray-100`} />
                <span className={`font-medium text-gray-800 dark:text-gray-100`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};

export default Sidebar