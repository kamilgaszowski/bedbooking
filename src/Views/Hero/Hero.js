import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => (
	<div className={styles.wrapper}>
		<h2 className={styles.header}>
			Bed<span className={styles.booking}>Booking</span>
		</h2>
		<div className={styles.slider}>
			<div className={styles.slide} />
			<div className={styles.slide} />
			<div className={styles.slide} />
			<div className={styles.slide} />
			<div className={styles.slide} />
			<div className={styles.slide} />
		</div>
	</div>
);

export default Hero;
