import React from 'react';

/* 
* Overview.js is a component for rendering tasks
*
*
 */

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li id={task.id}>{task.text}</li>
            })}
        </ul>
    );
};

export default Overview;
