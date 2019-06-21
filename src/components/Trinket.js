import React from "react";
import { Route, Link } from "react-router-dom";
import {TrinketDescription, TrinketShipping } from "./";

export default function(props) {
  const item = props.items.find(i => String(i.id) === props.match.params.id);

  if (!item) {
    return <div>Loading ... </div>
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav>
        <Link to={`/trinket/${props.match.params.id}`} key={item.id}>Description</Link>
        <Link to={`/trinket/${props.match.params.id}/shipping`} key={item.id}>Shipping</Link>
      </nav>

      <Route path="/trinket/:id" exact render={() => <TrinketDescription description={item.description} />} />
      <Route path="/trinket/:id/shipping" exact render={(props) => <TrinketShipping shipping={item.shipping} />} />
    </div>
  );
}
