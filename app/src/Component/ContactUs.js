'use client';

import { Button, Input, Space, Typography } from 'antd';
import {
    primaryColor,
    secondaryColor, secondaryTextColor, whiteColor
} from '../Utils/Colors';
import { contactItems } from '../Utils/Const';
import AnimatedTitle from './AnimatedTitle';
import HoverItem from './HoverItem';

const { Paragraph, Text } = Typography;

export default function ContactUs() {
    return (
        <section
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 16px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Primary Color Shape */}
            <div
                style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: 500,
                    height: 500,
                    backgroundColor: primaryColor,
                    opacity: 0.08,
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    display: 'flex',
                    gap: '60px',
                    maxWidth: 1100,
                    width: '100%',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Left Side */}
                <div style={{ flex: 1, minWidth: 280 }}>
                    <AnimatedTitle
                        words={["Get In", "Touch", "with Us"]}
                        highlightWords={["Touch"]}
                        highlightColor={primaryColor}
                        once={false}
                        amount={0.5}
                    />
                    <Paragraph style={{ color: secondaryTextColor, fontSize: 16 }}>
                        Have a question, idea, or just want to say hi? We’d love to hear from you! Reach out via phone, email, or our location.
                    </Paragraph>

                    <Space direction="vertical" size={24} style={{ marginTop: 32 }}>
                        {contactItems.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 12,
                                        backgroundColor: idx % 2 === 0 ? primaryColor : secondaryColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0, // ensures consistent icon size
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <HoverItem
                                        key={idx}
                                        item={item}
                                        idx={idx}
                                    />
                                    <Text style={{ color: secondaryTextColor, fontSize: 14 }}>
                                        {item.description}
                                    </Text>
                                </div>
                            </div>
                        ))}
                    </Space>
                </div>

                {/* Right Side - Floating Form */}
                <div style={{ flex: 1, minWidth: 300 }}>
                    <div
                        style={{
                            background: whiteColor,
                            borderRadius: 24,
                            padding: 32,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                            position: 'relative',
                        }}
                    >
                        <Input placeholder="Your Name" style={{ borderRadius: 12, height: 48 }} />
                        <Input placeholder="Your Email" style={{ borderRadius: 12, height: 48 }} />
                        <Input placeholder="Your Phone" style={{ borderRadius: 12, height: 48 }} />
                        <Input.TextArea placeholder="Your Message" style={{ borderRadius: 12, height: 120 }} />
                        <Button
                            type="primary"
                            style={{
                                borderRadius: 12,
                                height: 48,
                                background: primaryColor,
                                border: 'none',
                                color: whiteColor,
                                fontWeight: 600,
                                marginTop: 8,
                            }}
                        >
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
