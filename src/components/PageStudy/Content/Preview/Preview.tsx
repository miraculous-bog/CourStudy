import React from 'react';

import Video from '../Video';

import styles from './Preview.module.css';

const Preview = ({ videoData }) => {
	const urlVideo = videoData.meta.courseVideoPreview.link;
	console.log(urlVideo);
	return (
		<>
			<Video id={videoData.id} url={urlVideo} title={videoData.title} />
		</>
	);
};

export default Preview;
