import React, { useEffect, useState } from 'react';
import styles from './MenuBar.module.css';

export default function MenuBar() {
    // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
    const [scroll, setScroll] = useState(true);
    const [click, setClick] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
        if (window.pageYOffset === 0) {
            setScroll(() => true);
        } else {
            // 스크롤이 50px 미만일경우 false를 넣어줌
            setScroll(() => false);
        }
    };

    const handleClick = () => {
        if (click) {
            setClick(!click);
        } else {
            setClick(!click);
        }
    };

    return (
        <nav
            className={`${styles.menuBar} ${scroll ? '' : styles.scroll}`}
            style={scroll ? { height: '7rem' } : { height: '5rem' }}
        >
            <div className={styles.menuBar_container}>
                <div className={styles.logo}>
                    <img src='/img/logo.png' alt='' />
                </div>
                <div className={styles.mobile_menu} onClick={handleClick}>
                    <img
                        src={click ? '/img/cancel.png' : '/img/menu.png'}
                        alt=''
                    />
                </div>
                <ul
                    className={`${styles.menuList} ${
                        click ? styles.menu_in : styles.menu_out
                    }`}
                >
                    <li className={styles.menuList_item}>
                        <a href='#Home'>Home</a>
                    </li>
                    <li className={styles.menuList_item}>
                        <a href='#About'>About</a>
                    </li>

                    <li className={styles.menuList_item}>
                        <a href='#Project'>Project</a>
                    </li>
                    <li className={styles.menuList_item}>
                        <a href='#Comment'>Comment</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
