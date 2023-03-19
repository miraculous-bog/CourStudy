import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.headertext}>
				All coursers
			</h1>
		</div>
	);
};

export default Header;
