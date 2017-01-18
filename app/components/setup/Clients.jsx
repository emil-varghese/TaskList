import React from 'react';

class Clients extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    var clientName = this.props.name;
    console.log('Client',this.props.name);
    return (

        <tr>
          <td>{clientName}
          <button className="button expanded">Edit</button>
          <button className="button expanded">Delete</button>
          </td>
        </tr>

    )
  }

}

export default Clients;
