import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Page() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl">Skills</h1>
        <ol>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline">Front-End</h2>
            <span>HTML, CSS, Bootstrap, Javascript, React, Material UI, Flutter</span>
          </li>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline">Back-End</h2>
            <span>Flask, Symfony, NestJS, ASP .Net Core</span>
          </li>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline">Database</h2>
            <span>SQL server, MySQL, mongoDb</span>
          </li>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline">CI/CD</h2>
            <span>Azure DevOps boards - Azure DevOps Repository - Pipelines - Azure App Services, Mysql Database</span><br />
            <span>Github Projects - Github Repository - Github Actions - GHCR - Oracle Ubuntu server</span>
          </li>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline">Serveurs distants</h2>
            <span>Azure App service, </span>
          </li>
          <li className="mt-5">
            <h2 className="text-2xl text-center underline ">Gestion de projets</h2>
            <span>GitHub, Gitlab, Trello, Azure DevOps boards</span>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl text-center underline">Systèmes exploitations</h2>
            <span>Ubuntu, windows</span>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl text-center underline">Languages</h2>
            <span>Python, PHP, C#, Javascript, Typescript</span>
          </li>
        </ol>
      </div>
      <Footer />
    </main>
  );
}
