import { Layout } from 'antd';
import { whiteColor, secondaryTextColor } from '../Utils/Colors';

const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer
            style={{
                textAlign: 'center',
                background: whiteColor,
                color: secondaryTextColor,
                position: 'sticky',
                bottom: 0,
                width: '100%',
                padding: '16px 0',
            }}
        >
            © {new Date().getFullYear()} D Square · Unlock the Future
        </Footer>
    );
}
