import React, {useEffect} from "react";
import CollectionsOverviewContainer from "../components/collections-overview-container";
import {Route} from "react-router-dom";
import CollectionPageContainer from "./collection-container";
import {fetchCollectionStart} from "../redux/shop-actions";
import {connect} from "react-redux";


const ShopPage = (props) => {

    useEffect(() => { props.fetchCollectionsStart() }, [props.fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${props.match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${props.match.path}/:collectionId`}  component={CollectionPageContainer} />
        </div>
    )
};


const mapDispatchToProps = dispatch => (
    { fetchCollectionsStart: () => dispatch(fetchCollectionStart()) }
);

export default connect(null, mapDispatchToProps)(ShopPage)
