import React, { useState } from 'react';
import ReactPlayer from 'react-player'

import graphic from '../../../img/graphic.png';
import lessons from '../../../img/lessons.png';
import styles from './Course.module.css';

interface Props {
	img: string,
	title: string,
	description: string,
	skills: any,
	rating: number,
	count: number,
	video: string
}

const Course = ({ img, title, description, skills, rating, count, video }: Props) => {

	return (
		<div className={styles.block}>


			<img className={styles.img}
				src={img + '/cover.webp'}
				alt="" />

			<div className={styles.text}>
				<h2>{title}</h2>
				<p>{description}</p>
				<h5>
					<span className={styles.span}> The skills you will acquire:</span>
					{skills ? skills.join("") : 'no info'}
				</h5>
			</div>
			<div className={styles.others}>
				<div className={styles.graphic}>
					<img className={styles.img} src={graphic} alt='icon-graphic-rating' />
					<p>
						<span className={styles.span}>
							Rating:
						</span>
						{rating} / 5
					</p>
				</div>
				<div className={styles.graphic}>
					{/* {lessons} */}
					<img className={styles.img} src={lessons} alt='icon-count-lessons' />
					<p>
						<span className={styles.span}>
							Count Video:
						</span>
						{count}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Course;
