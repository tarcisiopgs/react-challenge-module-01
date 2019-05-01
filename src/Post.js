import React from "react";

import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

const Post = props =>
  props.posts.map((value, index) => (
    <div key={index} className="post">
      <PostHeader author={value.author} published={value.published} />
      <hr />
      <div className="content" dangerouslySetInnerHTML={{ __html: value.content }} />
    </div>
  ));
Post.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Post;
