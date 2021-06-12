import React from 'react';

const Rank = (props) => {
    return (
        <center>
            <div className="white f3">
                {`${props.user.name}, your current entry count is...`}
            </div>
            <div className="white f1">
                {props.user.entries}
            </div>
        </center>
    )
}
export default Rank;