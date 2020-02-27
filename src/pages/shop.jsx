import React from "react";
import CollectionsOverview from "../components/collections-overview";
import {Route} from "react-router-dom";
import CollectionPage from "./collection";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";
import {fetchCollectionStartAsync, updateCollections} from "../redux/shop-actions";
import {connect} from "react-redux";
import WithSpinner from "../components/with-spinner.jsx";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../redux/selectors";
import {timer} from "redux-logger/src/helpers";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.props.fetchCollectionAsync();
    }

    render = () => {
        console.log(this.props);
        return <div className='shop-page'>
            <Route exact path={`${this.props.match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.props.isFetching} {...props}/>} />
            <Route path={`${this.props.match.path}/:collectionId`} render={(props) => {return <CollectionPageWithSpinner isLoading={!this.props.isCollectionLoaded} {...props}/>}} />
        </div>
    }
}

const mapStateToProps = createStructuredSelector(
    { isFetching: selectIsCollectionFetching, isCollectionLoaded: selectIsCollectionLoaded }
);

const mapDispatchToProps = dispatch => (
    { fetchCollectionAsync: () => dispatch(fetchCollectionStartAsync()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
