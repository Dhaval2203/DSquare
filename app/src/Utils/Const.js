import { GlobalOutlined, HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { whiteColor } from "./Colors";

export const menuItems = [
    { key: "home", label: "Home" },
    { key: "services", label: "Services" },
    { key: "technologies", label: "Technologies" },
    { key: "process", label: "Process" },
    { key: "reviews", label: "Reviews" },
    { key: "career", label: "Career" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
]

export const clientReviews = [
    {
        text: "D Square helped us transform our digital platform seamlessly. Their expertise and attention to detail made the entire project a success.",
        name: "Neha Sharma",
        role: "Chief Technology Officer",
    },
    {
        text: "The D Square team was proactive, innovative, and highly professional. Our mobile app launch exceeded expectations thanks to their efforts.",
        name: "Rahul Verma",
        role: "Head of Product",
    },
    {
        text: "Working with D Square was a game-changer. Their creative solutions and timely delivery helped us scale our operations efficiently.",
        name: "Priya Nair",
        role: "Product Manager",
    },
    {
        text: "We partnered with D Square for a complex software integration, and they delivered flawlessly. Communication and execution were top-notch.",
        name: "Arjun Mehta",
        role: "Operations Lead",
    },
    {
        text: "D Square’s team exceeded our expectations in both quality and speed. Their innovative approach helped us stay ahead in the market.",
        name: "Sneha Gupta",
        role: "Chief Technology Officer",
    },
    {
        text: "Exceptional experience with D Square! They are reliable, creative, and always focused on delivering measurable results.",
        name: "Karan Patel",
        role: "Head of Digital Transformation",
    },
];

export const softwareDevelopmentProcessSteps = [
    {
        title: "Requirement Analysis",
        description:
            "Gain a clear understanding of your requirements, goals, and the challenges the software is designed to solve.",
    },
    {
        title: "Planning & Design",
        description:
            "Develop a comprehensive plan and blueprint & design a detailed strategy that includes a well-structured architecture, intuitive user interface, and seamless user experience.",
    },
    {
        title: "Development",
        description:
            "Develop software by ensuring each module is aligned with the design and integrates seamlessly with the overall functionality.",
    },
    {
        title: "Testing",
        description:
            "Conduct thorough evaluations to identify and resolve bugs, optimize performance, and ensure reliability.",
    },
    {
        title: "Deployment",
        description:
            "Deploy the software in a live environment, ensuring it is available for end-users.",
    },
    {
        title: "Maintenance & Support",
        description:
            "Offer continuous support to manage updates, resolve issues, and implement improvements, ensuring the software remains optimized.",
    },
];

export const careerOpportunities = [
    {
        title: 'Frontend Developer',
        description: 'Work on cutting-edge web applications using React, Next.js, and modern UI technologies.',
    },
    {
        title: 'Backend Developer',
        description: 'Develop robust backend services using Node.js, Express, and cloud solutions.',
    },
    {
        title: 'UI/UX Designer',
        description: 'Design intuitive and modern interfaces for web and mobile applications.',
    },
];

export const aboutSections = [{
    title: 'Our Mission',
    description: 'To build smart, scalable, and impactful solutions that empower businesses worldwide and drive innovation in every project we undertake.',
}, {
    title: 'Our Values',
    description: 'Clean code, long-term technology partnerships, continuous learning, and delivering excellence with integrity and transparency.',
}, {
    title: 'Our Vision',
    description: 'To be recognized as a global technology partner, shaping the future with innovative solutions and meaningful digital experiences.',
}];

export const contactItems = [{
    icon: <HomeOutlined style={{ fontSize: 24, color: whiteColor }} />,
    title: 'Remote Headquarters',
    description: 'We operate fully remotely. Connect with us online from anywhere in the world.',
}, {
    icon: <PhoneOutlined style={{ fontSize: 24, color: whiteColor }} />,
    title: 'Phone / WhatsApp',
    description: '+91 98765 43210',
}, {
    icon: <MailOutlined style={{ fontSize: 24, color: whiteColor }} />,
    title: 'Email Address',
    description: 'info@dsquareinfotech.com',
}];

export function icon() {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="6"
                y="6"
                width="52"
                height="52"
                rx="10"
                fill="none"
                stroke="#0ea5a4"
                stroke-width="4"
            />

            <rect
                x="18"
                y="18"
                width="28"
                height="28"
                rx="6"
                fill="none"
                stroke="#ef4444"
                stroke-width="3"
            />

            <text
                x="32"
                y="40"
                text-anchor="middle"
                font-size="22"
                font-weight="700"
                fill="#0ea5a4"
                font-family="Arial, Helvetica, sans-serif"
            >
                D
            </text>
        </svg >

    )
}