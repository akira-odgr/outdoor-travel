import JournalImage1 from "../../assets/images/5.jpg";
import JournalImage2 from "../../assets/images/6.jpg";

type JournalItem = {
    id: number;
    title: string;
    about: string;
    date: string;
    url: string;
    image: string;
    delay: number;
};

export const JournalData: JournalItem[] = [
    {
        id: 1,
        title: "An Unforgattable",
        about: "If you only have one day to visit yosemite National Park and you want to make the out of it.",
        date: "May 30, 2024",
        url: "#",
        image: JournalImage1,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Symphonies in Steel",
        about: "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
        date: "April 30 2024",
        url: "#",
        image: JournalImage2,
        delay: 0.4,
    },
];
