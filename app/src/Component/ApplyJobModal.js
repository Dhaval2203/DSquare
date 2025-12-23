'use client';

import { Card, Col, Modal, Row, Typography } from 'antd';
import { accentColor, primaryColor, secondaryColor, secondaryTextColor, whiteColor } from '../Utils/Colors';
import { companyEmail, companyPhone, DSquareIconForCareerPage } from '../Utils/Const.js';
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
            <div style={{ padding: '24px', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
                <Title
                    level={4}
                    style={{
                        // marginBottom: 6,
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
            <Row gutter={16} style={{ margin: 0, padding: 0 }}>
                {/* Key Responsibilities Card */}
                <Col xs={24} md={12} style={{ padding: 0 }}>
                    <Card
                        title={<span style={{ color: secondaryColor, fontWeight: 600 }}>Key Responsibilities</span>}
                        style={{
                            borderRadius: 12,
                            maxHeight: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginRight: 8, // optional spacing between cards
                        }}
                        bodyStyle={{
                            padding: 16,
                            overflowY: 'auto',
                            flex: 1,
                        }}
                        headStyle={{
                            position: 'sticky',
                            top: 0,
                            background: whiteColor,
                            zIndex: 1,
                            borderBottom: `5px dotted ${primaryColor}80`,
                        }}
                    >
                        {renderListWithBullets(selectedRole.responsibilities, primaryColor, secondaryColor)}
                    </Card>
                </Col>

                {/* Requirements Card */}
                <Col xs={24} md={12} style={{ padding: 0 }}>
                    <Card
                        title={<span style={{ color: primaryColor, fontWeight: 600 }}>Requirements</span>}
                        style={{
                            borderRadius: 12,
                            maxHeight: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginLeft: 8, // optional spacing between cards
                        }}
                        bodyStyle={{
                            padding: 16,
                            overflowY: 'auto',
                            flex: 1,
                        }}
                        headStyle={{
                            position: 'sticky',
                            top: 0,
                            background: whiteColor,
                            zIndex: 1,
                            borderBottom: `5px dotted ${secondaryColor}80`,
                        }}
                    >
                        {renderListWithBullets(selectedRole.requirements, secondaryColor, primaryColor)}
                    </Card>
                </Col>
            </Row>
        </Modal>
    );
}
