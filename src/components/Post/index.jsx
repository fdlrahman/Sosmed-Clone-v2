import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

function Post() {
  return (
    <div className="post">
      <div className="post__head">
        <div className="post__left">
          <Avatar />
          <div className="post__name">nadyakhtnaptr</div>
        </div>

        <MoreHorizIcon className="icon__more" />
      </div>
      <div className="post__body"></div>
      <div className="post__foot">
        <div className="post__icons">
          <div className="post__more">
            <FavoriteBorderOutlinedIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <ShareOutlinedIcon />
          </div>
          <div className="post__save">
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>

        <div className="post__desc">
          <p className="desc">
            <strong>nadyakhtnaptr</strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta minima rem ipsum odit, facere laudantium, vitae, eaque sunt placeat consequatur animi? Voluptates deleniti quas officia fuga modi nulla possimus expedita.
          </p>
          <p className="posted">11 JAM YANG LALU</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
