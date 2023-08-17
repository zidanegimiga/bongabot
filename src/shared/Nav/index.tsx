import React from 'react';
import styles from "./Nav.module.scss"
import { amaranth, bebas, inter } from '@/fonts';

const Nav= () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logoGroup}>
        <img className={styles.logo} src="/bongaLogo.png" alt="bongabot logo" />
        <h1 className={`${bebas.className}`}>BONGABOT.AI</h1>
      </div>
      <div className={`${styles.joinButton} ${amaranth.className}`}>JOIN THE WAITLIST</div>
    </div>
  );  
}

export default Nav