import React from 'react'
import styles from "./Hero.module.css"
import backgroundPiece from "../../assets/hero-bg-piece.png"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={backgroundPiece} alt="" />
    </section>
  )
}

export default Hero