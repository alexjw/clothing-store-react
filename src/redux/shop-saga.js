import { takeEvery, call, put, all } from 'redux-saga/effects'
import ACTION_CONSTANTS from "./action-constants";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";
import {fetchCollectionFailure, fetchCollectionStart, fetchCollectionSuccess} from "./shop-actions";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);    // calls a function passing second as argument

        yield put(fetchCollectionSuccess(collectionsMap));  // act as a dispatch
    } catch (e) {
        yield put(fetchCollectionFailure(e.message));
    }

    // dispatch(fetchCollectionStart());   // this is going to the reducer and update isFetching (affecting global)
    //
    // collectionRef.get().then(snapshot => {
    //     const result = convertCollectionSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionSuccess(result));
    // }).catch(error => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeEvery(ACTION_CONSTANTS.FETCH_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
