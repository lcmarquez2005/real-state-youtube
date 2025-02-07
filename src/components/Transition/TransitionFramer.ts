import { delay } from "framer-motion"

export const fadeIn = () => {
    return {
        hidden: {
            opacity: 0,
            x:0,
            transition: {
                type: "tween",
                duration: 0.8,
                delay: 0.8,
                ease: [0.25]
            }
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};