'use client';

import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import { ProjectList } from "../projets";
import Image from "next/image";


export default function Page() {
    return (
        <main>
            <Navbar />
            <h1>Hello, Projets Page !</h1>
            <Projects />
        </main>
    );
}
