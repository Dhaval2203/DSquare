'use client';

import { Button, Card, Col, Row, Typography } from 'antd';
import { useState } from 'react';
import { primaryColor, secondaryColor, secondaryTextColor } from '../Utils/Colors';
import { careerOpportunities } from '../Utils/Const.js';
import AnimatedTitle from './AnimatedTitle';
import ApplyJobModal from './ApplyJobModal';

const { Title, Paragraph } = Typography;

export default function Career() {
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    const handleApplyClick = (role) => {
        setSelectedRole(role);
        setOpen(true);
    };

    return (
        <section
            id="career"
            style={{
                padding: '60px 16px',
                textAlign: 'center',
            }}
        >
            <AnimatedTitle
                words={['Join our', 'Team']}
                highlightWords={['Team']}
                highlightColor={primaryColor}
                once={false}
                amount={0.5}
            />

            <Paragraph
                style={{
                    color: secondaryTextColor,
                    maxWidth: 700,
                    margin: '0 auto 40px',
                }}
            >
                Explore exciting career opportunities and become a part of our mission
                to build smart, scalable, and impactful solutions.
            </Paragraph>

            <Row gutter={[24, 24]} justify="center">
                {careerOpportunities.map((role, index) => {
                    const color = index % 2 === 0 ? primaryColor : secondaryColor;

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
                                <Title level={4} style={{ color, marginBottom: 12 }}>
                                    {role.title}
                                </Title>

                                <Paragraph
                                    style={{
                                        color: secondaryTextColor,
                                        minHeight: 60,
                                    }}
                                >
                                    {role.description}
                                </Paragraph>

                                <Button
                                    type="primary"
                                    style={{
                                        borderRadius: 32,
                                        background: color,
                                        borderColor: color,
                                    }}
                                    onClick={() => handleApplyClick(role)}
                                >
                                    Apply Now
                                </Button>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            <ApplyJobModal
                open={open}
                onClose={() => setOpen(false)}
                selectedRole={selectedRole}
            />
        </section>
    );
}
