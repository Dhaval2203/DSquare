"use client";

import { Card, Divider, Typography } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import {
    primaryColor,
    secondaryColor,
    secondaryTextColor,
} from "../Utils/Colors";
import { clientReviews } from "../Utils/Const";

const { Text, Paragraph } = Typography;

export default function ClientTestimonialsGrid() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (idx) => {
        setActiveIndex((prev) => (prev === idx ? null : idx));
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            {/* Section Title */}
            <AnimatedTitle
                words={["Clients", "Review"]}
                highlightWords={["Review"]}
                once={false}
                amount={0.5}
            />

            {/* Responsive Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 20,
                }}
            >
                {clientReviews.map((client, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }}
                            variants={cardVariants}
                        >
                            <Card
                                hoverable
                                onClick={() => handleCardClick(index)}
                                style={{
                                    borderRadius: 16,
                                    padding: 20,
                                    minHeight: isActive ? "auto" : 180,
                                    height: "100%",
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    border: `1px solid ${isActive ? primaryColor : "#e5e7eb"
                                        }`,
                                    boxShadow: isActive
                                        ? "0 16px 32px rgba(2,6,23,0.15)"
                                        : "0 8px 20px rgba(0,0,0,0.06)",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {isActive ? (
                                    <>
                                        <Paragraph
                                            style={{
                                                fontSize: 14,
                                                lineHeight: 1.6,
                                                color: secondaryTextColor,
                                                marginBottom: 16,
                                            }}
                                        >
                                            “{client.text}”
                                        </Paragraph>

                                        <Divider
                                            style={{
                                                borderColor: primaryColor,
                                                margin: "8px 0",
                                            }}
                                        />

                                        <div>
                                            <Text
                                                style={{
                                                    color: primaryColor,
                                                    fontWeight: 600,
                                                    fontSize: 15,
                                                }}
                                            >
                                                {client.name}
                                            </Text>
                                            <div
                                                style={{
                                                    color: secondaryTextColor,
                                                    fontSize: 13,
                                                    marginTop: 2,
                                                }}
                                            >
                                                {client.role}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: secondaryColor,
                                                fontWeight: 600,
                                                fontSize: 15,
                                            }}
                                        >
                                            {client.name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: secondaryTextColor,
                                                fontSize: 13,
                                                marginTop: 4,
                                            }}
                                        >
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
