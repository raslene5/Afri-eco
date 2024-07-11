import React from 'react';
import './Title.css';

const Title = ({ subtitle, title }) => {
    return (
        <div className='title'>
            {subtitle && <p>{subtitle}</p>}
            <h2>{title}</h2>
        </div>
    );
}

export default Title;
