'use client';

import dynamic from 'next/dynamic';
import { Button, Layout } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { accentColor, primaryColor, secondaryColor, whiteColor } from '../Utils/Colors';
import { menuItems } from '../Utils/Const';
import { scrollToSection } from '../Utils/Scroll';

const { Header } = Layout;

const ClientMenu = dynamic(
    () => import('antd').then((m) => m.Menu),
    { ssr: false }
);

const ClientDrawer = dynamic(
    () => import('antd').then((m) => m.Drawer),
    { ssr: false }
);

export default function Headers() {
    const [selectedKey, setSelectedKey] = useState('home');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
        scrollToSection(key);
        setDrawerOpen(false);
    };

    useEffect(() => {
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 90;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);

                if (visible.length) {
                    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                    setSelectedKey(visible[0].target.id);
                    return;
                }

                const sorted = entries.sort(
                    (a, b) =>
                        Math.abs(a.boundingClientRect.top - headerHeight) -
                        Math.abs(b.boundingClientRect.top - headerHeight)
                );

                if (sorted.length) {
                    setSelectedKey(sorted[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: `-${headerHeight}px 0px -40% 0px`,
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        menuItems.forEach((item) => {
            const el = document.getElementById(item.key);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Header
            suppressHydrationWarning
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                background: whiteColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // ensures spacing between logo and menu/button
                padding: '0 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                height: 80, // increased height for better UI
            }}
        >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image src="/Logo.png" alt="D Square Logo" width={50} height={50} />
                <span style={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>
                    <span style={{ color: primaryColor }}>D</span>{' '}
                    <span style={{ color: secondaryColor }}>Square</span>{' '}
                    <span style={{ color: accentColor }}>Infotech</span>
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
                <ClientMenu
                    mode="horizontal"
                    disabledOverflow
                    className="custom-menu"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </div>

            {/* Mobile Menu Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Button
                    className="mobile-menu-btn"
                    type="text"
                    icon={<TiThMenuOutline style={{ color: secondaryColor, fontSize: 28 }} />}
                    onClick={() => setDrawerOpen(true)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0,          // remove extra padding
                        height: '100%',      // make button take full height of parent
                        lineHeight: 1,
                    }}
                />
            </div>

            {/* Mobile Drawer */}
            <ClientDrawer
                placement="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <ClientMenu
                    mode="vertical"
                    className="mobile-menu"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </ClientDrawer>
        </Header>
    );
}
