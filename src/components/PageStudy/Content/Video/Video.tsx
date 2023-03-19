import React, { useState, useEffect } from 'react';

import ReactPlayer from 'react-player'

import picture from '../../../../img/picture-in-picture.png'
import idea from '../../../../img/idea.png'

import styles from './Video.module.css';

interface Props {
	url: string,
	title: string
}

const Video = ({ url, title }: Props) => {


	return (
		<div className={styles.wrapper}>
			<ReactPlayer class={styles.video} controls playing loop url={url} width="100%" />
			<div className={styles.controllers}>
				<h1 className={styles.title}>{title}</h1>
				<div>
					<img className={styles.img} src={picture} alt="" />

					<img className={styles.img} src={idea} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Video;
