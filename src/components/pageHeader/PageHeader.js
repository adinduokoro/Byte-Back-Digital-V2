import React from "react";
import styles from "./PageHeader.module.css";
import { Navigation } from "../../components";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { selectCurrentPath } from "../../redux/slice/linkSlice";

const PageHeader = ({ title }) => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  const currentPath = useSelector(selectCurrentPath);

  return (
    <header className={styles["page-header"]} style={{ zIndex: "7" }}>
      <di className="container">
        <div className={styles["page-header-content"]}>
          <Navigation />
          <h1>{currentPath}</h1>
        </div>
      </di>
    </header>
  );
};

export default PageHeader;
