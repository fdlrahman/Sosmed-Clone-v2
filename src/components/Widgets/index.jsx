import React from "react";
import "./Widgets.css";
import Avatar from "@material-ui/core/Avatar";
import Suggestion from "../Suggestion";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__profile">
        <div className="widgets__group">
          <Avatar />
          <div>
            <h3>fadhlurrahman.id</h3>
            <p>Fullstack Developer</p>
          </div>
        </div>

        <a href="">Alihkan</a>
      </div>

      <div className="widgets__suggestion">
        <div className="suggestions__head">
          <p>Saran Untuk Anda</p>
          <a>Lihat Semua</a>
        </div>

        <Suggestion />
        <Suggestion />
      </div>

      <p class="widgets__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, corporis? Dolorem veniam id</p>
      <p className="widgets__footer">© 2021 INSTAGRAM FROM FADHLURRAHMAN</p>
    </div>
  );
}

export default Widgets;
