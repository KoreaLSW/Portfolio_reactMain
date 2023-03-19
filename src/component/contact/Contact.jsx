import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>감사합니다!</h2>
                <div className={styles.imgBox}>
                    <div className={styles.ub_box}>
                        <p>GitHub</p>
                        <a href='https://github.com/KoreaLSW' target='blank'>
                            <img src='/img/github.png' alt='' />
                        </a>
                    </div>
                    <div className={styles.mail_box}>
                        <p>Mail</p>
                        <a href='mailto:sangwoo056@gmail.com'>
                            <img src='/img/email.png' alt='' />
                        </a>
                    </div>
                </div>
                <div className={styles.mouse} onClick={handleClick}>
                    <img src='/img/mouse.png' alt='' />
                    <p>맨위로</p>
                </div>
            </div>
        </div>
    );
}
