const MenuIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#F2F8FE" />
    <g clipPath="url(#a)">
      <path
        d="M23.75 27.5h-15V25h15v2.5Zm7.5-15V15H8.75v-2.5h22.5Zm-7.5 8.75h-15v-2.5h15v2.5Z"
        fill="#1C4980"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M35 5H5v30h30z" />
      </clipPath>
    </defs>
  </svg>
);
export default MenuIcon;
