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
  return (
    <svg
      width="1440"
      height="792"
      preserveAspectRatio="none"
      viewBox="0 0 1440 792"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        minWidth: "90rem",
        minHeight: "49.49056rem",
        width: "100%",
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1440 2.29407V0H0V528.543C73.2519 613.216 198.553 648.382 348.256 606.564C499.681 852.536 758.364 852.536 900.324 612.953C1168.47 670.453 1345.13 478.786 1272.58 204.063C1361.62 148.302 1417.16 77.1175 1440 2.29407Z"
        fill="var(--primaryBackgroundColor)"
      />
    </svg>
  );
};

// Export FirstComponent as named export
export { BackgroundPieceOne };

// Export SecondComponent as named export
export { BackgroundPieceTwo };
