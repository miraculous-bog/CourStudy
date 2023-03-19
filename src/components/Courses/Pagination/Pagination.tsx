import React from 'react';

import styles from './Pagination.module.css';

interface Props {
	currentPage: number,
	totalCourses: number,
	coursesForOnce: number,
	movePage: Function
}





const Course = ({ currentPage, coursesForOnce, totalCourses, movePage }: Props) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalCourses / coursesForOnce); i++) {
		pageNumbers.push(i);
	}
	const doActiveSelector = (num) => currentPage === num ? `${styles.btn} ${styles.active}` : styles.btn;
	return (
		<div className={styles.block}>
			<ul className={styles.list}>
				{pageNumbers.map(number => (
					<li key={number} className={styles.item}>
						<button onClick={() => movePage(number)} className={doActiveSelector(number)}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Course;
