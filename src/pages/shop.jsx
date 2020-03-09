import React from "react";
import CollectionsOverviewContainer from "../components/collections-overview-container";
import {Route} from "react-router-dom";
import CollectionPageContainer from "./collection-container";
import {fetchCollectionStart} from "../redux/shop-actions";
import {connect} from "react-redux";


class ShopPage extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.props.fetchCollectionsStart();
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
    { fetchCollectionsStart: () => dispatch(fetchCollectionStart()) }
);

export default connect(null, mapDispatchToProps)(ShopPage)
