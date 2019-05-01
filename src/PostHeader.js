import React from "react";

import PropTypes from "prop-types";

const PostHeader = props => (
  <header>
    <img src={props.author.image} alt={props.author.name} />
    <div>
      <p>{props.author.name}</p>
      <small>{props.published}</small>
    </div>
  </header>
);
PostHeader.propTypes = {
  author: PropTypes.object.isRequired,
  published: PropTypes.string.isRequired
};

export default PostHeader;
