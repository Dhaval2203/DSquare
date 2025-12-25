'use client';

import { Col, Layout, Modal, Row, Typography } from 'antd';
import { accentColor, primaryColor, secondaryColor, secondaryTextColor, whiteColor } from '../Utils/Colors';
import { companyEmail, companyPhone } from '../Utils/Const.js';
import RoleCard from './RoleCard';
const { Title, Paragraph, Text } = Typography;
const { Footer } = Layout;

export default function ApplyJobModal(props) {
    const { open, onClose, selectedRole } = props;

    if (!selectedRole) return null;

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={
                <Footer
                    style={{
                        width: '100%',
                        borderTop: `1px solid ${secondaryColor}30`,
                        padding: '16px 24px',
                        backgroundColor: '#fff',
                    }}
                >
                    <Row justify="center" align="middle" gutter={[16, 8]}>
                        <Col>
                            <Text style={{ fontWeight: 600, fontSize: 14, color: accentColor }}>
                                Apply : <Text style={{ color: primaryColor, fontWeight: 700 }}>{companyEmail}</Text>
                            </Text>
                        </Col>
                        <Col>
                            <Text style={{ fontWeight: 600, fontSize: 14, color: accentColor }}>
                                | <Text style={{ color: secondaryColor, fontWeight: 700 }}>{companyPhone}</Text>
                            </Text>
                        </Col>
                    </Row>
                </Footer>
            }
            width={700}
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
