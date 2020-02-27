import ACTION_CONSTANTS from "./action-constants";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
    type: ACTION_CONSTANTS.FETCH_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ACTION_CONSTANTS.FETCH_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionFailure = error => ({
    type: ACTION_CONSTANTS.FETCH_FAILURE,
    payload: error
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionStart());   // this is going to the reducer and update isFetching (affecting global)

        collectionRef.get().then(snapshot => {
            const result = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(result));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
};
