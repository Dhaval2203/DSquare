'use client';
import { Card, Col, Divider, Row, Typography } from 'antd';
import { primaryColor, secondaryColor, secondaryTextColor } from '../Utils/Colors';
import { aboutSections } from '../Utils/Const';
import AnimatedTitle from './AnimatedTitle';

const { Title, Paragraph } = Typography;

export default function AboutUs() {
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(2, 6, 23, 0.12)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)";
    };

    return (
        <section
            style={{
                padding: '100px 20px',
                textAlign: 'center',
                backgroundColor: '#f9fafb',
            }}
        >
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                {/* Animated Title */}
                <AnimatedTitle
                    words={["Why", "D Square?"]}
                    highlightWords={["D Square?"]}
                    highlightColor={primaryColor}
                    once={false}
                    amount={0.5}
                />

                {/* Intro Paragraph */}
                <Paragraph
                    style={{
                        color: secondaryTextColor,
                        fontSize: '1.25rem',
                        lineHeight: 2,
                        marginBottom: 48,
                        padding: '0 10px',
                    }}
                >
                    We focus on clean code, future-ready architecture, and long-term technology partnerships.
                    Our mission is to deliver smart, scalable, and impactful solutions that empower businesses globally.
                </Paragraph>

                {/* Info Cards */}
                <Row gutter={[32, 32]} justify="center">
                    {aboutSections.map((section, index) => {
                        // Alternate title and border colors
                        const titleColor = index % 2 === 0 ? primaryColor : secondaryColor;
                        const borderColor = index % 2 === 0 ? secondaryColor : primaryColor;

                        return (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <Card
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        borderRadius: 20,
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                                        padding: '30px 20px',
                                        minHeight: 220,
                                    }}
                                    hoverable
                                >
                                    <Title
                                        level={4}
                                        style={{
                                            color: titleColor,
                                            marginBottom: 16,
                                            borderBottom: `2px solid ${borderColor}`,
                                            display: 'inline-block',
                                        }}
                                    >
                                        {section.title}
                                    </Title>
                                    <Paragraph style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
                                        {section.description}
                                    </Paragraph>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>

                <Divider style={{ borderTop: `2px solid ${secondaryTextColor}`, maxWidth: 120, margin: '60px auto' }} />

                {/* Closing Paragraph */}
                <Paragraph style={{ color: secondaryTextColor, fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Join us on our journey to innovate, create, and deliver next-generation technology solutions. Together, we shape the future of digital experiences.
                </Paragraph>
            </div>
        </section>
    );
}
