'use client';
import { Button, Input, Typography, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { accentColor, primaryColor, secondaryColor } from '../Utils/Colors';

const { Title, Paragraph } = Typography;

export default function Hero() {
    const [email, setEmail] = useState('');
    const [displayText, setDisplayText] = useState('');
    const fullText = "We craft SMART, SCALABLE, IMPACTFUL solutions";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = () => {
        if (!email) return;
        alert(`Thank you! We will reach out to ${email}`);
        setEmail('');
    };

    // Map colored words with their start and end indices
    const coloredWordsRanges = [
        { word: "SMART,", color: primaryColor },
        { word: "SCALABLE,", color: secondaryColor },
        { word: "IMPACTFUL", color: accentColor }
    ];

    const renderColoredText = (text) => {
        return text.split('').map((char, index) => {
            let charColor = undefined;

            // Check if current character is inside any colored word range
            for (let { word, color } of coloredWordsRanges) {
                const start = fullText.indexOf(word);
                const end = start + word.length;
                if (index >= start && index < end) {
                    charColor = color;
                    break;
                }
            }

            return <span key={index} style={{ color: charColor }}>{char}</span>;
        });
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
                overflow: 'hidden'
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

            <Row justify="center" align="middle" style={{ width: '100%', margin: 0, padding: '0 16px' }}>
                <Col xs={24} md={18} lg={12} style={{ padding: 0, maxWidth: '100%' }}>
                    <Title
                        level={1}
                        style={{
                            textAlign: 'center',
                            fontSize: 'clamp(28px, 5vw, 52px)',
                            lineHeight: 1.2,
                            color: '#020617',
                        }}
                    >
                        {renderColoredText(displayText)}
                        <span className="cursor"></span>
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
                    <Row gutter={[12, 12]} justify="center" style={{ marginTop: 32 }}>
                        <Col xs={24} sm={16} md={12}>
                            <Input
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', borderRadius: 32, padding: '14px 18px' }}
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
                                    padding: '0 32px',
                                    minWidth: 160,
                                }}
                                onClick={handleSubmit}
                            >
                                Talk to Us
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <style jsx>{`
                .cursor {
                    display: inline-block;
                    width: 1px;
                    background-color: #020617;
                    animation: blink 1s infinite;
                    margin-left: 2px;
                }
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}
