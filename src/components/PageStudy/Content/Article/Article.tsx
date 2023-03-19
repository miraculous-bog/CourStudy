import React from 'react';


import styles from './Article.module.css';

const Article = ({ url, title }) => {
	return (
		<>
			<h1>{title}</h1>
			<iframe title={title} name="myframe" width="100%" height="800px" src={url} ></iframe>
		</>
	);
};

export default Article;
