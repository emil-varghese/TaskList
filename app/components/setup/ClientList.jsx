import React from 'react';

class Clients extends React.Component {

  constructor(props) {
    super(props);
    this.editClient = this.editClient.bind(this);
    this.saveClient = this.saveClient.bind(this);
    this.deleteClient = this.deleteClient.bind(this);

    var editable = false;
    if (this.props.add === true ) {
      editable = true;
    }

    this.state = {
      editable: editable
    }
  }

  editClient() {
    this.setState ({
      editable: !this.state.editable
    });
  }

  saveClient() {

    var newName = this.refs.clientText.value;
    console.log(newName);
    this.refs.clientText.value = '';
    if (newName.length > 0) {
      this.props.onSave(this.props.id,newName);
    }

    this.setState ({
      editable: !this.state.editable
    });
  }

  deleteClient() {

  }

  render () {
    var clientName = this.props.name;
    console.log('Client',this.props.name);
    console.log('Editable ',this.state.editable);

    var renderClientName = () => {
      if (this.state.editable) {
        return <input type="text" ref="clientText" placeholder={clientName}/>
      }else {
        return <p>{clientName}</p>
      }
    };

    var renderButton = () => {
      if (!this.state.editable) {
        return <button className="button hollow small" onClick={this.editClient}>Edit</button>
      } else {
        return <button className="button hollow small success" onClick={this.saveClient}>Save</button>
      }
    }

    return (

        <tr>
          <td>
              <div className="row client-container">
                <div className="medium-6 large-4 columns">
                  {renderClientName()}
                </div>
                <div className="medium-2 large-2 small-2 columns">
                  {renderButton()}
                  <button className="button hollow alert small" onClick={this.deleteClient}>Delete</button>
                </div>
              </div>
          </td>
        </tr>

    )
  }

};

class ClientList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {id:1, name: 'PWB'},
        {id:2, name: 'Emtek'},
        {id:3, name: 'Ixia'},
        {id:4, name: 'Yamaha'}
      ]
    }
  }

  handleAddClient() {
    console.log('Here');

    this.setState ({
      clients: [
        ...this.state,
        { id:5, name: 'E'
        }
      ]
    });
  }

  handleUpdateClient(id, newName) {
    var updatedClients = this.state.clients.map ( (client) => {
      if (id === client.id) {
        client.name = newName
      }
      return client;
    });

    this.setState({
      clients: updatedClients
    });
  }

  render () {
    var {clients} = this.state;
    var rows = [];

    var renderClient = () => {
      //This return for rendering it
      return clients.map ( (client) => {
        //This return is for the map function.
        return(
            <Clients key={client.id} {...client} onSave={this.handleUpdateClient.bind(this)}/>
        );
      });
    };

    return (
      <div>
          <div className="row">
            <div className="medium-8 large-6 small-10 columns">
              <div className="card card-client">
                <h4>Clients</h4>
                <button className="button small success" onClick={ () => {
                    console.log('Add');

                    this.setState ({
                      clients: [
                        ...this.state.clients,
                        { id:5, name: '', add: true
                        }
                      ]
                    });

                  }}>Add Client</button>
                <div className="card-section">
                  <table>
                    <tbody className="container-tbody">
                      {renderClient()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="medium-4 columns">
              <div className="card">

                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
            <div className="medium-5 columns">
              <div className="card">

                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
            <div className="medium-3 columns">
              <div className="card">

                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
};



export default ClientList;
