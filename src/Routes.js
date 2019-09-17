import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import {
    faBriefcase,
    faFileAlt,
    faHiking,
    faHome,
    faLaptop,
    faTools,
    faUserTie,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import Projects from "./views/Projects";
import Experiences from "./views/Experiences";
import Skills from "./views/Skills";
import Hobbies from "./views/Hobbies";
import Clients from "./views/Clients";

const Routes = [
    {name: 'Home', path: '/', icon: faHome, Component: Home},
    {name: 'About Me', path: '/about-me', icon: faUserTie, Component: AboutMe},
    {name: 'Projects', path: '/projects', icon: faLaptop, Component: Projects},
    {name: 'Experiences', path: '/experiences', icon: faBriefcase, Component: Experiences},
    {name: 'Skills', path: '/skills', icon: faTools, Component: Skills},
    {name: 'Hobbies', path: '/hobbies', icon: faHiking, Component: Hobbies},
    {name: 'Clients', path: '/clients', icon: faUsers, Component: Clients},
    {name: 'Resume', path: '/resume', icon: faFileAlt, Component: Resume},
];

export default Routes