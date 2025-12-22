import { Col, Row } from "antd";
import {
    CloudOutlined,
    RocketOutlined,
    MobileOutlined,
} from "@ant-design/icons";
import { primaryColor, secondaryColor } from "../Utils/Colors";
import AnimatedEntry from "./AnimatedEntry";
import ServiceCard from "./ServiceCard";
import AnimatedTitle from "./AnimatedTitle";
import { CgWebsite } from "react-icons/cg";

export default function Services() {
    return (
        <>
            {/* Section Header */}
            <AnimatedTitle
                words={["Our", "Main", "Services"]}
                highlightWords={["Services"]}
                highlightColor={primaryColor}
                once={false}
                amount={0.5}
            />

            {/* Cards */}
            <Row gutter={[32, 32]} justify="center">
                <Col xs={24} sm={12} md={6}>
                    <AnimatedEntry direction="left" delay={0}>
                        <ServiceCard
                            icon={
                                <CgWebsite
                                    style={{ fontSize: 36, color: primaryColor, marginBottom: 16 }}
                                />
                            }
                            title="Web App Development"
                            description="Scalable, secure, and high-performance web applications built using modern frameworks and clean architecture."
                        />
                    </AnimatedEntry>
                </Col>

                <Col xs={24} sm={12} md={6}>
                    <AnimatedEntry direction="left" delay={0.06}>
                        <ServiceCard
                            icon={
                                <MobileOutlined
                                    style={{
                                        fontSize: 36,
                                        color: secondaryColor,
                                        marginBottom: 16,
                                    }}
                                />
                            }
                            title="Mobile App Development"
                            description="Intuitive and fast iOS and Android applications delivering seamless user experiences across devices."
                        />
                    </AnimatedEntry>
                </Col>

                <Col xs={24} sm={12} md={6}>
                    <AnimatedEntry direction="right" delay={0.12}>
                        <ServiceCard
                            icon={
                                <RocketOutlined
                                    style={{ fontSize: 36, color: primaryColor, marginBottom: 16 }}
                                />
                            }
                            title="Product Development"
                            description="End-to-end product development from idea and design to launch, scaling, and long-term growth."
                        />
                    </AnimatedEntry>
                </Col>

                <Col xs={24} sm={12} md={6}>
                    <AnimatedEntry direction="right" delay={0.18}>
                        <ServiceCard
                            icon={
                                <CloudOutlined
                                    style={{
                                        fontSize: 36,
                                        color: secondaryColor,
                                        marginBottom: 16,
                                    }}
                                />
                            }
                            title="Cloud & DevOps Solutions"
                            description="Cloud infrastructure, CI/CD pipelines, monitoring, and automation to keep systems reliable and future-ready."
                        />
                    </AnimatedEntry>
                </Col>
            </Row>
        </>
    );
}
