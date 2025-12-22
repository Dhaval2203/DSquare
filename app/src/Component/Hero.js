'use client';
import { Button, Input, Typography, Row, Col, Space } from 'antd';
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
                background: '#f5f6fa', // softer modern background
                padding: '0 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Darker and more blurred floating blobs */}
            <div style={{
                position: 'absolute',
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: primaryColor + '33', // darker
                top: -100,
                left: -100,
                filter: 'blur(120px)',
                zIndex: 0,
                transition: 'all 0.6s ease',
            }} />
            <div style={{
                position: 'absolute',
                width: 400,
                height: 400,
                borderRadius: '50%',
                background: secondaryColor + '33', // darker
                bottom: -150,
                right: -150,
                filter: 'blur(140px)',
                zIndex: 0,
                transition: 'all 0.6s ease',
            }} />

            <Row
                style={{ width: '100%', zIndex: 1 }}
                gutter={[32, 32]}
                align="middle"
                justify="center"
            >
                <Col xs={24} md={12}>
                    <Title level={1} style={{ color: '#020617', lineHeight: 1.2 }}>
                        We craft <span style={{ color: primaryColor }}>smart</span>,<br />
                        scalable, and <span style={{ color: secondaryColor }}>impactful</span> solutions
                    </Title>
                    <Paragraph style={{ color: '#475569', fontSize: 16, marginTop: 16 }}>
                        Transforming ideas into robust web, mobile, and cloud solutions with modern technologies.
                    </Paragraph>

                    <Row style={{ marginTop: 32 }} gutter={[12, 12]} align="middle">
                        <Col xs={24} sm={16}>
                            <Input
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    maxWidth: 260,
                                    borderRadius: 32,
                                    border: '1px solid #cfd4da',
                                    padding: '12px 16px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                                }}
                                onFocus={(e) => e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)'}
                                onBlur={(e) => e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.05)'}
                            />
                        </Col>
                        <Col xs={24} sm={8}>
                            <Button
                                style={{
                                    width: '100%',
                                    maxWidth: 160,
                                    borderRadius: 32,
                                    background: primaryColor,
                                    borderColor: primaryColor,
                                    padding: '0 28px',
                                    height: 50,
                                    fontWeight: 600,
                                    color: '#fff',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                                    transition: 'all 0.3s, transform 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
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
