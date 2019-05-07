import React from 'react';
import PropTypes from 'prop-types';

import PostHeaderComponent from '../PostHeaderComponent';

const PostComponent = ({ posts }) => posts.map(val => (
  <div className="post-item" key={val.id}>
    <PostHeaderComponent {...val} />
    <p className="post-content">{val.content}</p>
  </div>
));

PostComponent.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostComponent;
