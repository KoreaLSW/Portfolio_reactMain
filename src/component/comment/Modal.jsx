import React, { useEffect, useState } from 'react';
import useComment from '../../hooks/useComment';
import styles from './Modal.module.css';

export default function Modal({ setModalOpen, item, type }) {
    const [key, setKey] = useState();
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [contents, setContents] = useState('');
    const { addComment, updateCommentHook } = useComment();

    useEffect(() => {
        if (item) {
            setKey(item.key);
            setId(item.id);
            setContents(item.contents);
        }
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'id') {
            setId(value);
            return;
        } else if (name === 'password') {
            setPassword(value);
            return;
        } else {
            if (500 < contents.length) {
                alert('최대 글자수는 500자입니다.');
                setContents(contents.slice(0, 500));
            } else {
                setContents(value);
            }

            return;
        }
    };

    const handleInsert = () => {
        if (type === 'insert') {
            if (!id) {
                alert('아이디를 입력해주세요.');
                return;
            }
            if (!password) {
                alert('비밀번호를 입력해주세요.');
                return;
            }
            if (!contents) {
                alert('댓글을 입력해주세요.');
                return;
            }
            addComment.mutate(
                { id, password, contents },
                {
                    onSuccess: () => {
                        alert('댓글이 정상적으로 등록되었습니다.');
                        setModalOpen(false);
                    },
                }
            );
        } else {
            if (item.pw === password) {
                updateCommentHook.mutate(
                    { key, id, password, contents },
                    {
                        onSuccess: () => {
                            alert('댓글이 정상적으로 수정되었습니다.');
                            setModalOpen(false);
                        },
                    }
                );
            } else {
                alert('패스워드가 다릅니다...');
            }
        }
    };

    const handleClose = () => {
        setModalOpen(false);
    };
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.id_pw_Box}>
                    <div className={styles.idBox}>
                        <p>아이디 : &nbsp;</p>
                        <input
                            type='text'
                            name='id'
                            onChange={handleInput}
                            value={id ? id : ''}
                        />
                    </div>
                    <div className={styles.pwBox}>
                        <p>패스워드 : &nbsp;</p>
                        <input
                            type='password'
                            name='password'
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className={styles.contentsBox}>
                    <textarea
                        name='contents'
                        placeholder='내용을 입력해주세요...(최대 500자)'
                        value={contents ? contents : ''}
                        onChange={handleInput}
                    />
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.insertBox}>
                        <img
                            src='/img/writing.png'
                            alt='writing'
                            onClick={handleInsert}
                        />
                    </div>
                    <div className={styles.cancelBox} onClick={handleClose}>
                        <img src='/img/cancel.png' alt='cancel' />
                    </div>
                </div>
            </div>
        </div>
    );
}
