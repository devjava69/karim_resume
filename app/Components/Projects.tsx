"use client";

import { ProjectList } from "../projets";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ProjectList.map((project, index) => {
                    return (
                        <div className="dark:border-gray-700 dark:bg-blue-950 dark:hover:bg-gray-700 shadow-md rounded-lg overflow-hidden" key={index}>
                            <img src={project.image} alt="project photo" className="w-full h-96 object-cover"></img>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-yellow-300">Card Title 1</h2>
                                <p className="text-yellow-300">This is a short description of the card content. It gives a brief overview of the information contained in the card.</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
