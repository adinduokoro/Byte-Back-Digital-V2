import React from "react";
import styles from "./Blog.module.css";
import { SectionTitle } from "../../components";
import bookIcon from "../../assets/book-icon.svg";
import { blogs } from "./data";
import { useSelector } from "react-redux";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";

const Blog = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn)

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles["blog-content"]}>
          <SectionTitle
            firstWord={"OUR"}
            secondWord={"BLOG"}
            image={bookIcon}
          />
          <div className={styles.blogs}>
            {blogs.map((blog, index) => (
              <div className={`${styles["blog-card"]} ${
                isDarkModeOn ? styles["blog-card-dark"] : ""
              } `} key={index}>
                <img src={blog.image} alt="" />
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <button className={`btn-two ${isDarkModeOn ? "btn-two-dark" : ""}` }>READ MORE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
