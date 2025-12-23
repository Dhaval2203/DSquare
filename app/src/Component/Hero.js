'use client';
import { Button, Input, Typography, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor, accentColor } from '../Utils/Colors';

const { Title, Paragraph } = Typography;

export default function Hero() {
    const [email, setEmail] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState('typing'); // typing → thinking → replacing

    const initialText = 'We BUILD solution.';
    const finalText = 'We craft SMART, SCALABLE, and IMPACTFUL solutions.';

    useEffect(() => {
        let index = 0;
        let timeout;

        if (phase === 'typing') {
            const interval = setInterval(() => {
                setDisplayText(initialText.slice(0, index + 1));
                index++;

                if (index === initialText.length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => setPhase('thinking'), 800);
                }
            }, 90);

            return () => clearInterval(interval);
        }

        if (phase === 'thinking') {
            timeout = setTimeout(() => {
                setDisplayText('');
                setPhase('replacing');
            }, 900);
        }

        if (phase === 'replacing') {
            index = 0;
            const interval = setInterval(() => {
                setDisplayText(finalText.slice(0, index + 1));
                index++;

                if (index === finalText.length) {
                    clearInterval(interval);
                }
            }, 60);

            return () => clearInterval(interval);
        }

        return () => clearTimeout(timeout);
    }, [phase]);

    const handleSubmit = () => {
        if (!email) return;
        alert(`Thank you! We will reach out to ${email}`);
        setEmail('');
    };

    // Keyword-based coloring (AI-safe during typing)
    const renderColoredText = (text) => {
        const colorRules = [
            { word: 'BUILD', color: primaryColor },
            { word: 'SMART,', color: primaryColor },
            { word: 'SCALABLE,', color: secondaryColor },
            { word: 'IMPACTFUL', color: accentColor },
        ];

        return text.split('').map((char, index) => {
            let color = '#020617';
            let fontWeight = 600;

            colorRules.forEach(({ word, color: ruleColor }) => {
                const start = text.indexOf(word);
                const end = start + word.length;

                if (start !== -1 && index >= start && index < end) {
                    color = ruleColor;
                    fontWeight = 700;
                }
            });

            return (
                <span key={index} style={{ color, fontWeight }}>
                    {char}
                </span>
            );
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

            <Row justify="center" align="middle" style={{ width: '100%', padding: '0 16px' }}>
                <Col xs={24} md={18} lg={12}>
                    <Title
                        level={1}
                        style={{
                            textAlign: 'center',
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            lineHeight: 1.2,
                        }}
                    >
                        {renderColoredText(displayText)}
                        <span className="cursor" />
                    </Title>

                    {phase === 'thinking' && (
                        <Paragraph
                            style={{
                                textAlign: 'center',
                                marginTop: 8,
                                fontSize: 14,
                                color: '#64748b',
                                letterSpacing: 1,
                            }}
                        >
                            AI thinking<span className="dots">...</span>
                        </Paragraph>
                    )}

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
                        Transforming ideas into modern web, mobile, and cloud solutions.
                    </Paragraph>

                    {/* CTA */}
                    <Row gutter={[12, 12]} justify="center" style={{ marginTop: 32 }}>
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

                        <Col xs="auto">
                            <Button
                                onClick={handleSubmit}
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
                    width: 2px;
                    height: 1em;
                    background-color: #020617;
                    animation: blink 1s infinite;
                    margin-left: 4px;
                }

                .dots {
                    animation: dots 1.4s infinite;
                }

                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }

                @keyframes dots {
                    0% { content: ''; }
                    33% { content: '.'; }
                    66% { content: '..'; }
                    100% { content: '...'; }
                }
            `}</style>
        </section>
    );
}
