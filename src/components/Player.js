import React from "react";
import "../styles/player.css";

export default function Player(props) {
  function increment() {
    props.score = props.score + 1;
  }
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="part1">
        <button className="decrement">-</button>
        {props.score}
        <button className="increment" onClick={() => increment}>
          +
        </button>
      </div>
    </div>
  );
}
