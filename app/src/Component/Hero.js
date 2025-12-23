'use client';

import { Col, Row } from 'antd';
import HeroLeftSide from './HeroLeftSide';
import HeroRightSide from './HeroRightSide';

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
                <Col xs={24} md={12}><HeroLeftSide /></Col>
                <Col xs={24} md={12}><HeroRightSide /></Col>
            </Row>
        </section>
    );
}
