import React from 'react'
import styles from "./Hero.module.css"
import bgPiece from "../../assets/hero-bg-piece.png"

const Hero = () => {
  return (
    <section className={styles.hero}>
        <img className={styles.bgPiece} src={bgPiece} alt='background-bite-effect'/>

    </section>
  )
}

export default Hero