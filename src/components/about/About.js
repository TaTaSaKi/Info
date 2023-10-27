import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { yellow } from '@material-ui/core/colors';


export default function About() {
    const firstName = info.firstName

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                cat About Me
            </p>
            <p>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName} <span
                className={Style.green}>(main)</span> $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: "yellow"}}> Programing Language </p>
             
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: "yellow"}}> Framework </p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: "yellow"}}> Cloud Computing </p>
            <ul className={Style.skills}>
                {info.skills.devOp.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: "yellow"}}> Network </p>
            <ul className={Style.skills}>
                {info.skills.network.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName} <span
                className={Style.green}>(main)</span> $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}