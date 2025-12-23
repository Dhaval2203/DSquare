'use client';

import { Card, Col, Modal, Row, Typography } from 'antd';
import { accentColor, primaryColor, secondaryColor, secondaryTextColor, whiteColor } from '../Utils/Colors';
import { companyEmail, companyPhone, DSquareIconForCareerPage } from '../Utils/Const.js';
import RoleCard from './RoleCard';
const { Title, Paragraph, Text } = Typography;

export default function ApplyJobModal(props) {
    const { open, onClose, selectedRole } = props;

    if (!selectedRole) return null;

    const renderListWithBullets = (items, color, secondaryColorCode) => (
        <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
            {items.map((item, idx) => (
                <li
                    key={idx}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 10,
                        color: secondaryTextColor,
                    }}
                >
                    <div
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: secondaryColorCode + '20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 10,
                            flexShrink: 0,
                        }}
                    >
                        <DSquareIconForCareerPage
                            style={{
                                width: 18,
                                height: 18,
                                color: color,
                            }}
                        />
                    </div>

                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                </li>
            ))}
        </ul>
    );

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={
                <div
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        padding: '16px 0',
                        borderTop: `1px solid ${secondaryColor}30`,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <Text style={{ fontWeight: 600, fontSize: 14, color: accentColor }}>
                        Apply At: <span style={{ color: primaryColor, fontWeight: 700 }}>{companyEmail} </span>
                        | <span style={{ color: secondaryColor, fontWeight: 700 }}>{companyPhone}</span>
                    </Text>
                </div>
            }
            width={700} // modal width
            centered
            title={null}
            closeIcon={
                <div
                    style={{
                        background: primaryColor + '20',
                        borderRadius: '50%',
                        width: 28,
                        height: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: secondaryColor,
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = primaryColor + '40'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = primaryColor + '20'; }}
                >
                    ×
                </div>
            }
        >
            {/* Modal Header */}
            <div style={{ background: whiteColor, position: 'sticky', top: 0, zIndex: 10 }}>
                <Title
                    level={4}
                    style={{
                        fontWeight: 700,
                        letterSpacing: '0.3px',
                        lineHeight: 1.3,
                        background: `linear-gradient(
                            90deg,
                            ${primaryColor} 0%,
                            ${secondaryColor} 50%,
                            ${primaryColor} 100%
                        )`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Apply for {selectedRole.title}
                </Title>

                <div
                    style={{
                        height: 4,
                        width: '100%',
                        borderRadius: 4,
                        background: `linear-gradient(90deg, ${primaryColor}80, ${secondaryColor}80)`,
                        marginBottom: 8,
                    }}
                />

                <Text style={{ color: secondaryTextColor, fontSize: 14 }}>
                    Review the role details before applying
                </Text>

                <Paragraph style={{ color: secondaryTextColor }}>
                    {selectedRole.description}
                </Paragraph>
            </div>

            {/* Cards */}
            <Row gutter={[16, 16]}> {/* gutter: [horizontal, vertical] */}
                <Col xs={24} md={12}>
                    <RoleCard
                        title="Key Responsibilities"
                        items={selectedRole.responsibilities}
                        titleColor={secondaryColor}
                        bulletColor={primaryColor}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <RoleCard
                        title="Requirements"
                        items={selectedRole.requirements}
                        titleColor={primaryColor}
                        bulletColor={secondaryColor}
                    />
                </Col>
            </Row>

        </Modal>
    );
}
