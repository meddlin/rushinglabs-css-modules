import React from 'react';
import styles from './VerticalComponent.module.scss';


function VerticalComponent() {
	return(
		<div className={styles.specialDisplay}>
			<span>from </span>
			<span>the </span>
			<span>VerticalComponent </span>
			<span>component</span>
		</div>
	);
}

export default VerticalComponent;