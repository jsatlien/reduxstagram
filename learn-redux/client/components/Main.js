import React from 'react';
import { Link } from 'react-router';

const Main = props => (
    <div>
        <h1>
            <Link to="/" >Weduxstagwam</Link>
        </h1>
        {React.CloneElement(this.props.children, this.props)}   
    </div>
)

export default Main;