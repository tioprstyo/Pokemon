import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* storeList(action) {
    try {
        const result = yield call(getList, action);
        const data = { list: result.list, detail: null, title: action.payload.title, next: result.next };
        yield put({type: "SET_USER", input: data});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* storeDetail(action) {
    try {
        const data = { list: action.payload.list, detail: action.payload.data, title: action.payload.title };
        yield put({type: "SET_USER", input: data});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

const getList = async (action) => {
    const list = await fetch(action.payload.url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((json) => {
            var oldList = action.payload.list.concat(json.results)
            var data = oldList.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            });
            var result = { list: data, next: json.next }
            return result;
        })
        .catch((error) => {
            var data = {list: [], next: ''}
            return data;
        });
    return list;
}

function* mySaga() {
    yield takeEvery("STORE_LIST", storeList);
    yield takeEvery("STORE_DETAIL", storeDetail);
}


export default mySaga;