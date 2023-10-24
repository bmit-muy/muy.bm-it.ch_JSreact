import React from "react";
import { SkillBars } from 'react-skills';


function Age() {
    const curYear = new Date().getFullYear()

    let Vage = curYear - 2006

    return(
        <p> Im {Vage} Years Old</p>
    );

}

export {Age}

function SList() {
    const dur = 1
    const skillsData = [
        {
            name: 'Python',
            level: 19,
            color: 'yellow',
            duration: dur,
        },
        {
            name: 'JS',
            level: 15,
            color: 'black',
            duration: dur,
        },
        {
            name: 'ReactJS',
            level: 17,
            color: 'blue',
            duration: dur,
        },
        {
            name: 'Power Shell',
            level: 14,
            color: 'lightblue',
            duration: dur,
        },
        {
            name: 'HTML & CSS',
            level: 25,
            color: 'green',
            duration: dur,
        },
        {
            name: 'Linux',
            level: 35,
            color: 'red',
            duration: dur,
        },
        {
            name: 'Git',
            level: 14,
            color: 'orange',
            duration: dur,
        },
        {
            name: 'GODOT',
            level: 12,
            color: 'indigo',
            duration: dur,
        }
        

    ]

return(
    <div className="SkillTabel">
        <p>0% - 20%: Novice | 21% - 40%: Beginner | 41% - 60%: Intermediate | 61% - 80%: Advanced | 81% - 100%: Expert</p>
    <SkillBars skills={skillsData} />
    </div>
);
}

export {SList}


