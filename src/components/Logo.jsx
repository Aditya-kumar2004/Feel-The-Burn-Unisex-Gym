import React from 'react';

export const Logo = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        fill="none"
        className={className}
        {...props}
    >
        {/* Flame Icon Area */}
        <defs>
            <linearGradient id="flameGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Stylized Flame/Dumbbell Icon */}
        <g transform="translate(10, 10) scale(0.8)">
            <path d="M50 0 C20 40 0 50 20 80 C30 95 50 100 50 100 C50 100 70 95 80 80 C100 50 80 40 50 0 Z" fill="url(#flameGradient)" filter="url(#glow)" />
            <path d="M50 20 C40 45 30 55 40 70 C45 78 50 80 50 80 C50 80 55 78 60 70 C70 55 60 45 50 20 Z" fill="#FFF" opacity="0.3" />
        </g>

        {/* Text: Feel The Burn */}
        <text x="100" y="65" fontFamily="'Inter', 'Roboto', sans-serif" fontWeight="900" fontSize="48" className="fill-foreground text-foreground" letterSpacing="-1">
            FEEL THE <tspan fill="url(#flameGradient)">BURN</tspan>
        </text>

        {/* Subtitle: Gym */}
        <text x="100" y="85" fontFamily="'Inter', 'Roboto', sans-serif" fontWeight="500" fontSize="16" className="fill-muted-foreground text-muted-foreground" letterSpacing="4" textTransform="uppercase">
            Unisex Gym
        </text>
    </svg>
);

export default Logo;
