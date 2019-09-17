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
    faUserTie
} from "@fortawesome/free-solid-svg-icons";
import Projects from "./views/Projects";

const Routes = [
    {name: 'Home', path: '/', icon: faHome, Component: Home},
    {name: 'About Me', path: '/about-me', icon: faUserTie, Component: AboutMe},
    {name: 'Projects', path: '/projects', icon: faLaptop, Component: Projects},
    {name: 'Experiences', path: '/experiences', icon: faBriefcase, Component: Projects},
    {name: 'Skills', path: '/skills', icon: faTools, Component: Projects},
    {name: 'Hobbies', path: '/hobbies', icon: faHiking, Component: Projects},
    {name: 'Clients', path: '/clients', icon: faHiking, Component: Projects},
    {name: 'Resume', path: '/resume', icon: faFileAlt, Component: Resume},
];

export default Routes