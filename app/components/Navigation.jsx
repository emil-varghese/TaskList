import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Navigation extends React.Component {
  onSearch (e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length> 0 ) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' +encodedLocation;
    }
  }

  render () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <div>
            <ul className="dropdown menu" data-dropdown-menu="">
              <li className="menu-text">Task Management</li>
              <li>
                <a href="#">Task Management</a>
                <ul className="menu vertical">
                  <li>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Tasks</IndexLink>
                  </li>
                  <li>
                    <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Clients</Link>
                  </li>
                  <li>
                    <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Resources</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>File Upload</Link>
              </li>
              <li>
                <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navigation;
