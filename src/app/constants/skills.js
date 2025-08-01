import {
  SiNextdotjs,
  SiMongodb,

} from "react-icons/si";

import  html  from "../../Assets/skills-img/html.svg";
import css from "../../Assets/skills-img/css.svg";
import bootstrap from "../../Assets/skills-img/bootstrap.png";
import tailwind from "../../Assets/skills-img/tailwind.png";
import sass from "../../Assets/skills-img/sass.svg";
import jquery from "../../Assets/skills-img/jquery.png";
import ts from "../../Assets/skills-img/TypeScript.png";
import npm from "../../Assets/skills-img/npm.png";
import node from "../../Assets/skills-img/node.svg";
import graphQL from "../../Assets/skills-img/graphQL.png";
import js from "../../Assets/skills-img/js.svg";
import react from "../../Assets/skills-img/react.svg";
import redux from "../../Assets/skills-img/redux.png";
import git from "../../Assets/skills-img/git.svg";
import mongodb from "../../Assets/skills-img/mongodb.png";
import Shadcn from "../../Assets/skills-img/shadcn.png";

import Image from "next/image";

export const skills = [
  {
    name: "HTML5",
    icon: <Image src={html} alt="HTML5" width={40} height={40} />,
    level: 95,
  },
  {
    name: "CSS3",
    icon: <Image src={css} alt="CSS3" width={40} height={40} />,
    level: 95,
  },
  {
    name: "Bootstrap",
    icon: <Image src={bootstrap} alt="Bootstrap" width={40} height={40} />,
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={tailwind} alt="Tailwind" width={40} height={40} />,
    level: 95,
  },
  {
    name: "Sass",
    icon: <Image src={sass} alt="Sass" width={40} height={40} />,
    level: 80,
  },
  {
    name: "JavaScript",
    icon: <Image src={js} alt="JavaScript" width={40} height={40} />,
    level: 90,
  },
  {
    name: "jQuery",
    icon: <Image src={jquery} alt="jQuery" width={40} height={40} />,
    level: 80,
  },
  {
    name: "TypeScript",
    icon: <Image src={ts} alt="TypeScript" width={40} height={40} />,
    level: 80,
  },
  {
    name: "React",
    icon: <Image src={react} alt="React" width={40} height={40} />,
    level: 90,
  },
  {
    name: "Redux",
    icon: <Image src={redux} alt="Redux" width={40} height={40} />,
    level: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs  width={40} height={40} />,
    level: 90,
  },
  {
    name: "NPM",
    icon: <Image src={npm} alt="NPM" width={40} height={40} />,
    level: 90,
  },
  {
    name: "Material UI",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <path
          fill="#0073E6"
          fillRule="evenodd"
          d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    level: 85,
  },
    {
    name: "Shadcn",
    icon: <Image src={Shadcn} alt="Shadcn" width={40} height={40} />,
    level: 85,
  },
  {
    name: "Node.js",
    icon: <Image src={node} alt="Node.js" width={40} height={40} />,
    level: 65,
  },
  {
    name: "Git",
    icon: <Image src={git} alt="Git" width={40} height={40} />,
    level: 80,
  },
  {
    name: "GraphQL",
    icon: <Image src={graphQL} alt="GraphQL" width={40} height={40} />,
    level: 75,
  },
  {
    name: "MongoDB",
    icon: <Image src={mongodb} alt="MongoDB" width={40} height={40} />,
    level: 65,
  },
];
