import React from "react";

import './collections-overview.sass'
import CollectionPreview from "./collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../redux/selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector(
    {collections: selectCollectionsForPreview}
);

export default connect(mapStateToProps)(CollectionsOverview)
