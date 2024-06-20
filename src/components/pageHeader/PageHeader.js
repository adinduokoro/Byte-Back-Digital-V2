import React from "react";
import styles from "./PageHeader.module.css";
import { SpaceContent } from "../../components";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { selectCurrentPath } from "../../redux/slice/linkSlice";

const PageHeader = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  const currentPath = useSelector(selectCurrentPath);

  return (
    <header
      className={`${styles["page-header"]} ${
        isDarkModeOn ? styles["page-header-dark"] : ""
      }`}
      style={{ zIndex: "2" }}
    >
      <div
        className={`${styles["background-container"]} ${
          isDarkModeOn ? styles["background-container-dark"] : ""
        }`}
      >
        {isDarkModeOn ? <div className={styles["space-container"]}><SpaceContent /></div> : null}
      </div>
      <div className="container">
        <div className={styles["page-header-content"]}>
          <h1>{currentPath}</h1>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
