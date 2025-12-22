"use client";

import { motion } from "framer-motion";
import { primaryColor, secondaryColor } from "../Utils/Colors";

export default function AnimatedTitle({
    words,
    children,
    highlightWords = [],
    highlightColor = primaryColor,
    once = false,
    amount = 0.5,
    delay = 0,
}) {
    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const wrapperStyle = {
        textAlign: "center",
        marginBottom: 64,
        fontSize: 32,
        fontWeight: 700,
    };

    if (Array.isArray(words) && words.length > 0) {
        return (
            <h2 style={wrapperStyle}>
                {words.map((word, i) => {
                    const isHighlighted = Array.isArray(highlightWords)
                        ? highlightWords.includes(word)
                        : word === highlightWords;

                    return (
                        <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once, amount }}
                            variants={titleVariants}
                            transition={{ delay }}
                            style={{
                                marginRight: 8,
                                color: isHighlighted ? highlightColor : "inherit",
                                borderBottom: isHighlighted ? `2px solid ${secondaryColor}` : "none",
                                display: "inline-block",
                            }}
                        >
                            {isHighlighted ? word.toUpperCase() : word}
                        </motion.span>
                    );
                })}
            </h2>
        );
    }

    // Fallback: simple animated wrapper for arbitrary children
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            style={wrapperStyle}
        >
            {children}
        </motion.div>
    );
}
