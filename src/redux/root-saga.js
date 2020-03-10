import { all, call } from 'redux-saga/effects'
import {fetchCollectionsStart} from "./shop-saga";
import {userSaga} from "./user-saga";

export default function* rootSaga() {

    yield all([call(fetchCollectionsStart), call(userSaga)])
    // takes an array of sagas and yields every one in parallel

}