import React from 'react';
import styles from './Form.module.scss';
import Button from '../Button/Button';

import { Formik, ErrorMessage } from 'formik';
import Hint from '../Hint/Hint';

const FormComponent = () => {
	const today = new Date();

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.header_form}>Subscribe to our newsletter</h2>

			<Formik
				initialValues={{
					name: '',
					company: '',
					email: '',
					country: '',
					number: '',
					agreement: false,
					date: today.toLocaleDateString()
				}}
				validate={(values) => {
					let errors = {};
					if (!values.name) {
						errors.name = 'Required';
					}

					if (!values.company) {
						errors.company = 'Required';
					}

					if (!values.email) {
						errors.email = 'Required';
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Invalid email address';
					}
					if (!values.country) {
						errors.country = 'Required';
					}

					if (values.agreement === false) {
						errors.agreement = 'You must select this permision';
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
						<div className={styles.inputs}>
							<div className={styles.input_wrapper}>
								<label className={styles.label}>Name</label>
								<input
									autoComplete={values.name}
									className={styles.input}
									type="text"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								<ErrorMessage component={Hint} name="name" text={errors.name} />
							</div>
							{/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}

							<div className={styles.input_wrapper}>
								<label className={styles.label}>Company</label>
								<input
									autoComplete={values.company}
									className={styles.input}
									type="text"
									name="company"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.company}
								/>
								<ErrorMessage component={Hint} name="company" text={errors.company} />
							</div>
						</div>
						<div className={styles.inputs}>
							<div className={styles.input_wrapper}>
								<label className={styles.label}>E-mail</label>
								<input
									autoComplete={values.email}
									className={styles.input}
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder=" "
								/>
								<ErrorMessage component={Hint} name="email" text={errors.email} />
							</div>

							<div className={styles.input_wrapper}>
								<label className={styles.label}>Country</label>
								<input
									autoComplete={values.country}
									className={styles.input}
									type="text"
									name="country"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.country}
								/>
								<ErrorMessage component={Hint} name="country" text={errors.country} />
							</div>
						</div>
						<div className={styles.inputs}>
							<div className={styles.input_wrapper}>
								<label className={styles.label}>Phone number</label>
								<input
									autoComplete={values.number}
									className={styles.input}
									type="text"
									name="number"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.number}
								/>
								<ErrorMessage component={Hint} name="number" text={errors.number} />
							</div>

							<div className={styles.input_wrapper}>
								<label className={styles.label}>Address</label>
								<input
									autoComplete={values.addres}
									className={styles.input}
									type="text"
									name="address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.addres}
								/>
							</div>
						</div>
						<div className={styles.inputs}>
							<div className={styles.input_wrapper}>
								<label className={styles.label}>Post code</label>
								<input
									autoComplete={values.code}
									className={styles.input}
									type="text"
									name="code"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.code}
								/>
							</div>

							<div className={styles.input_wrapper}>
								<label className={styles.label}>City</label>
								<input
									autoComplete={values.city}
									className={styles.input}
									type="text"
									name="city"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.city}
								/>
							</div>
						</div>

						<div className={styles.radio}>
							<input
								type="radio"
								name="agreement"
								onChange={handleChange}
								onBlur={handleBlur}
								// value={values.agreement}
								chacked={values.agreement}
							/>

								<div className={styles.radio_button} />
								<p>
									I agree to the processing of data in accordance with the BedBooking privacy policy
								</p>


							<ErrorMessage component={Hint} name="agreement" text={errors.agreement} />
						</div>

						<div className={styles.date}>
							<input
								className={styles.input}
								type="text"
								name="date"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.date}
							/>
						</div>

						<Button type="submit" disabled={isSubmitting}>
							Submit
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default FormComponent;
