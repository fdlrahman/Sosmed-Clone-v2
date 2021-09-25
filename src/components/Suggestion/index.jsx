import React from "react";
import "./Suggestion.css";
import Avatar from "@material-ui/core/Avatar";

function Suggestion() {
  return (
    <div className="suggestion">
      <div className="suggestion__group">
        <Avatar />
        <div>
          <h3>fadhlurrahman.id</h3>
          <p>Baru di instagram</p>
        </div>
      </div>

      <a href="">Ikuti</a>
    </div>
  );
}

export default Suggestion;
