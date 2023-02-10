import { blue, orange, purple, yellow } from "@mui/material/colors";
import HtmlIcon from "../Img/icons/html5-original.svg";
import cssIcon from "../Img/icons/css3-original.svg";
import jsIcon from "../Img/icons/javascript-original.svg";
import reactIcon from "../Img/icons/react-original.svg";
import gitIcon from "../Img/icons/git-original.svg";

export const DevSkills = {
    htmlSkill: {
        id: 0,
        name: "HTML",
        icon: HtmlIcon,
        color: orange[700]
    },
    cssSkill: {
        id: 1,
        name: "CSS",
        icon: cssIcon,
        color: blue[500]
    },
    jsSkill: {
        id: 2,
        name: "JavaScript",
        icon: jsIcon,
        color: "#F0DB4F"
    },
    reactSkill: {
        id: 3,
        name: "React",
        icon: reactIcon,
        color: blue[300]
    },
    gitSkill: {
        id: 4,
        name: "Git",
        icon: gitIcon,
        color: purple[400]
    }
}