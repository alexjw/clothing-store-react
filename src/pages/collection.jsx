import React from "react";

import './collection.sass'
import {selectCollectionId} from "../redux/selectors";
import {connect} from "react-redux";

const CollectionPage = ({match}) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    /*console.log('selectCollectionId(ownProps.match.params.collectionId)');
    console.log(selectCollectionId(ownProps.match.params.collectionId));
    console.log(selectCollectionId(ownProps.match.params.collectionId)(state));*/
    return { collection: selectCollectionId(ownProps.match.params.collectionId)(state) }
};

export default connect(mapStateToProps)(CollectionPage)
