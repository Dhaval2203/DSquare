'use client';

import dynamic from 'next/dynamic';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

import { accentColor, primaryColor, secondaryColor, whiteColor } from '../Utils/Colors';
import { menuItems } from '../Utils/Const';
import { scrollToSection } from '../Utils/Scroll';

const { Header } = Layout;

/* AntD components must be client-only */
const ClientMenu = dynamic(() => import('antd').then((m) => m.Menu), { ssr: false });
const ClientDrawer = dynamic(() => import('antd').then((m) => m.Drawer), { ssr: false });

export default function Headers() {
    const [selectedKey, setSelectedKey] = useState('home');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Prevent observer from overriding manual click
    const isManualScrollRef = useRef(false);

    const handleMenuClick = ({ key }) => {
        isManualScrollRef.current = true;

        setSelectedKey(key);
        scrollToSection(key);
        setDrawerOpen(false);

        // unlock observer after scroll finishes
        setTimeout(() => {
            isManualScrollRef.current = false;
        }, 700);
    };

    /* Scroll spy */
    useEffect(() => {
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 90;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isManualScrollRef.current) return;

                const visible = entries.filter((e) => e.isIntersecting);
                if (!visible.length) return;

                visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                setSelectedKey(visible[0].target.id);
            },
            {
                root: null,
                rootMargin: `-${headerHeight}px 0px -40% 0px`,
                threshold: [0.25, 0.5, 0.75],
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
                padding: '0 16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
        >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image src="/Logo.png" alt="D Square Logo" width={40} height={40} />
                <span style={{ fontSize: 24, fontWeight: 900 }}>
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
            <Button
                className="mobile-menu-btn"
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
            />

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
