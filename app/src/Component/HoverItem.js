import { Typography } from 'antd';
import { useState } from 'react';
import { primaryColor, secondaryColor } from '../Utils/Colors';

const { Text } = Typography;

export default function HoverItem(props) {
    const { item, idx } = props;
    const [isHovered, setIsHovered] = useState(false);

    // Base border color
    const baseColor = idx % 2 !== 0 ? secondaryColor : primaryColor;

    // Change border color on hover (just invert baseColor for demo)
    const borderColor = isHovered ? (baseColor === primaryColor ? secondaryColor : primaryColor) : baseColor;

    return (
        <div
            style={{
                borderBottom: `2px solid ${borderColor}`,
                padding: '4px',
                borderRadius: '6px',
                transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Text
                strong
                style={{
                    display: 'block',
                    color: idx % 2 !== 0 ? primaryColor : secondaryColor,
                    fontSize: 16,
                }}
            >
                {item.title}
            </Text>
        </div>
    );
}
