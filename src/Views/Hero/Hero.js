import React from 'react';
import styles from './Hero.module.scss';

import Header from '../../Components/Header/Header';
import Logo from '../../Components/Logo/Logo';
import Button from '../../Components/Button/Button';

const Hero = () => (
	<div className={styles.wrapper}>
		<Logo />
		<Header />
		<div className={styles.button}>
			<div>
				<p className={styles.text}>Stay updated! New features coming.</p>
				<p className={styles.text}>Newslatter form fill in.</p>
			</div>

			<Button />
		</div>

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
