import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";

import NavLogo from "../../assets/images/logo.png";

export const Navbar = () => {
    return (
        <nav className="relative container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold z-20 text-xs md:text-lg">
            <motion.a
                variants={SlideBottom(0)}
                initial="hidden"
                animate="visible"
                href="#"
            >
                About
            </motion.a>
            <motion.a
                variants={SlideBottom(0.2)}
                initial="hidden"
                animate="visible"
                href="#"
            >
                Explore
            </motion.a>
            <motion.a
                variants={SlideBottom(0.4)}
                initial="hidden"
                animate="visible"
                href="#"
            >
                <img src={NavLogo} alt="logo" className="w-14" />
            </motion.a>
            <motion.a
                variants={SlideBottom(0.6)}
                initial="hidden"
                animate="visible"
                href="#"
            >
                Journal
            </motion.a>
            <motion.a
                variants={SlideBottom(0.8)}
                initial="hidden"
                animate="visible"
                href="#"
            >
                Search
            </motion.a>
        </nav>
    );
};
