import React from "react";
import { withRouter } from 'react-router-dom';

import './collection-preview.sass'

import CollectionItem from "./collection-item"

const CollectionPreview =({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>
        <h2 onClick={() => history.push(`${match.path}/${routeName}`)} className='title'>
            {title.toUpperCase()}
        </h2>
        <div key className='preview'>
            {
                items.filter((item, i) => i<4).map((item) => (<CollectionItem key={item.id} item={ item } />))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview)
