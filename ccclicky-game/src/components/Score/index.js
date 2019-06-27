import React from "react";
import "./style.css";

function Score (props) {
    return (
        <span>
            { if (props.count > 2) {
                console.log("You have gone too high!");
            } else {
                console.log("Keep going!");
            }}
        </span>
    );
    

}

export default Score;