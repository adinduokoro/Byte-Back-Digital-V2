import React from "react";

const hamburgerMenu = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 6.25H15H23.75"
        stroke="var(--secondaryColor)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M6.25 15H23.75"
        stroke="var(--secondaryColor)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M6.25 23.75H15H23.75"
        stroke="var(--secondaryColor)"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default hamburgerMenu;
