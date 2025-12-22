"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { whiteColor } from "../Utils/Colors";
import { menuItems } from "../Utils/Const";
import { scrollToSection } from "../Utils/Scroll";
const { Header } = Layout;

export default function Headers() {
    const [selectedKey, setSelectedKey] = useState("home");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
        scrollToSection(key);
        setDrawerOpen(false);
    };

    useEffect(() => {
        // compute header height to offset intersection root margin so sections are detected correctly
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 90;

        const observer = new IntersectionObserver((entries) => {
            // prefer entries that are intersecting and have the largest intersectionRatio
            const visible = entries.filter((e) => e.isIntersecting);
            if (visible.length) {
                visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                setSelectedKey(visible[0].target.id);
                return;
            }

            // fallback: pick the section whose top is closest to the header line
            const sorted = entries.sort((a, b) => Math.abs(a.boundingClientRect.top - headerHeight) - Math.abs(b.boundingClientRect.top - headerHeight));
            if (sorted.length) setSelectedKey(sorted[0].target.id);
        }, { root: null, rootMargin: `-${headerHeight}px 0px -40% 0px`, threshold: [0, 0.25, 0.5, 0.75, 1] });

        // observe all sections referenced in the menu
        menuItems.forEach((item) => {
            const el = document.getElementById(item.key);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [menuItems]);

    return (
        <Header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                background: whiteColor,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
        >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src="/Logo.png" alt="D Square Logo" width={40} height={40} />
                <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>
                    D Square
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
                <Menu
                    mode="horizontal"
                    disabledOverflow
                    className="custom-menu"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </div>

            {/* Mobile Button */}
            <Button
                className="mobile-menu-btn"
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
            />

            {/* Mobile Drawer */}
            <Drawer
                placement="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Menu
                    mode="vertical"
                    className="mobile-menu"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </Drawer>
        </Header>
    );
}
