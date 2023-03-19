import React, { useState, useEffect } from 'react';
import styles from './PageStudy.module.css';

import Aside from './Aside';
import Content from './Content';
import getDataCourse from '../../common/getDataCourse';
import { useParams } from 'react-router-dom';

interface CourseLesson {
	id: string;
	title: string;
	duration: number;
	order: number;
	type: string;
	status: string;
	link: string;
	previewImageLink: string;
	meta: any;
}

interface CourseInfo {
	id: string;
	title: string;
	description: string;
	rating: number;
	launchDate: string;
	duration: number;
	containsLockedLessons: boolean;
	status: string;
	previewImageLink: string;
	tags: string[];
	lessons: CourseLesson[];
	meta: any;
}

const PageStudy: React.FC = () => {
	const [infoCourse, setInfoCourse] = useState<CourseInfo | null>(null);
	const [coursePage, setCoursePage] = useState<number>(0);

	const { id } = useParams<{ id: string }>();


	const getDataForPreview = () => {

		if (Object.keys(infoCourse).length !== 0) {
			return {
				id: infoCourse.id,
				title: infoCourse.title,
				duration: infoCourse.meta.courseVideoPreview.duration,
				order: 0,
				type: 'video',
				status: 'unlocked',
				link: infoCourse.previewImageLink,
				previewImageLink: infoCourse.previewImageLink,
				meta: null,
			}
		} else return null;
	}

	useEffect(() => {
		const newData = getDataCourse(id);
		setInfoCourse(newData);
	}, [id]);

	return (
		<div className={styles.container}>
			{infoCourse !== null ? <Aside lessonsData={infoCourse.lessons} preview={getDataForPreview()} generateContent={setCoursePage} /> : null}
			{infoCourse !== null ? <Content courseData={infoCourse} coursePage={coursePage} /> : null}
		</div>
	);
};

export default PageStudy;