import React from "react";

import './collection-preview.sass'

import CollectionItem from "./collection-item"

const CollectionPreview =({ title, items }) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div key className='preview'>
            {
                items.filter((item, i) => i<4).map(({id, ...otherProps}) => (<CollectionItem key={id} {...otherProps} />))
            }
        </div>
    </div>
)

export default CollectionPreview
