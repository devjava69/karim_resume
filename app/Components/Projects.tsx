'use client'

import { ProjectList } from "../projets";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="
            grid space-y-5 mx-auto
            sm:grid-cols-1 
            md:grid-cols-2 gap-1
            lg:grid-cols-3 gap-1
        ">
            {ProjectList.map((project, index) => {
                return (
                    <div
                        className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
                        key={index}
                    >
                        <a href="#">
                            <Image src={project.image} alt="photo" width={400} height={100} />
                            {/* <img
                                className="rounded-t-lg"
                                src={`../../public/projets/${project.image}`}
                                alt=""
                            /> */}
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions
                                of 2021 so far, in reverse chronological order.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Read more
                                <svg
                                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

