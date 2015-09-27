'use strict';

import React from 'react';

import Home from './components/home/Home';

// var html = React.renderToString(React.createElement(Home));
// console.log(html);

if (typeof document !== 'undefined') {
  React.render(
    React.createElement(Home),
    document.getElementById('root')
  );
}

module.exports = Home;
