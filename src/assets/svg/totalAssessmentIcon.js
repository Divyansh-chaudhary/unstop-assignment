import * as React from "react";
const TotalAssessmentIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={8} fill="#EBE8FD" />
    <g clipPath="url(#a)">
      <path
        d="M25.833 14.167V17.5h-12.5v-3.333h12.5Zm0 8.333v3.333h-12.5V22.5h12.5Zm.834-10H12.5a.836.836 0 0 0-.833.833v5c0 .459.375.834.833.834h14.167a.836.836 0 0 0 .833-.834v-5a.836.836 0 0 0-.833-.833Zm0 8.333H12.5a.836.836 0 0 0-.833.834v5c0 .458.375.833.833.833h14.167a.836.836 0 0 0 .833-.833v-5a.836.836 0 0 0-.833-.834Z"
        fill="#6548EE"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M10 10h20v20H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default TotalAssessmentIcon;
