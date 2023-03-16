import React from 'react';
import styles from './Home.module.css';
import TypeIt from 'typeit-react';

export default function Home() {
    document.addEventListener('DOMContentLoaded', function () {
        new TypeIt('#title').pause(1000).go();
    });
    return (
        <div id='Home' className={styles.home}>
            <div className={styles.home_container}>
                <div className={styles.leftBox}>
                    <TypeIt id='title' className={styles.title}>
                        FrontEnd
                        <br />
                        Developer
                    </TypeIt>
                    <p className={styles.context}>
                        끊임없이 성장하는 프론트엔드 개발자
                    </p>
                    <a href='#Project' className={styles.button}>
                        My Project
                    </a>
                </div>
                <div className={styles.rightBox}>
                    <img
                        className={styles.img}
                        src='/img/computer.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}
