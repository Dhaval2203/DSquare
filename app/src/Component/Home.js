'use client';
import { Button, Layout, Typography } from 'antd';
import 'antd/dist/reset.css';
import { backgroundColor, secondaryTextColor, whiteColor } from '../Utils/Colors';
import ClientReview from './ClientReview';
import Headers from './Header';
import Hero from './Hero';
import Services from './Services';
import SoftwareDevelopmentProcess from './SoftwareDevelopmentProcess';
import Technologies from './Technologies';
import FooterComponent from './Footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function HomePage() {
    return (
        <Layout
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column', // ✅ flex layout
                background: backgroundColor,
                overflowX: 'hidden',
            }}
        >
            {/* Header */}
            <Headers />

            {/* Content */}
            <Content style={{ flex: 1 }}>
                <section id="home" style={{ padding: '40px 16px', textAlign: 'center', background: whiteColor, overflow: 'hidden' }}>
                    <Hero />
                </section>

                <section id="services" style={{ padding: '40px 16px', overflow: 'hidden' }}>
                    <Services />
                </section>

                <section id="technologies" style={{ padding: '40px 16px', background: whiteColor, overflow: 'hidden' }}>
                    <Technologies />
                </section>

                <section id="process" style={{ padding: '40px 16px', overflow: 'hidden' }}>
                    <SoftwareDevelopmentProcess />
                </section>

                <section id="reviews" style={{ padding: '40px 16px', background: whiteColor, overflow: 'hidden' }}>
                    <ClientReview />
                </section>

                <section id="about" style={{ padding: '80px 16px', background: '#f1f5f9', textAlign: 'center', overflow: 'hidden' }}>
                    <Title level={2} style={{ color: '#020617' }}>Why D Square?</Title>
                    <Paragraph style={{ color: '#475569', maxWidth: 720, margin: '0 auto' }}>
                        We focus on clean code, future-ready architecture, and long-term technology partnerships.
                    </Paragraph>
                </section>

                <section id="contact" style={{ padding: '80px 16px', textAlign: 'center', overflow: 'hidden' }}>
                    <Title level={2} style={{ color: '#020617' }}>Contact Us</Title>
                    <Button type="primary" size="large" onClick={() => (window.location.href = 'mailto:info@example.com')}>
                        Email Us
                    </Button>
                </section>
            </Content>

            {/* Footer */}
            <FooterComponent />
        </Layout>
    );
}
