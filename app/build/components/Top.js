import React from 'react';

const Top = (props) => {
    return (
        <div className="flex-wrapper center middle" id="top">
            <span className={!props.left && 'disabled'} onClick={props.left && (() => {props.switchItems('left')})}><i className="fal fa-long-arrow-left"></i></span>
            <div>
                <span id="day">{props.data.day}</span>
                <span id="month">{props.data.month}</span>
            </div>
            <span className={!props.right && 'disabled'} onClick={props.right && (() => {props.switchItems('right')})}><i className="fal fa-long-arrow-right"></i></span>
        </div>
    );
};

export default Top;