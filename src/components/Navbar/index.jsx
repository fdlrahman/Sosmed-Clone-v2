import React from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/SendOutlined";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/avatar";
import Tooltip from "@material-ui/core/tooltip";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" className="navbar__logo" />

        <form action="" className="navbar__search">
          <SearchIcon />
          <input type="text" placeholder="Cari" />
        </form>

        <div className="navbar__icons">
          <Tooltip title="Home">
            <HomeIcon />
          </Tooltip>
          <Tooltip title="Direct Message">
            <SendIcon />
          </Tooltip>
          <Tooltip title="Explore">
            <ExploreIcon />
          </Tooltip>
          <Tooltip title="Favorite">
            <FavoriteBorderIcon />
          </Tooltip>

          <Avatar sx={{ width: 56, height: 56 }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
