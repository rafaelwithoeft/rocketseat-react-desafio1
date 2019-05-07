import React from 'react';
import PropTypes from 'prop-types';

import { distanceInWordsToNow } from 'date-fns';

const PostHeaderComponent = ({ avatar, profile, date }) => (
  <div className="post-header">
    <img src={avatar} alt="Imagem de perfil" />
    <div className="post-header-content">
      <strong>{profile}</strong>
      <small>{distanceInWordsToNow(date, new Date())}</small>
    </div>
  </div>
);

PostHeaderComponent.propTypes = {
  avatar: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default PostHeaderComponent;
