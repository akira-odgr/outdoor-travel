import ExploreImage1 from "../../assets/images/1.jpg";
import ExploreImage2 from "../../assets/images/2.jpg";
import ExploreImage3 from "../../assets/images/3.jpg";

type ExploreItem = {
    id: number;
    title: string;
    place: string;
    url: string;
    image: string;
    delay: number;
};

export const ExploreData: ExploreItem[] = [
    {
        id: 1,
        title: "Nearoyfjordan",
        place: "Norway",
        url: "#",
        image: ExploreImage1,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Antelop Canyon",
        place: "United States",
        url: "#",
        image: ExploreImage2,
        delay: 0.4,
    },
    {
        id: 3,
        title: "lakes",
        place: "Austria",
        url: "#",
        image: ExploreImage3,
        delay: 0.6,
    },
];
