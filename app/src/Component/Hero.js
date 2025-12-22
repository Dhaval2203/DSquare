'use client';
import { Button, Input, Typography, Row, Col } from 'antd';
import { useState } from 'react';
import { primaryColor, secondaryColor } from '../Utils/Colors';

const { Title, Paragraph } = Typography;

export default function Hero() {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (!email) return;
        alert(`Thank you! We will reach out to ${email}`);
        setEmail('');
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: '#f5f6fa',
                padding: '64px 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background blobs */}
            <div
                style={{
                    position: 'absolute',
                    width: 260,
                    height: 260,
                    borderRadius: '50%',
                    background: primaryColor + '33',
                    top: '-80px',
                    left: '-80px',
                    filter: 'blur(120px)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: 320,
                    height: 320,
                    borderRadius: '50%',
                    background: secondaryColor + '33',
                    bottom: '-120px',
                    right: '-120px',
                    filter: 'blur(140px)',
                }}
            />

            <Row
                justify="center"
                align="middle"
                style={{
                    width: '100%',
                    margin: 0,
                    padding: '0 16px',
                }}
            >
                <Col
                    xs={24}
                    md={18}
                    lg={12}
                    style={{
                        padding: 0,
                        maxWidth: '100%',
                    }}
                >
                    <Title
                        level={1}
                        style={{
                            textAlign: 'center',
                            fontSize: 'clamp(28px, 5vw, 52px)',
                            lineHeight: 1.2,
                            color: '#020617',
                        }}
                    >
                        We craft <span style={{ color: primaryColor }}>smart</span>, scalable
                        <br />
                        <span style={{ color: secondaryColor }}>impactful</span> solutions
                    </Title>

                    <Paragraph
                        style={{
                            textAlign: 'center',
                            fontSize: 'clamp(14px, 2.5vw, 16px)',
                            color: '#475569',
                            marginTop: 16,
                            maxWidth: 520,
                            marginInline: 'auto',
                        }}
                    >
                        Transforming ideas into robust web, mobile, and cloud solutions
                        with modern technologies.
                    </Paragraph>

                    {/* CTA */}
                    <Row
                        gutter={[12, 12]}
                        justify="center"
                        style={{ marginTop: 32 }}
                    >
                        <Col xs={24} sm={16} md={12}>
                            <Input
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    borderRadius: 32,
                                    padding: '14px 18px',
                                }}
                            />
                        </Col>

                        <Col xs="auto" style={{ textAlign: 'center' }}>
                            <Button
                                style={{
                                    borderRadius: 32,
                                    background: primaryColor,
                                    borderColor: primaryColor,
                                    height: 48,
                                    fontWeight: 600,
                                    color: '#fff',
                                    padding: '0 32px', // ✅ smaller width
                                    minWidth: 160,     // optional minimum width
                                }}
                                onClick={handleSubmit}
                            >
                                Talk to Us
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}
