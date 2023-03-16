import React from 'react';
import styles from './ProjectButton.module.css';

export default function ProjectButton({ text, src }) {
    return (
        <a className={styles.button} href={src} target='blank'>
            {text}
        </a>
    );
}
