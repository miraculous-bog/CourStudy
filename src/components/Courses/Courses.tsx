import React, { useState, useEffect } from 'react';
import Course from './Course';
import Header from '../Header';
import Pagination from './Pagination'
import data from '../../common/data';
import styles from './Courses.module.css';

import { Link } from 'react-router-dom';

interface CourseData {
	id: number;
	previewImageLink: string;
	title: string;
	description: string;
	meta: {
		skills: string[];
	};
	rating: number;
	lessonsCount: number;
}

interface AnonymousAuthResponse {
	success: boolean;
	token: string;
}
const coursesAmountPagination = 10;

const Courses: React.FC = () => {
	const [courses, setCourses] = useState<CourseData[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const movePage = (numberPage) => setCurrentPage(numberPage);

	useEffect(() => {
		// const fetchPosts = async () => {
		// 	const options: RequestInit = {
		// 		method: 'GET',
		// 		mode: 'no-cors',
		// 		cache: 'no-cache',
		// 		credentials: 'same-origin',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Access-Control-Allow-Credentials': 'true',
		// 			Connection: 'keep-alive',
		// 		},
		// 		redirect: 'follow',
		// 		referrerPolicy: 'no-referrer',
		// 	};
		// 	try {
		// 		const response = await fetch(
		// 			'http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions', options);
		// 		const data: AnonymousAuthResponse = await response.json();
		// 		console.log(data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// };
		// fetchPosts();
		setCourses(data.courses);
	}, []);

	const idxLastPost = currentPage * coursesAmountPagination;
	const idxFirstPost = idxLastPost - coursesAmountPagination;
	console.log(courses, idxLastPost, idxFirstPost);
	const currentPosts = courses.slice(idxFirstPost, idxLastPost);

	return (
		<>
			<Header />
			<div>
				<ul className={styles.list}>
					{currentPosts.map((item: CourseData) => (
						<Link to={`/course/${item.id}`}>
							<li key={item.id} className={styles.item}>
								<Course
									img={item.previewImageLink}
									title={item.title}
									description={item.description}
									skills={item.meta.skills}
									rating={item.rating}
									count={item.lessonsCount}
								/>
							</li>
						</Link>
					))}
				</ul>
				<Pagination currentPage={currentPage} coursesForOnce={coursesAmountPagination} totalCourses={courses.length} movePage={movePage} />
			</div>
		</>
	);
};

export default Courses;