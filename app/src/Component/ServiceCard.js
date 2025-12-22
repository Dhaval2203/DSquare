import { Card } from "antd";

export default function ServiceCard({ icon, title, description }) {
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(2, 6, 23, 0.12)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
    };

    return (
        <Card
            hoverable
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: 16,
                height: "100%",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
            }}
        >
            {icon}
            <h3>{title}</h3>
            <p style={{ color: "#475569" }}>{description}</p>
        </Card>
    );
}
