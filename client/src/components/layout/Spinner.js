import React,{Fragment} from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line
export default ()=>(
    <Fragment>
        <img src={spinner} alt="Loading..." style={{width: '5rem',margin: 'auto',display: 'block'}} />
    </Fragment>
)
