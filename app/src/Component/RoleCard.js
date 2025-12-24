'use client';

import { Card } from 'antd';
import { DSquareIconForCareerPage } from '../Utils/Const.js';
import { secondaryTextColor, whiteColor } from '../Utils/Colors';

export default function RoleCard(props) {
    const { title, items, titleColor, bulletColor, backgroundColor } = props;

    const renderListWithBullets = (items, color, secondaryColorCode) => (
        <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
            {items.map((item, idx) => (
                <li
                    key={idx}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
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
        <Card
            title={<span style={{ color: titleColor, fontWeight: 600 }}>{title}</span>}
            style={{
                borderRadius: 12,
                maxHeight: '40vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
            styles={{
                header: {
                    position: 'sticky',
                    top: 0,
                    background: whiteColor,
                    zIndex: 10,
                    borderBottom: `5px dotted ${bulletColor}80`,
                },
                body: {
                    padding: 16,
                    overflowY: 'auto',
                    flex: 1,
                    backgroundColor: backgroundColor || whiteColor,
                },
            }}
        >
            {renderListWithBullets(items, bulletColor, titleColor)}
        </Card>
    );
}
