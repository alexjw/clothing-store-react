import React from "react";

import './collection.sass'
import {selectCollectionId} from "../redux/selectors";
import {connect} from "react-redux";
import CollectionItem from "../components/collection-item";

const CollectionPage = ( {collection} ) => (
    <div className='collection-page'>
        <h2>{ collection.title }</h2>
        <div className='items'>
            {
                collection.items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    /*console.log('selectCollectionId(ownProps.match.params.collectionId)');
    console.log(selectCollectionId(ownProps.match.params.collectionId));
    console.log(selectCollectionId(ownProps.match.params.collectionId)(state));*/
    return { collection: selectCollectionId(ownProps.match.params.collectionId)(state) }
};

export default connect(mapStateToProps)(CollectionPage)
