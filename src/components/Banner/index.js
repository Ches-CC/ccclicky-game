import React from "react";

function Banner(props) {

  // const countAlert = () = { 
  //   if (props.count > 2){
  //       console.log("You flew too high!");
  //   }else{
  //     console.log("Keep going!");
  //   }
  // };

  return (
    <ul className="list-group list-group-horizontal my-2">
      <li className="list-group-item flex-fill">Score: {props.count} </li>
      <li className="list-group-item flex-fill">"You Picked Wrong, Sucka!"</li>
      <li className="list-group-item flex-fill">
        High Score: {props.count}
      </li>
    </ul>
  );
}

export default Banner;
