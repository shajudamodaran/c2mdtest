import React from 'react';
import styles from './Shimmer.module.scss';

const CommonLoader = () => {
    return (
        <div id={styles.container}>
            <div id={styles.square} className={styles.shimmer}></div>
                <div id={styles.content}>
                    <div id={styles.title} className={styles.shimmer}></div>
                    <div id={styles.desc}>
                    <div className={`${styles.line} ${styles.shimmer}`}></div>
                    <div className={`${styles.line} ${styles.shimmer}`}></div>
                    <div className={`${styles.line} ${styles.shimmer}`}></div>
                    <div className={`${styles.line} ${styles.shimmer}`}></div>
                </div>
            </div>
        </div>
    )
}

export default CommonLoader;