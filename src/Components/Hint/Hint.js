import React from 'react';
import styles from './Hint.module.scss';

const Hint = ({ text }) => (
	<div className={styles.hint}>
		<div className={styles.shape}>
			<span>{text}</span>
		</div>
	</div>
);

export default Hint;
