import React from 'react';
import styles from './HorizontalComponent.module.scss';

function HorizontalComponent() {
	return(
		<div className={styles.specialDisplay}>
			<span>from </span>
			<span>the </span>
			<span>HorizontalComponent </span>
			<span>component</span>
		</div>
	);
}

export default HorizontalComponent;