import React, { useEffect, useState } from 'react';
import useComment from '../../hooks/useComment';
import styles from './Comment.module.css';
import CommentItem from './CommentItem';
import Modal from './Modal';
import Pagination from './Pagination';

export default function Comment() {
    const [list, setList] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const [modalOpen, setModalOpen] = useState(false);
    const {
        commentList: { Error, isLoading, data: commentList },
    } = useComment();

    const handleModal = () => {
        setModalOpen(true);
    };

    // console.log(commentList && commentList.length);
    // useEffect(() => {
    //     commentList && setList(commentList);
    // }, []);

    return (
        <div className={styles.comment} id='Comment'>
            <div className={styles.container}>
                <h1 className={styles.title}>Comment</h1>
                <ul className={styles.list}>
                    {commentList &&
                        commentList
                            .slice(offset, offset + limit)
                            .map((value, index) => {
                                return <CommentItem key={index} item={value} />;
                            })}
                </ul>
                <div className={styles.bottomBox}>
                    <Pagination
                        total={
                            commentList === undefined ? 0 : commentList.length
                        }
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                    <div className={styles.imgBox}>
                        <img
                            src='/img/writing.png'
                            alt='writing'
                            onClick={handleModal}
                        />
                        {modalOpen && (
                            <Modal
                                setModalOpen={setModalOpen}
                                type={'insert'}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
