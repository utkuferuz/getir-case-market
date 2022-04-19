import { theme } from "../variables";

const RadioSelected = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="10"
        fill="white"
        stroke={theme.color.primary}
        strokeWidth="2"
      />
      <path
        d="M15 9L9.5 14L7 11.7273"
        stroke={theme.color.primary}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RadioSelected;
