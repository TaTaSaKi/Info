import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import SchoolIcon from "@material-ui/icons/School";
  import WorkIcon from "@material-ui/icons/Work";
  import StarIcon from "@material-ui/icons/Star";
  import "react-vertical-timeline-component/style.min.css";

export default function Portfolio() {
    return (
        // <Box>
        //     <Grid container display={'flex'} justifyContent={'center'}>
        //         {info.portfolio.map((project, index) => (
        //            <Grid item xs={12} md={6} key={index}>
        //                <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
        //            </Grid>
        //         ))}
        //     </Grid>
        // </Box>
        // <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
        // <Grid container sx={{width: '101%'}} display={'flex'} justifyContent={'center'}>
        <div className="App">
        {/* <h1>Hello CodeSandbox</h1> */}

        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "transparent"}}
            date="Sep 2023 - Present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Master of Science in Informatics at Grenoble (MoSIG M2).
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Université Grenoble Alpes, IM²AG
            </h4>
            <p>Distributed computing: from cloud to edge computing, embedded systems and networking (DC)</p>
            </VerticalTimelineElement>            
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent"}}
            date="Oct 2019 - Sep 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Network & System Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">ITC, Phnom Penh</h4>
            <p>
                Cloud Computing, Network Infrastructure Construction, Network Team Leading
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "transparent"}}
            date="Nov 2021 - Sep 2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Graduated Master degree of Computer Science.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Department of Information and Communication Engineering at Institute of Technology of Cambodia.
            </h4>
            <p>Computer Science, Blockchain, Decentralized Identification</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "transparent"}}
            date="May 2022 - Aug 2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">Research Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
                University of Namur, Scholarship fund by Erasmus+
            </h4>
            <p>
                Decentralized Blockchain Based-PKI for patient identification management in the Blockchain Network
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent"}}
            date="Oct 2020 - Oct 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Network & System Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
                High Education Improvement Project (HEIP) fund by World Bank, ITC
            </h4>
            <p>
                Cloud Computing, Network Infrastructure Construction, Network & System Consultant
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "transparent"}}
            date="Oct 2014 - Oct 2019"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Graduated Engineering degree of Computer Science.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Department of Information and Communication Engineering at Institute of Technology of Cambodia.
            </h4>
            <p>Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent"}}
            date="Feb 2019 - Jun 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Mobile iOS/Android Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
                Clever Tech, Phnom Penh
            </h4>
            <p>React Native, iOS/Android Development</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent"}}
            date="Jul 2018 - Oct 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Mobile iOS Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
                Clever Tech, Phnom Penh
            </h4>
            <p>Swift, iOS Development</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
        // </Grid>
        // </Box>
    );
};