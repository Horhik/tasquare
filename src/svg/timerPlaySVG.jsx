import React from "react";

export const TimerPlaySVG = props => (
  <svg fill="none" width="99" height="99">
    <path
      d="M99 49.5C99 76.838 76.838 99 49.5 99S0 76.838 0 49.5 22.162 0 49.5 0 99 22.162 99 49.5z"
      fill="#fff"
    />
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M91 48.5C91 71.42 72.42 90 49.5 90S8 71.42 8 48.5 26.58 7 49.5 7 91 25.58 91 48.5z"
        fill="#850EE2"
      />
    </g>
    <path
      d="M73 44.804c4 2.31 4 8.083 0 10.392l-30 17.32c-4 2.31-9-.577-9-5.196V32.68c0-4.62 5-7.506 9-5.197l30 17.32z"
      fill="#fff"
    />
    <defs>
      <filter
        id="prefix__filter0_d"
        x={4.577}
        y={7}
        width={89.845}
        height={89.845}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.423} />
        <feGaussianBlur stdDeviation={1.711} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const TimerStopSVG = () => (
  <svg
    width="99"
    height="99"
    viewBox="0 0 99 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M99 49.5C99 76.8381 76.8381 99 49.5 99C22.1619 99 0 76.8381 0 49.5C0 22.1619 22.1619 0 49.5 0C76.8381 0 99 22.1619 99 49.5Z"
      fill="white"
    />
    <g filter="url(#filter0_d)">
      <path
        d="M91 48.5C91 71.4198 72.4198 90 49.5 90C26.5802 90 8 71.4198 8 48.5C8 25.5802 26.5802 7 49.5 7C72.4198 7 91 25.5802 91 48.5Z"
        fill="#850EE2"
      />
    </g>
    <rect
      x="69"
      y="74"
      width="11"
      height="48"
      rx="5.5"
      transform="rotate(-180 69 74)"
      fill="#E8E8E8"
    />
    <rect
      x="41"
      y="74"
      width="11"
      height="48"
      rx="5.5"
      transform="rotate(-180 41 74)"
      fill="#E8E8E8"
    />
    <defs>
      <filter
        id="filter0_d"
        x="4.57732"
        y="7"
        width="89.8454"
        height="89.8454"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="3.42268" />
        <feGaussianBlur stdDeviation="1.71134" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
