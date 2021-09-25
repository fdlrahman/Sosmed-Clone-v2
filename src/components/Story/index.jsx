import React, { useState, useEffect } from "react";
import "./Story.css";
import Avatar from "@material-ui/core/avatar";

function Story({ src, name }) {
  const [fixName, setFixName] = useState("");

  useEffect(() => {
    if (name.length > 13) {
      setFixName(name.slice(0, 9) + "...");
    } else {
      setFixName(name);
    }
  }, []);

  return (
    <div className="story">
      <div className="story__border">
        <div className="story__avatar" style={{ backgroundImage: `url('${src}')` }}></div>
      </div>
      <h3 className="story__name">{fixName}</h3>
    </div>
  );
}

export default Story;
