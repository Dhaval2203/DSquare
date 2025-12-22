import { Layout } from 'antd';
import { whiteColor, secondaryTextColor } from '../Utils/Colors';

const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer style={{
            textAlign: 'center',
            position: 'sticky',
            bottom: 0,
            background: whiteColor,
            color: secondaryTextColor
        }}>
            © {new Date().getFullYear()} D Square · Unlock the Future
        </Footer>
    )
}