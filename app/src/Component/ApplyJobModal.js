'use client';

import { Card, Col, Modal, Row, Typography } from 'antd';
import { primaryColor, secondaryColor, secondaryTextColor } from '../Utils/Colors';
import { DSquareIconForCareerPage } from '../Utils/Const.js';
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
            footer={null}
            width={800}
            centered
            bodyStyle={{ padding: 0, maxHeight: '70vh', overflow: 'hidden' }}
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
            title={null} // remove modal title, use custom header inside scroll container
        >
            {/* Modal Header */}
            <div style={{ padding: '24px', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
                <Title
                    level={4}
                    style={{
                        marginBottom: 6,
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

                <Paragraph style={{ color: secondaryTextColor, marginTop: 16 }}>
                    {selectedRole.description}
                </Paragraph>
            </div>

            {/* Scrollable Cards */}
            <div style={{ padding: '0 24px 24px 24px', overflowY: 'auto', maxHeight: 'calc(70vh - 120px)' }}>
                <Row gutter={[16, 16]} style={{ marginTop: 0 }}>
                    <Col xs={24} md={12}>
                        <Card
                            style={{ height: '100%', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', padding: 0 }}
                            bodyStyle={{ padding: 0 }}
                        >
                            {/* Sticky Card Header */}
                            <div style={{ padding: '16px', position: 'sticky', top: 0, background: '#fff', zIndex: 5 }}>
                                <span style={{ color: secondaryColor, fontWeight: 600 }}>Key Responsibilities</span>
                            </div>
                            <div style={{ padding: '0 16px 16px 16px' }}>
                                {renderListWithBullets(selectedRole.responsibilities, primaryColor, secondaryColor)}
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} md={12}>
                        <Card
                            style={{ height: '100%', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', padding: 0 }}
                            bodyStyle={{ padding: 0 }}
                        >
                            {/* Sticky Card Header */}
                            <div style={{ padding: '16px', position: 'sticky', top: 0, background: '#fff', zIndex: 5 }}>
                                <span style={{ color: primaryColor, fontWeight: 600 }}>Requirements</span>
                            </div>
                            <div style={{ padding: '0 16px 16px 16px' }}>
                                {renderListWithBullets(selectedRole.requirements, secondaryColor, primaryColor)}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
}
