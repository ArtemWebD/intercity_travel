import { memo, useEffect, type FC } from "react";
import type { IAnimatedNumberProps } from "./types/IAnimatedNumber";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const AnimatedNumber: FC<IAnimatedNumberProps> = ({ value, digits = 2, duration = 1 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (input) => +input.toFixed(digits));

    useEffect(() => {
        const animation = animate(count, value, { duration });

        return () => animation.stop();
    }, [value, duration]);

    return <motion.span>{rounded}</motion.span>;
};

export default memo(AnimatedNumber);
