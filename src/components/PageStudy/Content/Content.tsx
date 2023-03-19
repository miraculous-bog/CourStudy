import React from 'react';

import Quiz from './Quiz';
import Preview from './Preview';
import Article from './Article';
import VideoLesson from './VideoLesson';
import Blocked from './Blocked';

import styles from './Content.module.css';

const Content = ({ courseData, coursePage }) => {
	const statusPageContent = () => courseData.lessons[coursePage - 1].type;

	const getSuitableComponent = (statusComponent) => {
		console.log(statusComponent);
		if (courseData.lessons[coursePage - 1].status === "locked") return <Blocked />
		switch (statusComponent) {
			case 'quiz_simulator':
				return <Quiz />
			case 'video':
				console.log(statusComponent);
				return <VideoLesson videoData={courseData.lessons[coursePage - 1]} />
			case 'article':
				return <Article url={courseData.lessons[coursePage - 1].link} title={courseData.lessons[coursePage - 1].title} />
		}
	}
	console.log(courseData, coursePage);
	return (
		<div className={styles.main}>
			{coursePage === 0 ? <Preview videoData={courseData} /> : getSuitableComponent(statusPageContent())}
		</div>
	);
};

export default Content;
