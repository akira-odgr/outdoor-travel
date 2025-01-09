import { delay } from "framer-motion";

type AnimationVariant = {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;

        transition: {
            duration: number;
            delay: number;
        };
    };
};

export const SlideBottom = (delay: number): AnimationVariant => {
    return {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 1,
                delay,
            },
        },
    };
};

export const SlideUp = (delay: number): AnimationVariant => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 1,
                delay,
            },
        },
    };
};
