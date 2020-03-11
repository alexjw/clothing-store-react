import { takeLatest, put, all, call } from 'redux-saga/effects'
import ACTION_CONSTANTS from "./action-constants";
import { auth, createUserProfileDocument, googleAuthProvider, getCurrentUser } from "../firebase/firebase.utils";
import {
    emailSignInFailure,
    emailSignInSuccess,
    googleSignInFailure,
    googleSignInSuccess, signInFailure,
    signInSuccess, signOutStart, signOutSuccess
} from "./user-actions";

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleAuthProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(googleSignInFailure(e));
    }
}

export function* signInWithEmail({ payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(emailSignInFailure(e));
    }
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSingInStart() {
    yield takeLatest(ACTION_CONSTANTS.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
    yield all([call(onGoogleSingInStart), call(onEmailSignInStart), call(isUserAuthenticated), call(onSignOutStart)]);
}

export function* onEmailSignInStart() {
    yield takeLatest(ACTION_CONSTANTS.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth)
            return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (e) {
        yield put(emailSignInFailure(e));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(ACTION_CONSTANTS.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (e) {
        yield put(signInFailure(e));
    }
}

export function* onSignOutStart() {
    yield takeLatest(ACTION_CONSTANTS.SIGN_OUT_START, signOut)
}
