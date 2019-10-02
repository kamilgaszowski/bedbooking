import React from 'react';
import styles from './Logo.module.scss';


const Logo = () => (
    <div className={styles.wrapper}>
        <img className={styles.logo_img} src='https://i.postimg.cc/mgXYq4RS/Bed-Booking-logo.png' alt=''/>
        <p className={styles.logo_text}>Bed<span className={styles.booking}>Booking</span></p>
    </div>
);

export default Logo;