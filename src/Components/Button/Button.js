import React from 'react';
import styles from './Button.module.scss';

const Button = ({ link }) => (
	<>
		{link ? (
			<a className={styles.button} a href="#form">
				Subscribe
			</a>
		) : (
			<button className={styles.button_submit} type="submit">
				Send
			</button>
		)}
	</>
);

export default Button;
