import React from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../components/collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../redux/selectors";
import {connect} from "react-redux";

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector(
    {collections: selectCollections}
);

export default connect(mapStateToProps)(ShopPage)
