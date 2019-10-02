import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
	<h2 className={styles.header}>
		Bed<span className={styles.booking}>Booking</span>
	</h2>
);

export default Header;
