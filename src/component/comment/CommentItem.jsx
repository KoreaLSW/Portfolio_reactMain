import React, { useState } from 'react';
import styles from './CommentItem.module.css';
import { BsFillPencilFill, BsTrash3Fill } from 'react-icons/bs';
import Modal from './Modal';
import ModalDelete from './ModalDelete';
export default function CommentItem({ item }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const handleModal = () => {
        setModalOpen(true);
    };

    const handleModalDelete = () => {
        setModalDelete(true);
    };

    return (
        <li className={styles.item}>
            <div className={styles.topBox}>
                <div className={styles.userBox}>
                    <span>작성자 : &nbsp; </span>
                    <p> {item.id}</p>
                </div>
                <div className={styles.dateBox}>
                    <span>날짜 : &nbsp;</span>
                    <p> {item.date}</p>
                </div>
            </div>
            <div className={styles.bottomBox}>
                <div className={styles.contentBox}>
                    <span>내용 : &nbsp; </span>
                    <p> {item.contents}</p>
                </div>
                <div className={styles.updateAndDelete}>
                    <p onClick={handleModal}>
                        <BsFillPencilFill />
                    </p>
                    <p onClick={handleModalDelete}>
                        <BsTrash3Fill />
                    </p>
                </div>
            </div>
            {modalOpen && (
                <Modal
                    setModalOpen={setModalOpen}
                    item={item}
                    type={'update'}
                />
            )}
            {modalDelete && (
                <ModalDelete setModalDelete={setModalDelete} item={item} />
            )}
        </li>
    );
}
