import React from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../components/collection-preview";

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return <div className='shop-page'>
            {
                this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    }
}

export default ShopPage
