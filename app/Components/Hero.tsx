"use client";

import Image from "next/image";
import karim from "../../public/photo-profil-pro-karim.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import ArrowDownIcon from "@mui/icons-material/ArrowDownward";
// import resume from "../assets/CV_Karim.pdf";

function handleDownload() {
    let link = document.createElement('a');
    link.href = "/files/CV_Karim.pdf";
    link.download = 'CV Karim Trabelsi.pdf';
    link.click();
}

export default function Hero() {
    return (
        <section
            className="
            flex flex-col flex-col
            bg-blue-950 text-yellow-300
            lg:flex-row
            pb-10
        "
        >
            <div className="flex-1">
                <Image className="mx-auto h-96 w-96" src={karim} alt="photo de karim" />
            </div>
            <div className="flex-1">
                <h1 className="pt-20 text-center text-3xl">Karim TRABELSI</h1>
                <h2 className="pt-5 text-center text-2xl">Applications Conceptor-Developer</h2>
                <div className="pt-5 flex flex-row justify-center">
                    <LinkedInIcon
                        onClick={() =>
                            window.open("https://www.linkedin.com/in/karimtrabelsi", "_blank")
                        }
                    />
                    <GithubIcon
                        onClick={() =>
                            window.open(
                                "https://github.com/karimDevWM?tab=repositories",
                                "_blank",
                            )
                        }
                    />
                    <EmailIcon
                        onClick={() => window.open("mailto:ka.trabelsi9@gmail.com", "_blank")}
                    />
                    <ArrowDownIcon className='arrowDown'
                        onClick={handleDownload}
                    />
                </div>
                <p className="text-center pt-10">
                    A junior Applications Conceptor-Developer with a passion for learning
                    and creating
                </p>
            </div>
        </section>
    );
}
