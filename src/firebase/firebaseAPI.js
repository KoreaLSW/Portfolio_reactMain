import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function selectComment() {
    return get(ref(database, `comment/`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return descDate2(Object.values(snapshot.val()));
            } else {
                console.log('No data available');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function insertComment(id, password, contents) {
    const key = uuid();
    return set(ref(database, `comment/${key}`), {
        key,
        id,
        pw: password,
        date: selectDate(),
        contents,
    });
}

export async function updateComment(key, id, password, contents) {
    return set(ref(database, `comment/${key}`), {
        key,
        id,
        pw: password,
        date: selectDate(),
        contents,
    });
}

export async function deleteComment(key) {
    return remove(ref(database, `comment/${key}`));
}

function selectDate() {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초
    return `${year}-${month < 10 ? `0${month}` : month}-${
        date < 10 ? `0${date}` : date
    } ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 내림차순
function descDate2(list) {
    const sorted_list = list
        .sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        })
        .reverse();
    return sorted_list;
}
