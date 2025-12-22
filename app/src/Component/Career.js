'use client';
import { Button, Card, Col, Row, Typography } from 'antd';
import { primaryColor, secondaryColor, secondaryTextColor } from '../Utils/Colors';
import { careerOpportunities } from '../Utils/Const.js';
import AnimatedTitle from './AnimatedTitle.js';

const { Title, Paragraph } = Typography;

export default function Career() {
    return (
        <section
            id="career"
            style={{
                padding: '60px 16px',
                textAlign: 'center',
            }}
        >
            {/* Section Header */}
            <AnimatedTitle
                words={["Join our", "Team"]}
                highlightWords={["Team"]}
                highlightColor={primaryColor}
                once={false}
                amount={0.5}
            />
            <Paragraph style={{ color: secondaryTextColor, maxWidth: 700, margin: '0 auto 40px auto' }}>
                Explore exciting career opportunities and become a part of our mission to build smart, scalable, and impactful solutions.
            </Paragraph>

            <Row gutter={[24, 24]} justify="center">
                {careerOpportunities.map((role, index) => {
                    const color = index % 2 === 0 ? primaryColor : secondaryColor; // Alternate colors
                    return (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card
                                hoverable
                                style={{
                                    borderRadius: 16,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    border: 'none',
                                }}
                            >
                                <Title level={4} style={{ color: color, marginBottom: 12 }}>
                                    {role.title}
                                </Title>
                                <Paragraph style={{ color: secondaryTextColor, minHeight: 60 }}>
                                    {role.description}
                                </Paragraph>
                                <Button
                                    type="primary"
                                    style={{
                                        borderRadius: 32,
                                        background: color,
                                        borderColor: color,
                                    }}
                                    onClick={() => alert(`Apply for ${role.title}`)}
                                >
                                    Apply Now
                                </Button>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}
