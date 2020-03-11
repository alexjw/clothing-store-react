import { all, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "./cart-actions";
import ACTION_CONSTANTS from "./action-constants";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(ACTION_CONSTANTS.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga() {
    yield(all([onSignOutSuccess()]))
}
