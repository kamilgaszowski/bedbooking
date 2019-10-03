import React from 'react';
import styles from './FormView.module.scss';
import Logo from '../../Components/Logo/Logo';
import Form from '../../Components/Form/Form';

const FormView = () => (
    <div>
    <Logo />
	<div className={styles.wrapper} id="form">

		<div className={styles.description}>
			<div className={styles.paragraph}>
				<div>
					<p>
						BedBooking is an innovative calendar that has already helped thousands of people around the
						world manage their business more efficiently.{' '}
					</p>
					<p>Be the first to inform you about upcoming application features and attractive promotions.</p>

					<Form />
				</div>
			</div>
			{/* <div className={styles.image}>
				<img src="https://i.postimg.cc/Wb6ScPzJ/phone-1.png" alt="BedBooking App on the phone" />
			</div> */}
		</div>
	</div>
    </div>
);

export default FormView;
