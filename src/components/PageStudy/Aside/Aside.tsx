
import React from 'react';
import Lesson from './Lesson';

import styles from './Aside.module.css';


interface LessonInterface {
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
interface Props {
	lessonsData: LessonInterface[],
	preview: LessonInterface,
	generateContent: Function
}

const Aside = ({ lessonsData, preview, generateContent }: Props) => {
	return (
		<div className={styles.aside}>
			<ul className={styles.lessons}>
				<li className={styles.item} key={preview.id}>
					<Lesson order={preview.order} img={preview.previewImageLink + "/cover.webp"} title={preview.title} duration={preview.duration} type={preview.type} status={preview.status} generateContent={generateContent} />
				</li>

				{lessonsData.map(item => (
					<li className={styles.item} key={item.id}>
						<Lesson order={item.order} img={item.previewImageLink} title={item.title} duration={item.duration} type={item.type} status={item.status} generateContent={generateContent} />
					</li>
				))}

			</ul>
		</div>
	);
};

export default Aside;

