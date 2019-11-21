import React from "react";

export const PlusIcon = props => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" width="8" height="48" rx="4" fill={props.color} />
      <rect
        x="48"
        y="20"
        width="8"
        height="48"
        rx="4"
        transform="rotate(90 48 20)"
        fill={props.color}
      />
    </svg>
  );
};
export const addTaskBtn = (
  <svg width={108} height={108}>
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
    <rect x={46} y={25} width={8} height={48} rx={4} fill="#E8E8E8" />
    <rect
      x={74}
      y={45}
      width={8}
      height={48}
      rx={4}
      transform="rotate(90 74 45)"
      fill="#E8E8E8"
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

export const pomodoroIcon = (
  <svg
    width="44"
    height="46"
    viewBox="0 0 44 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M30.1747 13.8358C30.7759 12.5177 30.9356 11.0142 30.582 9.54014C30.4936 9.17166 30.2358 8.86698 29.887 8.71885C28.7503 8.23601 27.5093 8.0849 26.3095 8.26388C26.1413 6.18828 25.0068 4.30428 23.1901 3.17912C22.8679 2.97968 22.4703 2.94472 22.1183 3.08493C19.8859 3.97457 18.3354 5.95956 18.006 8.31631C16.7133 8.05741 15.3592 8.18955 14.1129 8.71885C13.7642 8.86698 13.5063 9.17166 13.4179 9.54014C13.0643 11.0142 13.224 12.5177 13.8253 13.8358C8.63997 16.696 5.04332 22.2263 5.04332 28.6987C5.04332 38.157 11.8366 41 21.1826 41C35.873 41 38.9566 34.3105 38.9566 28.6987C38.9567 22.2331 35.3647 16.6986 30.1747 13.8358ZM15.6406 10.7165C16.6433 10.4547 17.7079 10.5671 18.6406 11.0466C19.4974 11.487 20.5031 10.7812 20.3712 9.82108C20.1386 8.1289 20.9354 6.44912 22.4391 5.5789C23.6456 6.59493 24.1545 8.1534 23.8584 9.64502C23.6688 10.5999 24.6437 11.3704 25.5289 10.9642C26.4173 10.5568 27.4203 10.4737 28.3594 10.7172C28.6334 13.7596 25.6607 16.1094 22.7427 15.087C22.3074 14.7417 21.6921 14.742 21.2572 15.087C18.339 16.1096 15.3663 13.7591 15.6406 10.7165ZM21.1827 38.6097C13.2128 38.6097 7.43369 36.6955 7.43369 28.6987C7.43369 23.116 10.591 18.2574 15.2134 15.813C17.023 17.5881 19.6289 18.1717 22.0001 17.3595C24.3729 18.1723 26.9782 17.5869 28.7867 15.813C33.4092 18.2573 36.5664 23.116 36.5664 28.6987C36.5664 36.6569 29.1065 38.6097 21.1827 38.6097Z"
        fill="#850EE2"
      />
      <path
        d="M30.1747 13.8358C30.7759 12.5177 30.9356 11.0142 30.582 9.54014C30.4936 9.17166 30.2358 8.86698 29.887 8.71885C28.7503 8.23601 27.5093 8.0849 26.3095 8.26388C26.1413 6.18828 25.0068 4.30428 23.1901 3.17912C22.8679 2.97968 22.4703 2.94472 22.1183 3.08493C19.8859 3.97457 18.3354 5.95956 18.006 8.31631C16.7133 8.05741 15.3592 8.18955 14.1129 8.71885C13.7642 8.86698 13.5063 9.17166 13.4179 9.54014C13.0643 11.0142 13.224 12.5177 13.8253 13.8358C8.63997 16.696 5.04332 22.2263 5.04332 28.6987C5.04332 38.157 11.8366 41 21.1826 41C35.873 41 38.9566 34.3105 38.9566 28.6987C38.9567 22.2331 35.3647 16.6986 30.1747 13.8358ZM15.6406 10.7165C16.6433 10.4547 17.7079 10.5671 18.6406 11.0466C19.4974 11.487 20.5031 10.7812 20.3712 9.82108C20.1386 8.1289 20.9354 6.44912 22.4391 5.5789C23.6456 6.59493 24.1545 8.1534 23.8584 9.64502C23.6688 10.5999 24.6437 11.3704 25.5289 10.9642C26.4173 10.5568 27.4203 10.4737 28.3594 10.7172C28.6334 13.7596 25.6607 16.1094 22.7427 15.087C22.3074 14.7417 21.6921 14.742 21.2572 15.087C18.339 16.1096 15.3663 13.7591 15.6406 10.7165ZM21.1827 38.6097C13.2128 38.6097 7.43369 36.6955 7.43369 28.6987C7.43369 23.116 10.591 18.2574 15.2134 15.813C17.023 17.5881 19.6289 18.1717 22.0001 17.3595C24.3729 18.1723 26.9782 17.5869 28.7867 15.813C33.4092 18.2573 36.5664 23.116 36.5664 28.6987C36.5664 36.6569 29.1065 38.6097 21.1827 38.6097Z"
        stroke="#850EE2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.54332"
        y="0.500061"
        width="42.9133"
        height="47"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
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

export const loupe = (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M35.2665 29.6776L28.4642 22.8756C30.1035 20.5092 30.9236 17.8711 30.9236 14.9628C30.9236 13.0722 30.5565 11.264 29.8224 9.53876C29.0889 7.8132 28.0972 6.32589 26.8478 5.07649C25.5984 3.82708 24.1113 2.83538 22.3861 2.10173C20.6603 1.36787 18.8523 1.00098 16.9617 1.00098C15.0712 1.00098 13.2631 1.36787 11.5378 2.10173C9.81222 2.83538 8.32491 3.82708 7.07551 5.07649C5.82597 6.32589 4.83441 7.81347 4.10069 9.53876C3.3669 11.2642 3 13.0722 3 14.9628C3 16.8532 3.3669 18.6608 4.10069 20.3865C4.83434 22.1118 5.82597 23.5989 7.07551 24.8483C8.32491 26.0981 9.8125 27.0894 11.5378 27.8235C13.2633 28.5572 15.0712 28.924 16.9617 28.924C19.8706 28.924 22.5083 28.1039 24.8749 26.4648L31.6771 33.247C32.1531 33.7493 32.7473 34.0006 33.4618 34.0006C34.1493 34.0006 34.7446 33.7494 35.2466 33.247C35.7488 32.7448 36.0001 32.1498 36.0001 31.4624C36.0003 30.7621 35.7557 30.1668 35.2665 29.6776ZM23.2385 21.2389C21.4999 22.9777 19.4078 23.8471 16.9617 23.8471C14.5159 23.8471 12.4238 22.9775 10.6851 21.2389C8.94645 19.5004 8.07714 17.4085 8.07714 14.9624C8.07714 12.5166 8.94666 10.4242 10.6851 8.68584C12.4235 6.94708 14.5159 6.07784 16.9617 6.07784C19.4075 6.07784 21.4997 6.94743 23.2385 8.68584C24.9773 10.4242 25.8466 12.5166 25.8466 14.9624C25.8466 17.4085 24.977 19.5004 23.2385 21.2389Z"
        fill="#850EE2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0.000976562"
        width="39.0001"
        height="38.9997"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1.5" />
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

export const calendar = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8616 3.28133C18.5792 2.99858 18.2441 2.85719 17.8573 2.85719H16.4289V1.78573C16.4289 1.29475 16.2538 0.874335 15.9042 0.524632C15.5543 0.174929 15.1341 0 14.6429 0H13.9288C13.4377 0 13.0173 0.174929 12.6676 0.524671C12.3178 0.874335 12.1429 1.29479 12.1429 1.78577V2.85723H7.85745V1.78577C7.85745 1.29479 7.68252 0.874374 7.33278 0.524671C6.98312 0.174929 6.56274 0 6.07157 0H5.35735C4.86629 0 4.44587 0.174929 4.09613 0.524671C3.74647 0.874335 3.5715 1.29479 3.5715 1.78577V2.85723H2.14306C1.75606 2.85723 1.42129 2.99862 1.13855 3.28136C0.855807 3.56407 0.714417 3.89899 0.714417 4.28587V18.5716C0.714417 18.9582 0.855807 19.293 1.13855 19.5759C1.42125 19.8586 1.75602 20 2.14306 20H17.857C18.2439 20 18.579 19.8586 18.8614 19.5759C19.1442 19.2931 19.2856 18.9581 19.2856 18.5716V4.28583C19.2855 3.89884 19.1443 3.56407 18.8616 3.28133ZM13.5717 1.78588C13.5717 1.68163 13.6049 1.59598 13.6718 1.52918C13.7387 1.46229 13.8243 1.42879 13.9286 1.42879H14.6427C14.7471 1.42879 14.8324 1.46218 14.8995 1.52918C14.9664 1.5961 14.9999 1.68175 14.9999 1.78588V5.00005C14.9999 5.10427 14.9664 5.18976 14.8995 5.25676C14.8324 5.32356 14.7471 5.35714 14.6427 5.35714H13.9286C13.8243 5.35714 13.7387 5.32372 13.6718 5.25676C13.6049 5.18972 13.5717 5.10427 13.5717 5.00005V1.78588ZM5.00025 1.78588C5.00025 1.68163 5.03368 1.59598 5.10064 1.52918C5.16764 1.46229 5.25313 1.42879 5.35735 1.42879H6.07157C6.17582 1.42879 6.26147 1.46218 6.32827 1.52918C6.39516 1.5961 6.42874 1.68175 6.42874 1.78588V5.00005C6.42874 5.10427 6.39531 5.18987 6.32827 5.25676C6.26131 5.32356 6.17582 5.35714 6.07157 5.35714H5.35735C5.25313 5.35714 5.16752 5.32372 5.10064 5.25676C5.03383 5.18972 5.00025 5.10427 5.00025 5.00005V1.78588ZM17.857 18.5714H2.14306V7.14291H17.857V18.5714Z"
      fill="#850EE2"
    />
  </svg>
);
export const tag = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7451 4.04175C16.2032 4.04175 16.5467 4.13544 16.7757 4.32281C17.0256 4.51019 17.1505 4.77044 17.1505 5.10355C17.1505 5.16601 17.1297 5.30134 17.088 5.50953C16.9631 5.96757 16.7133 6.30068 16.3385 6.50888C15.9638 6.69625 15.4641 6.78994 14.8395 6.78994H13.9651L12.2162 12.0053H13.1219C13.5799 12.0053 13.9234 12.0989 14.1524 12.2863C14.4023 12.4737 14.5272 12.7339 14.5272 13.0671C14.5272 13.1503 14.5064 13.2753 14.4647 13.4418C14.2149 14.3162 13.4654 14.7535 12.2162 14.7535H11.3106L10.5923 16.9083C10.4049 17.5121 10.1655 17.9493 9.87401 18.2199C9.58254 18.4698 9.24942 18.5947 8.87467 18.5947C8.45828 18.5947 8.13557 18.501 7.90656 18.3136C7.67754 18.1054 7.56303 17.8243 7.56303 17.4704C7.56303 17.283 7.61508 17.0124 7.71918 16.6584L8.34377 14.7535H5.43943L4.72115 16.9083C4.51296 17.5121 4.27353 17.9493 4.00287 18.2199C3.73222 18.4698 3.40952 18.5947 3.03476 18.5947C2.59755 18.5947 2.26444 18.501 2.03542 18.3136C1.8064 18.1262 1.6919 17.8452 1.6919 17.4704C1.6919 17.3039 1.74394 17.0436 1.84804 16.6897L2.50386 14.7535H1.62944C1.1714 14.7535 0.817471 14.6598 0.567635 14.4724C0.338619 14.2642 0.224111 14.0039 0.224111 13.6917C0.224111 13.6292 0.244931 13.4939 0.28657 13.2857C0.411488 12.8276 0.661323 12.5049 1.03608 12.3176C1.41083 12.1094 1.9105 12.0053 2.53509 12.0053H3.40952L5.15836 6.78994H4.25271C3.79468 6.78994 3.44074 6.69625 3.19091 6.50888C2.96189 6.3215 2.84738 6.06125 2.84738 5.72814C2.84738 5.64486 2.8682 5.51994 2.90984 5.35339C3.15968 4.47896 3.90919 4.04175 5.15836 4.04175H6.06402L6.7823 1.88692C6.99049 1.28315 7.22992 0.856346 7.50057 0.60651C7.79205 0.335856 8.12516 0.200528 8.49992 0.200528C9.37434 0.200528 9.81155 0.564872 9.81155 1.29356C9.81155 1.48093 9.7595 1.75159 9.65541 2.10552L8.99959 4.04175H11.9352L12.6534 1.88692C13.0074 0.762658 13.5695 0.200528 14.3398 0.200528C14.7562 0.200528 15.0789 0.304627 15.3079 0.512823C15.5578 0.700199 15.6827 0.970854 15.6827 1.32479C15.6827 1.53298 15.6306 1.79323 15.5265 2.10552L14.8707 4.04175H15.7451ZM11.0295 6.78994H8.09393L6.34508 12.0053H9.28065L11.0295 6.78994Z"
      fill="#850EE2"
    />
  </svg>
);
export const reminder = (
  <svg
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M10.5652 0.521729C4.85641 0.521729 0.211945 5.16619 0.211945 10.875C0.211945 16.5837 4.85641 21.2282 10.5652 21.2282C16.274 21.2282 20.9184 16.5837 20.9184 10.875C20.9184 5.16619 16.274 0.521729 10.5652 0.521729ZM10.5652 19.0252C6.07118 19.0252 2.41473 15.3692 2.41473 10.875C2.41473 6.38075 6.07118 2.72472 10.5652 2.72472C15.0592 2.72472 18.7156 6.38075 18.7156 10.875C18.7156 15.3692 15.0592 19.0252 10.5652 19.0252Z"
        fill="#850EE2"
      />
      <path
        d="M15.9609 10.5553H11.3081V4.96096C11.3081 4.49018 10.9264 4.10849 10.4556 4.10849C9.98487 4.10849 9.60318 4.49018 9.60318 4.96096V11.4078C9.60318 11.8785 9.98487 12.2602 10.4556 12.2602H15.9609C16.4317 12.2602 16.8134 11.8785 16.8134 11.4078C16.8134 10.937 16.4317 10.5553 15.9609 10.5553Z"
        fill="#850EE2"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="20.7065"
          height="20.7065"
          fill="white"
          transform="translate(0.211945 0.521729)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const send = (
  <svg
    width="62"
    height="70"
    viewBox="0 0 62 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M49.0662 27.4182L23.1214 1.51202C22.1659 0.503868 20.9728 0 19.5396 0C18.1065 0 16.9134 0.504425 15.9579 1.51202L12.9336 4.49704C11.9518 5.47871 11.4609 6.67196 11.4609 8.07805C11.4609 9.45752 11.9517 10.665 12.9336 11.6994L32.2733 31.0001L12.9328 50.3405C11.9512 51.3222 11.4603 52.5154 11.4603 53.9217C11.4603 55.301 11.9511 56.5089 12.9328 57.5428L15.9574 60.5274C16.939 61.5091 18.1334 61.9999 19.5391 61.9999C20.9453 61.9999 22.1394 61.5091 23.1208 60.5274L49.0662 34.6212C50.0482 33.5866 50.5396 32.3794 50.5396 30.9999C50.5397 29.5938 50.0482 28.3999 49.0662 27.4182Z"
        fill="#850EE2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-4"
        y="0"
        width="70"
        height="70"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
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

export const tick = (
  <svg
    width="44"
    height="46"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M40.1784 13.5147L36.5883 9.92463C36.096 9.43199 35.4973 9.18558 34.7936 9.18558C34.0892 9.18558 33.4905 9.43199 32.9982 9.92463L15.6806 27.2684L7.91947 19.4808C7.42665 18.9879 6.82833 18.7418 6.1246 18.7418C5.4204 18.7418 4.82208 18.9879 4.32926 19.4808L0.739142 23.071C0.246319 23.5637 0 24.1622 0 24.8663C0 25.5699 0.246319 26.1689 0.739142 26.6616L10.2952 36.2174L13.8856 39.8075C14.3781 40.3006 14.9766 40.5467 15.6806 40.5467C16.3844 40.5467 16.9829 40.2999 17.4757 39.8075L21.066 36.2174L40.1784 17.1051C40.6707 16.6123 40.9175 16.0139 40.9175 15.3098C40.9179 14.6061 40.6707 14.0076 40.1784 13.5147Z"
        fill="#850EE2"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="40.9175" height="40.9175" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
