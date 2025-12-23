'use client';

import { useState, useEffect } from 'react';
import { Button, Input, Typography } from 'antd';
import { primaryColor, secondaryColor, accentColor, secondaryTextColor, whiteColor } from '../Utils/Colors';
import RotatingEarthSVG from '../Utils/RotatingEarthSVG';

const { Title, Paragraph } = Typography;

export default function HeroLeftSide() {
    const [email, setEmail] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState('typing');
    const [showCTA, setShowCTA] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const firstText = 'We BUILD solution.';
    const secondText = 'craft SMART, SCALABLE, and IMPACTFUL solutions.';
    const baseText = 'We ';

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

    useEffect(() => {
        const blink = setInterval(() => setShowCursor((v) => !v), 500);
        return () => clearInterval(blink);
    }, []);

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
            for (const r of rules) {
                if (text.slice(i, i + r.word.length) === r.word) {
                    elements.push(
                        <span key={i} style={{ color: r.color, fontWeight: 700 }}>
                            {r.word}
                        </span>
                    );
                    i += r.word.length;
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
        <div
            style={{
                position: 'relative',
                minHeight: '100vh', // ensures full viewport height
                overflow: 'hidden',
                padding: '80px 16px',
                textAlign: 'center',
            }}
        >
            {/* 🌍 BACKGROUND EARTH */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                <div style={{ height: '100%', aspectRatio: '1 / 1' }}>
                    <RotatingEarthSVG style={{ height: '100%', width: 'auto' }} />
                </div>
            </div>

            {/* CONTENT */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Title
                    level={1}
                    style={{
                        fontSize: 'clamp(32px, 5vw, 56px)',
                        lineHeight: 1.2,
                    }}
                >
                    {renderColoredText(displayText)}
                    {phase !== 'done' && (
                        <span
                            style={{
                                display: 'inline-block',
                                width: 3,
                                height: '1em',
                                background: primaryColor,
                                marginLeft: 4,
                                verticalAlign: 'bottom',
                                opacity: showCursor ? 1 : 0,
                            }}
                        />
                    )}
                </Title>

                {phase === 'done' && (
                    <Paragraph
                        style={{
                            fontSize: 16,
                            color: primaryColor,
                            marginTop: 24,
                            maxWidth: 520,
                            fontWeight: 500,
                            marginInline: 'auto',
                        }}
                    >
                        Transforming ideas into modern web, mobile, and cloud solutions.
                    </Paragraph>
                )}

                {showCTA && (
                    <div
                        style={{
                            marginTop: 32,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 12,
                        }}
                    >
                        <Input
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                borderRadius: 32,
                                padding: '14px 18px',
                                maxWidth: 300,
                            }}
                        />
                        <Button
                            style={{
                                borderRadius: 32,
                                background: primaryColor,
                                borderColor: primaryColor,
                                height: 48,
                                fontWeight: 600,
                                color: whiteColor,
                                // padding: '0 32px',
                            }}
                        >
                            Talk to Us
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
