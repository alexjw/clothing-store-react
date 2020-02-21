import React from "react";

import './collection-item.sass'

import { connect } from 'react-redux'
import { addItem } from "../redux/cart-actions";
import CustomButton from "./custom-button";

const CollectionItem = ({item, addItem}) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${item.imageUrl})`}} />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} extraClassName='inverted'>Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
