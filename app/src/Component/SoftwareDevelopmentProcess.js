"use client";
import { Row, Col, Card, Typography } from "antd";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import { primaryColor, secondaryColor, secondaryTextColor } from "../Utils/Colors";
import { softwareDevelopmentProcessSteps } from "../Utils/Const.js";
const { Title, Paragraph } = Typography;

export default function SoftwareDevelopmentProcess() {
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(2, 6, 23, 0.12)";
        e.currentTarget.style.transition = "all 0.3s ease";
        e.currentTarget.style.cursor = "pointer";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        e.currentTarget.style.transition = "all 0.3s ease";
    };

    return (
        <>
            <AnimatedTitle
                words={["Our Software", "Development", "Process"]}
                highlightWords={["Development"]}
                once={false}
                amount={0.5}
            />

            <Row gutter={[24, 24]} justify="center">
                {softwareDevelopmentProcessSteps.map((step, index) => (
                    <Col xs={24} sm={12} md={8} lg={8} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            style={{ height: "100%" }}
                        >
                            <Card
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    borderRadius: 16,
                                    padding: 24,
                                    textAlign: "left",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            // bodyStyle={{ flexGrow: 1 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                >
                                    <Title
                                        level={1}
                                        style={{
                                            fontSize: 36,
                                            fontWeight: 700,
                                            color: "#e5e7eb",
                                            marginBottom: 16,
                                        }}
                                    >
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </Title>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.08 + 0.05 }}
                                >
                                    <Title
                                        level={3}
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: index % 2 === 0 ? primaryColor : secondaryColor,
                                            marginBottom: 12,
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {step.title}
                                    </Title>

                                    <Paragraph style={{ color: secondaryTextColor, fontSize: 14, flexGrow: 1 }}>
                                        {step.description}
                                    </Paragraph>
                                </motion.div>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </>
    );
}
