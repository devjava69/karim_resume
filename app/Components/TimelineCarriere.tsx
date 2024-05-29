'use client';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceList } from "../carriere";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function TimelineCarriere() {
    return (
        <section className="mt-10 mb-10">
            <VerticalTimeline lineColor="#3e497a">
                {ExperienceList.map((experience, index) => {
                    return (
                        <VerticalTimelineElement
                            visible={true}
                            key={index}
                            className="vertical-timeline-element"
                            date={experience.periode}
                            iconStyle={
                                experience.type === "work"
                                    ? { background: "#e9d35b", color: "#fff" }
                                    : { background: "#3e497a", color: "#fff" }
                            }
                            icon={experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element">{experience.title}</h3>
                            <p>
                                <em>{experience.location}</em>
                            </p>
                            <h4>Missions :</h4>
                            <ul>
                                {experience.description.map((mission, index) => (
                                    <li key={index}>
                                        {mission["mission"]} : <br></br>
                                        <b>{mission["skills"]}</b>
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </section>
    );
}
