import React from "react";

const completeButton =
    <svg fill="none" width={90} height={90}>
        <g filter="url(#prefix__filter0_d)">
            <path
                d="M79.5 40.5c0 19.33-15.67 35-35 35s-35-15.67-35-35 15.67-35 35-35 35 15.67 35 35z"
                stroke="#850EE2"
                strokeWidth={11}
            />
        </g>
        <g clipPath="url(#prefix__clip0)">
            <path
                className={'status--complete'}
                d="M65.178 30.515l-3.59-3.59a2.443 2.443 0 00-1.794-.74c-.705 0-1.303.247-1.796.74L40.681 44.268l-7.761-7.787a2.443 2.443 0 00-1.795-.74c-.705 0-1.303.247-1.796.74l-3.59 3.59A2.444 2.444 0 0025 41.866c0 .704.246 1.303.74 1.795l9.555 9.556 3.59 3.59c.493.493 1.092.74 1.796.74.703 0 1.302-.247 1.795-.74l3.59-3.59 19.112-19.112c.493-.493.74-1.091.74-1.795s-.247-1.302-.74-1.795z"
                fill="#850EE2"
            />
        </g>
        <defs>
            <clipPath id="prefix__clip0">
                <path
                    fill="#fff"
                    transform="translate(25 17)"
                    d="M0 0h40.917v40.917H0z"
                />
            </clipPath>
            <filter
                id="prefix__filter0_d"
                x={0}
                y={0}
                width={89}
                height={89}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>

export default completeButton;