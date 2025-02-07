import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "./TransitionFramer";

export function Transition(props: TransitionProps) {
    const { children, className } = props
    const ref = useRef(null)

    const isInView = useInView(ref, {once: false})
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
         }// else {
        //     mainControls.start("hidden")
        //     slideControls.start("hidden")
        // }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div variants={fadeIn()} 
                        initial="hidden" 
                        animate={mainControls} 
                        className={className}>

                {children}
            </motion.div>
        </div>
    )
}