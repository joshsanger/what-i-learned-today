import React from 'react';

const Top = (props) => {
    return (
        <div className="flex-wrapper center middle" id="top">
            <span onClick={() => {props.fetchData('left')}}><i className="fal fa-long-arrow-left"></i></span>
            <div>
                <span id="day">{props.data.day}</span>
                <span id="month">{props.data.month}</span>
            </div>
            <span className="disabled" onClick={() => {props.fetchData('right')}}><i className="fal fa-long-arrow-right"></i></span>
        </div>
    );
};

export default Top;