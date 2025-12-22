"use client";

import { motion } from "framer-motion";

export default function AnimatedEntry({
    children,
    direction = "left", // 'left' | 'right' | 'up'
    delay = 0,
    duration = 0.7,
    once = false,
    amount = 0.4,
    whileHoverScale = 1.02,
    style = {},
}) {
    const initial =
        direction === "left"
            ? { opacity: 0, x: -80 }
            : direction === "right"
                ? { opacity: 0, x: 80 }
                : { opacity: 0, y: 20 };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: "easeOut" }}
            whileHover={{ scale: whileHoverScale }}
            style={{ height: "100%", ...style }}
        >
            {children}
        </motion.div>
    );
}
