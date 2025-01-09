import { CSSProperties, FC } from "react";

import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import HeroImg from "./assets/images/hero.jpg";
import { Explore } from "./components/Explore/Explore";
import { Journal } from "./components/Journal/Journal";
import { Footer } from "./components/Footer/Footer";

const bgImage: CSSProperties = {
    backgroundImage: `url(${HeroImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
};

export const App: FC = () => {
    return (
        <>
            <div className="bg-brandDark text-white overflow-hidden">
                <div style={bgImage}>
                    <Navbar />
                    <Hero />
                </div>
                <Explore />
                <Journal />
                <Footer />
            </div>
        </>
    );
};
