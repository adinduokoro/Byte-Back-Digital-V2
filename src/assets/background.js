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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M877.932 -685.356C1152.39 -762.023 1344.82 -579.939 1284.89 -308.411C1436.38 -213.849 1489.58 -68.1398 1440 63.2436V-2H2.46727e-06V564.71C-56.6493 494.304 -79.0305 392.273 -52.6964 272.978C-286.142 129.227 -286.142 -132.717 -46.387 -282.856C-118.945 -557.578 57.7172 -749.245 325.864 -691.745C467.825 -931.328 726.508 -931.328 877.932 -685.356ZM2.46727e-06 564.71V900H1440V63.2436C1414.21 131.584 1360.61 196.048 1278.58 247.422C1351.13 522.144 1174.47 713.811 906.324 656.311C764.364 895.894 505.681 895.894 354.256 649.922C200.382 692.905 72.2898 654.556 2.46727e-06 564.71Z"
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
