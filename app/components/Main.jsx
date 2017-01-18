import React from 'react';
import Navigation from 'Navigation';
import Setup from 'Setup';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="columns large-centered medium-centered small-centered">
            {this.props.children}
            <Setup/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
