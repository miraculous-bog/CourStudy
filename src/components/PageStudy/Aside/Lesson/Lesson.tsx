import React from 'react';

import styles from './Lesson.module.css';

interface Props {
	order: number,
	img: string,
	title: string,
	duration: number,
	type: string,
	status: string,
	generateContent: Function
}

const courseStatus = 'locked';

const Lesson: React.FC<Props> = ({ order, img, title, duration, type, status, generateContent }) => {

	return (
		<>
			<div onClick={() => generateContent(order)} className={styles.lesson}>
				<img className={styles.img}
					src={`${img}/lesson-${order}.webp`}
					alt="" />
				<div className={styles.info}>
					<p className={styles.text}>{order === 0 ? 'Preview' : `Lesson ${order}`}</p>
					<h2 className={styles.title}>
						{title}
					</h2>
					<div className={styles.shortinfo}>
						<p className={styles.duration}>{duration} min.</p>
						<p className={styles.type}> {type} </p>
						<p className={status === courseStatus ? styles.locked : styles.status}> {status} </p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Lesson;