import React from "react";
import CollectionsOverview from "../components/collections-overview";
import {Route} from "react-router-dom";
import CollectionPage from "./collection";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";
import {updateCollections} from "../redux/shop-actions";
import {connect} from "react-redux";
import WithSpinner from "../components/with-spinner.jsx";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const result = convertCollectionSnapshotToMap(snapshot);
            console.log(result);
            this.props.updateCollections(result);
            this.setState({loading: false});
        })
    }

    render = () => {
        return <div className='shop-page'>
            <Route exact path={`${this.props.match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
            <Route path={`${this.props.match.path}/:collectionId`} render={(props) => {console.log(props);return <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>}} />
        </div>
    }
}

const mapDispatchToProps = dispatch => (
    { updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) }
);

export default connect(null, mapDispatchToProps)(ShopPage)
