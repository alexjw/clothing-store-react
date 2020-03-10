import { takeLatest, put, all, call } from 'redux-saga/effects'
import ACTION_CONSTANTS from "./action-constants";
import {auth, createUserProfileDocument, googleAuthProvider} from "../firebase/firebase.utils";
import {googleSignInFailure, googleSignInSuccess} from "./user-actions";

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleAuthProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (e) {
        yield put(googleSignInFailure(e));
    }
}

export function* onGoogleSingInStart() {
    yield takeLatest(ACTION_CONSTANTS.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSaga() {
    yield all([call(onGoogleSingInStart)]);
}
