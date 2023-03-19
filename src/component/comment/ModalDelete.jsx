import React, { useEffect, useState } from 'react';
import styles from './ModalDelete.module.css';
import useComment from '../../hooks/useComment';

export default function ModalDelete({ setModalDelete, item }) {
    const [key, setKey] = useState();
    const [password, setPassword] = useState();
    const { deleteCommentHook } = useComment();

    useEffect(() => {
        setKey(item.key);
    }, []);

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleDelete = () => {
        if (item.pw === password) {
            deleteCommentHook.mutate(
                { key },
                {
                    onSuccess: () => {
                        alert('댓글이 정상적으로 삭제되었습니다.');
                        setModalDelete(false);
                    },
                }
            );
        } else {
            alert('비밀번호가 틀립니다.');
        }
    };
    const handleNoBtn = () => {
        setModalDelete(false);
    };

    return (
        <div className={styles.ModalDelete}>
            <div className={styles.topBox}>
                <p>패스워드 : &nbsp; </p>
                <input type='password' onChange={handlePassword} />
            </div>
            <div className={styles.bottomBox}>
                <button className={styles.yesBox} onClick={handleDelete}>
                    삭제
                </button>
                <button className={styles.noBox} onClick={handleNoBtn}>
                    취소
                </button>
            </div>
        </div>
    );
}
