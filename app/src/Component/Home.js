'use client';
import { Button, Layout, Typography } from 'antd';
import 'antd/dist/reset.css';
import { backgroundColor, whiteColor } from '../Utils/Colors';
import ClientReview from './ClientReview';
import Headers from './Header';
import Hero from './Hero';
import Services from './Services';
import SoftwareDevelopmentProcess from './SoftwareDevelopmentProcess';
import Technologies from './Technologies';
const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function HomePage() {
    return (
        <Layout style={{ minHeight: '100vh', background: backgroundColor }}>
            {/* Header */}
            <Headers />

            <Content>
                {/* Hero Section */}
                <section id="home" style={{ padding: '40px 24px', textAlign: 'center', background: whiteColor }}>
                    <Hero />
                </section>

                {/* Services Section */}
                <section id="services" style={{ padding: '40px 24px' }}>
                    <Services />
                </section>

                {/* Technologies Section */}
                <section id="technologies" style={{ padding: '40px 24px', background: whiteColor }}>
                    <Technologies />
                </section>

                {/* Software Development Process Section */}
                <section id="process" style={{ padding: '40px 24px' }}>
                    <SoftwareDevelopmentProcess />
                </section>

                {/* Client Reviews Section */}
                <section id="reviews" style={{ padding: '40px 24px', background: whiteColor }}>
                    <ClientReview />
                </section>

                {/* About Section */}
                <section id="about" style={{ padding: '80px 24px', background: '#f1f5f9', textAlign: 'center' }}>
                    <Title level={2} style={{ color: '#020617' }}>Why D Square?</Title>
                    <Paragraph style={{ color: '#475569', maxWidth: 720, margin: '0 auto' }}>
                        We focus on clean code, future-ready architecture, and long-term technology partnerships.
                    </Paragraph>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '80px 24px', textAlign: 'center' }}>
                    <Title level={2} style={{ color: '#020617' }}>Contact Us</Title>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => (window.location.href = 'mailto:info@example.com')}
                    >
                        Email Us
                    </Button>
                </section>
            </Content>

            <Footer style={{ textAlign: 'center', background: '#ffffff', color: '#64748b' }}>
                © {new Date().getFullYear()} D Square · Unlock the Future
            </Footer>
        </Layout>
    );
}
