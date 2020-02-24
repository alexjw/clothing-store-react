import React from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../components/collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../redux/selectors";
import {connect} from "react-redux";
import CollectionsOverview from "../components/collections-overview";

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        <CollectionsOverview/>
    </div>
);

export default ShopPage
