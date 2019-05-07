import React, { Fragment } from 'react';
import { render } from 'react-dom';

import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/Post/PostComponent';

import './styles.scss';

import { posts } from './posts';

const App = () => (
  <Fragment>
    <HeaderComponent />
    <div className="post-container">
      <PostComponent posts={posts} />
    </div>
  </Fragment>
);

render(<App />, document.getElementById('app'));
