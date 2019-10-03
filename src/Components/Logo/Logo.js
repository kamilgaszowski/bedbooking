import React from 'react';
import styles from './Logo.module.scss';

const Logo = ({ right }) => (
	<div>
		{right ? (
			<div className={styles.wrapper_right}>
				<img className={styles.logo_img} src="https://i.postimg.cc/mgXYq4RS/Bed-Booking-logo.png" alt="" />
				<p className={styles.logo_text}>
					Bed<span className={styles.booking}>Booking</span>
				</p>
			</div>
		) : (
			<div className={styles.wrapper_left}>
				<img className={styles.logo_img} src="https://i.postimg.cc/mgXYq4RS/Bed-Booking-logo.png" alt="" />
				<p className={styles.logo_text}>
					Bed<span className={styles.booking}>Booking</span>
				</p>
			</div>
		)}
	</div>
);

export default Logo;
