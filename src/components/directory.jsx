import React from 'react'

import './directory.sass'
import MenuItem from "./menu-item";
import { connect } from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../redux/selectors";

const Directory = ({sections}) => (
    <div className='directory-menu'>
         {
             sections.map(({id, ...otherSectionProps}) => (
                 <MenuItem key={id} {...otherSectionProps}/>
             ))
         }
     </div>
);

const mapStateToProps = createStructuredSelector(
    {sections: selectDirectorySections}
);

export default connect(mapStateToProps)(Directory)
