import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Link = ({text, link}) => {
    return (
        <a href={link} target="_blank" className="link">
            <ArrowForwardIcon/>
            <center><p><b>{text}</b></p></center>
        </a>
    );
}

export default Link;