const CheckBoxDefault = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_6_46)">
        <rect x="7" y="6" width="22" height="22" rx="2" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_6_46"
          x="0"
          y="0"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.364706 0 0 0 0 0.219608 0 0 0 0 0.752941 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_46"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_46"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckBoxDefault;
