import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import firebase from 'app/firebase/';
import Main from 'Main';

//Load foundations
require('style!css!foundation-sites/dist/css/foundation.min.css');
// Load foundation
$(document).ready(function() {
  $(document).foundation();
});

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
