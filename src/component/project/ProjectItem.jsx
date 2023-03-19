import React, { useEffect, useRef } from 'react';
import ProjectButton from './ProjectButton';
import styles from './ProjectItem.module.css';
import { css, keyframes } from '@emotion/react';

const floating = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`;
const boxStyle = css`
    animation: ${floating} 2s ease infinite;
`;
export default function ProjectItem({ value }) {
    const listRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = (e) => {
        //console.log(window);
        // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
        if (
            window.pageYOffset + window.innerHeight >
            listRef.current.offsetTop + 300
        ) {
            //console.log(listRef.current);
            //listRef.current.style = 'animation: leftToRight 2.5s ease-in-out';
            listRef.current.style = 'opacity:1; transform: translateX(0%);';
        } else {
            listRef.current.style = 'opacity:0; transform: translateX(50%);';
        }
    };
    return (
        <li ref={listRef} key={value.id} className={styles.item} css={boxStyle}>
            <div className={styles.imgBox}>
                <img className={styles.img} src={value.img} alt='' />
                <div className={styles.imghover}>
                    <a href={value.git} target='blank'>
                        gitHub 바로가기
                    </a>
                </div>
            </div>
            <div className={styles.rightBox}>
                <p className={styles.title}>{value.title}</p>
                <p className={styles.skills}>사용 언어 : {value.skills}</p>
                <p className={styles.comment}>
                    프로젝트 설명 : {value.comment}
                </p>
                <div className={styles.buttonBox}>
                    <ProjectButton text={'view'} src={value.view} />
                    <ProjectButton text={'gitHub'} src={value.git} />
                </div>
            </div>
        </li>
    );
}
