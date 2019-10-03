import React from 'react';
import styles from './FormView.module.scss';
import Logo from '../../Components/Logo/Logo';
import Form from '../../Components/Form/Form';

const FormView = () => (
	<div className={styles.wrapper} id="form">
		<Logo />
		<div className={styles.description}>
			<div className={styles.paragraph}>
				<p>
					BedBooking is an innovative calendar that has already helped thousands of people around the world
					manage their business more efficiently. Be the first to inform you about upcoming application
					features and attractive promotions.
				</p>

				<Form />
			</div>
		</div>
	</div>
);

export default FormView;
