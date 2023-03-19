import React, { useState, useEffect } from 'react';
import Video from '../Video';
import ReactPlayer from 'react-player'

import styles from './VideoLesson.module.css';

const VideoLesson = ({ videoData }) => {
	const urlVideo = videoData.link;
	return (
		<>
			<Video id={videoData.id} url={urlVideo} title={videoData.title} />
		</>
	);
};

export default VideoLesson;
