"use client";
import { Card, Col, Row } from "antd";
import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedEntry from "./AnimatedEntry";
import { DiPostgresql } from "react-icons/di";
import { FaAngular, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiDotnet, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import {
    borderColor,
    primaryColor,
    secondaryColor,
    secondaryTextColor,
} from "../Utils/Colors";

const techData = {
    frontend: {
        title: "Front-end development",
        subtitle: "Craft exceptional user experiences with ease.",
        description:
            "Our front-end development team specializes in tackling a wide range of UI challenges, delivering solutions that prioritize usability and engagement. We create responsive web applications that work flawlessly across all devices.",
        tools: [
            { name: "Angular", icon: <FaAngular /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "JavaScript", icon: <FaNodeJs /> },
            { name: "TypeScript", icon: <TbBrandTypescript /> },
            { name: "HTML5", icon: <TiHtml5 /> },
        ],
    },
    backend: {
        title: "Back-end development",
        subtitle: "Streamline your operations with complete automation.",
        description:
            "Our expert back-end developers create secure and scalable solutions for data processing, business logic, and API integration using modern frameworks and architectures.",
        tools: [
            { name: "Asp.net", icon: <SiDotnet /> },
            { name: "Node.js", icon: <FaNode /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
    },
    mobile: {
        title: "Mobile app development",
        subtitle: "Build high-performance mobile applications.",
        description:
            "We develop fast, scalable, and intuitive mobile applications for iOS and Android platforms using modern mobile frameworks.",
        tools: [
            { name: "React Native", icon: <TbBrandReactNative /> },
            { name: "Flutter", icon: <FaFlutter /> }
        ],
    },
};

export default function Technologies() {
    const [active, setActive] = useState("frontend");
    const current = techData[active];

    return (
        <section style={{ padding: "100px 24px", background: "#ffffff" }}>
            <Row gutter={[48, 48]} align="middle">
                {/* LEFT SIDE */}
                <Col xs={24} md={10}>
                    <AnimatedTitle words={["Technologies", "We", "use"]} highlightWords={["Technologies"]} highlightColor={primaryColor} once={false} amount={0.6} />

                    <p style={{ color: secondaryTextColor, marginTop: 24, maxWidth: 480 }}>
                        We tackle complex challenges and streamline workflows using modern
                        technology. Our experts choose the right tools to build scalable,
                        efficient, and future-ready solutions.
                    </p>

                    <div style={{ marginTop: 40 }}>
                        {[
                            { key: "frontend", label: "Front-end development" },
                            { key: "backend", label: "Back-end development" },
                            { key: "mobile", label: "Mobile app development" },
                        ].map((item, idx) => (
                            <AnimatedEntry key={item.key} direction="left" delay={idx * 0.04}>
                                <div
                                    onClick={() => setActive(item.key)}
                                    style={{
                                        padding: "14px 16px",
                                        marginBottom: 12,
                                        cursor: "pointer",
                                        borderLeft:
                                            active === item.key
                                                ? `4px solid ${primaryColor}`
                                                : "4px solid transparent",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div style={{ color: active === item.key ? primaryColor : secondaryColor, fontWeight: active === item.key ? 700 : 600, fontSize: 15 }}>
                                        {item.label}
                                    </div>
                                </div>
                            </AnimatedEntry>
                        ))}
                    </div>
                </Col>

                {/* RIGHT SIDE */}
                <Col xs={24} md={14}>
                    <AnimatedEntry direction="right" delay={0.06}>
                        <Card
                            style={{
                                borderRadius: 16,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                            }}
                        >
                            <AnimatedEntry direction="up" delay={0}>
                                <h3 style={{ color: primaryColor, fontSize: 22 }}>
                                    {current.title}
                                </h3>
                            </AnimatedEntry>

                            <AnimatedEntry direction="up" delay={0.06}>
                                <h4 style={{ marginBottom: 16 }}>{current.subtitle}</h4>
                            </AnimatedEntry>

                            <AnimatedEntry direction="up" delay={0.12}>
                                <p style={{ color: secondaryTextColor }}>
                                    {current.description}
                                </p>
                            </AnimatedEntry>

                            {/* TOOLS */}
                            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                                {current.tools.map((tool, index) => {
                                    const isPrimary = index % 2 === 0;
                                    const defaultColor = isPrimary
                                        ? primaryColor
                                        : secondaryColor;

                                    return (
                                        <Col key={tool.name}>
                                            <AnimatedEntry direction="up" delay={0.04 * index}>
                                                <div
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.color =
                                                            isPrimary ? secondaryColor : primaryColor;
                                                        e.currentTarget.style.transform = "scale(1.08)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.color = defaultColor;
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    }}
                                                    style={{
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: "50%",
                                                        background: "#f8fafc",
                                                        border: `2px solid ${borderColor}`,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: 22,
                                                        color: defaultColor,
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease",
                                                    }}
                                                >
                                                    {tool.icon}
                                                    <span
                                                        style={{
                                                            fontSize: 10,
                                                            marginTop: 6,
                                                        }}
                                                    >
                                                        {tool.name}
                                                    </span>
                                                </div>
                                            </AnimatedEntry>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card>
                    </AnimatedEntry>
                </Col>
            </Row>
        </section>
    );
}
