import { SelfImprovementRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import PagesDivider from "./PagesDivider";
import Skill from "./Skill";
import { DevSkills } from "../../constans/Skills"

const Skills = () => {
    const { htmlSkill, cssSkill, jsSkill, gitSkill, reactSkill } = DevSkills;
    const [Html, setHtml] = useState(0);
    const [Css, setCss] = useState(0);
    const [Js, setJs] = useState(0);
    const [ReactJs, SetReactJs] = useState(0);
    const [Git, setGit] = useState(0);

    useEffect(() => {
        const Timer = setInterval(() => {
            setHtml(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85)
            })

            setCss(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80)
            })

            setJs(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70)
            })

            SetReactJs(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 86)
            })

            setGit(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 55)
            })
        }, 200)

        return () => {
            clearInterval(Timer);
        }
    }, [])
    return (
        <>
            <Box>
                <PagesDivider borderColor="black" chipColor="success" label="مهارت های من" icon={<SelfImprovementRounded />} />
            </Box>
            <Skill icon={htmlSkill.icon} name={htmlSkill.name} value={Html} color={htmlSkill.color} />
            <Skill icon={cssSkill.icon} name={cssSkill.name} value={Css} color={cssSkill.color} />
            <Skill icon={jsSkill.icon} name={jsSkill.name} value={Js} color={jsSkill.color} />
            <Skill icon={reactSkill.icon} name={reactSkill.name} value={ReactJs} color={"#03a9f4"} />
            <Skill icon={gitSkill.icon} name={gitSkill.name} value={Git} color={gitSkill.color} />
        </>
    );
}

export default Skills;