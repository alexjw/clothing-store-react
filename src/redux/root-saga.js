import { all, call } from 'redux-saga/effects'
import {shopSagas} from "./shop-saga";
import {isUserAuthenticated, userSaga} from "./user-saga";
import {cartSaga} from "./cart-saga";

export default function* rootSaga() {

    yield all([call(shopSagas), call(userSaga), call(cartSaga)])
    // takes an array of sagas and yields every one in parallel

}