import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <div id='About' className={styles.about}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.container}>
                <div className={styles.topBox}>
                    <div className={styles.profileImg_box}>
                        <img
                            className={styles.profileImg}
                            src='/img/profile.jpg'
                            alt='profile'
                        />
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox_title}>
                            '성공이란 매일 반복되는 작은 노력의 결과이다'
                        </p>
                        <p className={styles.context}>
                            제가 좋아하는 좌우명입니다.
                            <br /> 개발자 뿐만아니라 어떤 분야라도 작은 노력이
                            쌓인다면 분명 성공하게 된다고 믿고있습니다.
                            <br />저 역시 끊임없이 노력하며 빠르게 변화하는
                            트렌드에 맞춰 발전하는 프론트엔드 개발자가
                            되겠습니다.
                        </p>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.rightBox_textBox}>
                            <div className={styles.ageBox}>
                                <p className={styles.age_title}>나이</p>
                                <p className={styles.age}>93.11.07</p>
                            </div>
                            <div className={styles.emailBox}>
                                <p className={styles.email_title}>Email</p>
                                <p className={styles.email}>
                                    sagnwoo0560@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className={styles.imgBox}>
                            <a
                                href='https://github.com/KoreaLSW'
                                target='_blank'
                            >
                                <img src='/img/github.png' alt='' />
                            </a>
                            <a href='mailto:sangwoo056@gmail.com'>
                                <img src='/img/email.png' alt='' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <h2 className={styles.skills_title}>Skills</h2>
                    <ul className={styles.skills_list}>
                        <li className={styles.skills_item}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <img src='/img/html.png' alt='' />
                                <img
                                    src='/img/css.png'
                                    alt=''
                                    style={{ marginTop: '2rem' }}
                                />
                            </div>
                            <ul className={styles.skills_item_explanation}>
                                <li>반응형 웹을 구현한 경험이 있습니다.</li>
                                <li>
                                    Flex를 활용하여 화면을 구성 할 수 있습니다.
                                </li>
                                <li>
                                    CSS를 사용하여 간단한 애니메이션을 구현 할
                                    수 있습니다.
                                </li>
                            </ul>
                        </li>
                        <li className={styles.skills_item}>
                            <img src='/img/javascript.png' alt='' />
                            <ul className={styles.skills_item_explanation}>
                                <li>const / let / var의 차이를 이해합니다.</li>
                                <li>
                                    async/await를 사용하여 비동기처리와
                                    API통신을 구현한 경험이 있습니다.
                                </li>
                                <li>
                                    reduce, map, filter 등 다양한 고차함수를
                                    활용합니다.
                                </li>
                                <li>호이스팅 및 스코프를 이해하고있습니다.</li>
                            </ul>
                        </li>
                        <li className={styles.skills_item}>
                            <img src='/img/typescript.png' alt='' />
                            <ul className={styles.skills_item_explanation}>
                                <li>상황에 맞는 타입을 사용합니다.</li>
                                <li>
                                    JS, TS를 이용한 연산과 DOM 객체의 조작경험이
                                    있습니다.
                                </li>
                            </ul>
                        </li>
                        <li className={styles.skills_item}>
                            <img src='/img/react.png' alt='' />
                            <ul className={styles.skills_item_explanation}>
                                <li>
                                    useState, useEffect등 리액트훅의 기능을
                                    이해하고 사용합니다.
                                </li>
                                <li>
                                    React(Js, Ts)를 사용한 SPA 프로젝트 경험이
                                    있습니다.
                                </li>
                                <li>
                                    Redux, contextAPI를 사용해 전역 상태관리를
                                    사용할 수 있습니다.
                                </li>
                                <li>
                                    react-router-dom, react-query, axios등
                                    개발에 필요한 다양한 라이브러리를 사용할 수
                                    있습니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
