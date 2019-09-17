import React from 'react';

const Learn = (props) => {
    return (
        <div id="learn">
            <div>
                <h1>{props.data.title}</h1>
                <p>{props.data.text}</p>
                {props.data.link && (
                    <a href={props.data.link} target="_blank">Learn more</a>
                )}
            </div>
        </div>
    );
};

export default Learn;