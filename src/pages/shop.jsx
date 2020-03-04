import React from "react";
import CollectionsOverviewContainer from "../components/collections-overview-container";
import {Route} from "react-router-dom";
import CollectionPageContainer from "./collection-container";
import {convertCollectionSnapshotToMap, firestore} from "../firebase/firebase.utils";
import {fetchCollectionStartAsync, updateCollections} from "../redux/shop-actions";
import {connect} from "react-redux";
import WithSpinner from "../components/with-spinner.jsx";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../redux/selectors";
import {timer} from "redux-logger/src/helpers";


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
            <Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${this.props.match.path}/:collectionId`}  component={CollectionPageContainer} />
        </div>
    }
}


const mapDispatchToProps = dispatch => (
    { fetchCollectionAsync: () => dispatch(fetchCollectionStartAsync()) }
);

export default connect(null, mapDispatchToProps)(ShopPage)
