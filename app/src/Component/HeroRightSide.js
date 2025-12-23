import { useEffect, useState } from 'react';
import { accentColor, primaryColor, secondaryColor, secondaryTextColor } from '../Utils/Colors';

export default function HeroRightSide() {
    const [showOrbs, setShowOrbs] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOrbs(true);
        }, 100); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <div className="circle circle1" />
            <div className="circle circle2" />
            <div className="circle circle3" />
            <div className="circle circle4" />

            {
                showOrbs ?
                    <>
                        <div className="orb orb3"><span className="orbLabel">🌐 Web</span></div>
                        <div className="orb orb4"><span className="orbLabel">📱 Mobile</span></div>
                        <div className="orb orb2"><span className="orbLabel">☁️ Cloud</span></div>
                        <div className="orb orb1"><span className="orbLabel">⚡ AI Ideas</span></div>
                    </> : null
            }

            <style jsx>{`
      .circle { position: absolute; border-radius: 50%; opacity: 0.3; animation: float 6s ease-in-out infinite alternate; }
      .circle1 { width: 80px; height: 80px; background: ${primaryColor}; top: 10%; left: 20%; }
      .circle2 { width: 60px; height: 60px; background: ${secondaryColor}; top: 40%; left: 60%; }
      .circle3 { width: 100px; height: 100px; background: ${accentColor}; top: 70%; left: 30%; }
      .circle4 { width: 50px; height: 50px; background: ${secondaryTextColor}; top: 25%; left: 75%; }

      @keyframes float { 0% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } 100% { transform: translateY(0) translateX(0); } }

      .orb { position: absolute; width: 80px; height: 80px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 6px 20px rgba(0,0,0,0.2); animation: floatOrb 5s ease-in-out infinite alternate; }
      .orb span.orbLabel { pointer-events: none; }
      .orb1 { top: 20%; left: 55%; background: ${secondaryTextColor}88; animation-delay: 0s; }
      .orb2 { top: 50%; left: 70%; background: ${secondaryColor}88; animation-delay: 1s; }
      .orb3 { top: 65%; left: 35%; background: ${accentColor}88; animation-delay: 2s; }
      .orb4 { top: 35%; left: 25%; background: ${primaryColor}88; animation-delay: 3s; }

      @keyframes floatOrb { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
    `}</style>
        </div>
    )
}