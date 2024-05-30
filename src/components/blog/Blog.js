import React from "react";
import styles from "./Blog.module.css";
import { SectionTitle } from "../../components";
import bookIcon from "../../assets/book-icon.svg";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles["blog-content"]}>
          <SectionTitle
            firstWord={"OUR"}
            secondWord={"BLOG"}
            image={bookIcon}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
