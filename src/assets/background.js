import React from "react";

// First component definition
const BackgroundPieceOne = () => {
  return (
    <svg
      width="100%"
      height="900"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        minHeight: "56.25rem",
        minWidth: "90rem",
        width: "100%",
        height: "100%",
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M884.292 -709.263C1169.8 -789.051 1369.99 -599.553 1307.64 -316.969C1487.96 -204.364 1534.41 -22.0701 1440 127.84V-2H0.000445536V622.522C-79.7696 550.009 -115.341 430.945 -83.8204 288.093C-326.669 138.49 -326.669 -134.121 -77.2569 -290.373C-152.737 -576.282 31.0404 -775.753 309.988 -715.912C457.666 -965.25 726.769 -965.25 884.292 -709.263ZM0.000445536 622.522V900H1440V127.84C1408.98 177.095 1362.75 222.854 1301.07 261.497C1376.55 547.405 1192.78 746.876 913.828 687.035C766.15 936.374 497.047 936.374 339.524 680.386C198.345 719.84 78.0281 693.45 0.000445536 622.522Z"
        fill="var(--primaryBackgroundColor)"
      />
    </svg>
  );
};

// Second component definition
const BackgroundPieceTwo = () => {
  return <div></div>;
};

// Export FirstComponent as named export
export { BackgroundPieceOne };

// Export SecondComponent as named export
export { BackgroundPieceTwo };
