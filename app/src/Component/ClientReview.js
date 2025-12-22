"use client";

import { Card, Divider, Typography } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import {
    primaryColor,
    secondaryColor,
    secondaryTextColor,
} from "../Utils/Colors";
import { clientReviews } from "../Utils/Const.js";
import { Footer } from "antd/es/layout/layout";
const { Text } = Typography;
const { Paragraph } = Typography;

export default function ClientTestimonialsGrid() {
    const [activeIndex, setActiveIndex] = useState(null);

    // responsive columns: 3 on desktop, 2 on tablet, 1 on mobile
    const [columns, setColumns] = useState(() => {
        if (typeof window === "undefined") return 3;
        const w = window.innerWidth;
        if (w < 768) return 1;
        if (w < 1200) return 2;
        return 3;
    });

    useEffect(() => {
        const onResize = () => {
            const w = window.innerWidth;
            if (w < 768) setColumns(1);
            else if (w < 1200) setColumns(2);
            else setColumns(3);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const handleCardClick = (idx) => {
        setActiveIndex((prev) => (prev === idx ? null : idx));
    };

    // Framer Motion variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <>
            {/* Animated Title */}
            <AnimatedTitle
                words={["Clients", "Review"]}
                highlightWords={["Review"]}
                once={false}
                amount={0.5}
            />

            {/* Animated Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gap: 24,
                }}
            >
                {clientReviews.map((client, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={cardVariants}
                        >
                            <Card
                                onClick={() => handleCardClick(index)}
                                tabIndex={0}
                                role="button"
                                style={{
                                    borderRadius: 16,
                                    padding: 24,
                                    height: 320,
                                    boxSizing: "border-box",
                                    boxShadow: isActive
                                        ? "0 20px 40px rgba(2,6,23,0.15)"
                                        : "0 10px 30px rgba(0,0,0,0.05)",
                                    transition: "all 0.3s ease",
                                    background: "#fff",
                                    cursor: "pointer",
                                    border: `1px solid ${isActive ? primaryColor : secondaryColor}`,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {isActive ? (
                                    <>
                                        {/* Client Text */}
                                        <div style={{ flex: 1 }}>
                                            <Paragraph
                                                style={{
                                                    fontSize: 16,
                                                    color: secondaryTextColor,
                                                    lineHeight: 1.6,
                                                    margin: 0,
                                                    textAlign: "left",
                                                    overflowY: "auto",
                                                }}
                                            >
                                                “ {client.text} ”
                                            </Paragraph>
                                        </div>

                                        {/* Divider */}
                                        <Divider style={{ borderColor: primaryColor, margin: "12px 0" }} />

                                        {/* Name and Role at bottom */}
                                        <Footer style={{ marginTop: "auto", textAlign: "left", backgroundColor: 'transparent' }}>
                                            <div style={{ color: primaryColor, fontWeight: 600 }}>
                                                {client.name}
                                            </div>
                                            <div style={{ color: secondaryTextColor, fontSize: 14 }}>
                                                {client.role}
                                            </div>
                                        </Footer>
                                    </>
                                ) : (
                                    <div
                                        className="flex flex-col justify-center items-center text-center"
                                        style={{
                                            position: "absolute",
                                            inset: 0
                                        }}
                                    >
                                        <Text style={{ color: secondaryColor, fontWeight: 600, fontSize: 16 }}>
                                            {client.name}
                                        </Text>
                                        <Text style={{ color: secondaryTextColor, fontSize: 14 }}>
                                            {client.role}
                                        </Text>
                                    </div>
                                )}
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}
