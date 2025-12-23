'use client';

import { Button, Input, Typography, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor, accentColor, secondaryTextColor } from '../Utils/Colors';

const { Title, Paragraph } = Typography;

// Left Side Component: animated typing + CTA
const LeftSide = () => {
    const [email, setEmail] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState('typing');
    const [showCTA, setShowCTA] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const firstText = 'We BUILD solution.';
    const secondText = 'craft SMART, SCALABLE, and IMPACTFUL solutions.';
    const baseText = 'We ';

    // Typing effect
    useEffect(() => {
        let interval;
        let timeout;

        if (phase === 'typing') {
            let i = 0;
            interval = setInterval(() => {
                setDisplayText(firstText.slice(0, i + 1));
                i++;
                if (i === firstText.length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => setPhase('thinking'), 900);
                }
            }, 140);
        }

        if (phase === 'thinking') {
            timeout = setTimeout(() => setPhase('backspacing'), 1300);
        }

        if (phase === 'backspacing') {
            interval = setInterval(() => {
                setDisplayText((prev) => {
                    if (prev.length <= baseText.length) {
                        clearInterval(interval);
                        setPhase('retyping');
                        return baseText;
                    }
                    return prev.slice(0, -1);
                });
            }, 90);
        }

        if (phase === 'retyping') {
            let i = 0;
            interval = setInterval(() => {
                setDisplayText(baseText + secondText.slice(0, i + 1));
                i++;
                if (i === secondText.length) {
                    clearInterval(interval);
                    setPhase('done');
                    setTimeout(() => setShowCTA(true), 400);
                }
            }, 110);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [phase]);

    // Blinking cursor
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    // Render colored words
    const renderColoredText = (text) => {
        const rules = [
            { word: 'BUILD', color: primaryColor },
            { word: 'SMART,', color: primaryColor },
            { word: 'SCALABLE,', color: secondaryColor },
            { word: 'IMPACTFUL', color: accentColor },
        ];

        const elements = [];
        let i = 0;

        while (i < text.length) {
            let matched = false;
            for (let r of rules) {
                const { word, color } = r;
                if (text.slice(i, i + word.length) === word) {
                    elements.push(
                        <span key={i} style={{ color, fontWeight: 700 }}>
                            {word}
                        </span>
                    );
                    i += word.length;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                elements.push(<span key={i}>{text[i]}</span>);
                i++;
            }
        }
        return elements;
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Title level={1} style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.2 }}>
                {renderColoredText(displayText)}
                {
                    phase !== 'done' && (
                        <span
                            style={{
                                display: 'inline-block',
                                width: 3,
                                height: '1em',
                                background: primaryColor,
                                marginLeft: 4,
                                verticalAlign: 'bottom',
                                opacity: showCursor ? 1 : 0,
                                transition: 'opacity 0.1s',
                            }}
                        />)
                }
            </Title>

            {phase === 'thinking' && (
                <div
                    style={{
                        width: 90,
                        height: 3,
                        margin: '12px auto 0',
                        borderRadius: 2,
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                        animation: 'breathe 1.6s ease-in-out infinite',
                        opacity: 0.5,
                    }}
                />
            )}

            {phase === 'done' && (
                <Paragraph
                    style={{
                        fontSize: 16,
                        color: secondaryTextColor,
                        marginTop: 24,
                        maxWidth: 520,
                        marginInline: 'auto',
                        animation: 'fadeSlideUp 0.8s ease forwards',
                    }}
                >
                    Transforming ideas into modern web, mobile, and cloud solutions.
                </Paragraph>
            )}

            {showCTA && (
                <div style={{ marginTop: 32, animation: 'fadeUp 0.6s ease forwards' }}>
                    <Row gutter={[12, 12]} justify="center">
                        <Col xs={24} sm={16} md={12}>
                            <Input
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ borderRadius: 32, padding: '14px 18px' }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button
                                style={{
                                    borderRadius: 32,
                                    background: primaryColor,
                                    borderColor: primaryColor,
                                    height: 48,
                                    fontWeight: 600,
                                    color: '#fff',
                                    padding: '0 32px',
                                }}
                            >
                                Talk to Us
                            </Button>
                        </Col>
                    </Row>
                </div>
            )}

            <style jsx>{`
        @keyframes breathe {
          0% { transform: scaleX(0.7); opacity: 0.3; }
          50% { transform: scaleX(1); opacity: 0.6; }
          100% { transform: scaleX(0.7); opacity: 0.3; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

// Right Side Component: floating circles + tech orbs
const RightSide = () => {
    const [showOrbs, setShowOrbs] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOrbs(true);
        }, 100); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <div className="circle circle1" />
            <div className="circle circle2" />
            <div className="circle circle3" />
            <div className="circle circle4" />

            {
                showOrbs ?
                    <>
                        <div className="orb orb1"><span className="orbLabel">⚡ AI Ideas</span></div>
                        <div className="orb orb2"><span className="orbLabel">☁️ Cloud</span></div>
                        <div className="orb orb3"><span className="orbLabel">🌐 Web</span></div>
                        <div className="orb orb4"><span className="orbLabel">📱 Mobile</span></div>
                    </> : null
            }

            <style jsx>{`
      .circle { position: absolute; border-radius: 50%; opacity: 0.3; animation: float 6s ease-in-out infinite alternate; }
      .circle1 { width: 80px; height: 80px; background: ${primaryColor}; top: 10%; left: 20%; }
      .circle2 { width: 60px; height: 60px; background: ${secondaryColor}; top: 40%; left: 60%; }
      .circle3 { width: 100px; height: 100px; background: ${accentColor}; top: 70%; left: 30%; }
      .circle4 { width: 50px; height: 50px; background: ${secondaryTextColor}; top: 25%; left: 75%; }

      @keyframes float { 0% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } 100% { transform: translateY(0) translateX(0); } }

      .orb { position: absolute; width: 80px; height: 80px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 6px 20px rgba(0,0,0,0.2); animation: floatOrb 5s ease-in-out infinite alternate; }
      .orb span.orbLabel { pointer-events: none; }
      .orb1 { top: 20%; left: 55%; background: ${secondaryTextColor}88; animation-delay: 0s; }
      .orb2 { top: 50%; left: 70%; background: ${secondaryColor}88; animation-delay: 1s; }
      .orb3 { top: 65%; left: 35%; background: ${accentColor}88; animation-delay: 2s; }
      .orb4 { top: 35%; left: 25%; background: ${primaryColor}88; animation-delay: 3s; }

      @keyframes floatOrb { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
    `}</style>
        </div>
    )
};

// Main Hero combining left + right
export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '64px 16px',
                background: '#f5f6fa',
            }}
        >
            <Row justify="center" align="middle" style={{ width: '100%' }} gutter={[32, 32]}>
                <Col xs={24} md={12}><LeftSide /></Col>
                <Col xs={24} md={12}><RightSide /></Col>
            </Row>
        </section>
    );
}
