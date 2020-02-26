import React from "react";
import CollectionsOverview from "../components/collections-overview";
import {Route} from "react-router-dom";
import CollectionPage from "./collection";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";
import {updateCollections} from "../redux/shop-actions";
import {connect} from "react-redux";

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const result = convertCollectionSnapshotToMap(snapshot);
            console.log(result);
            this.props.updateCollections(result);
        })
    }

    render = () => (
        <div className='shop-page'>
            <Route exact path={`${this.props.match.path}`} component={CollectionsOverview} />
            <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    { updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) }
);

export default connect(null, mapDispatchToProps)(ShopPage)
