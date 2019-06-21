import React from "react";

export default function(props) {

  const randomTrinket = () => {
    const randomID = Math.floor(Math.random() * props.items.length )
    props.history.push(`/trinket/${randomID}`);
  }

  return (
    <div>
      <h3>Welcome!</h3>
      <button onClick={randomTrinket}>Random Trinket</button>
    </div>
  )
}
