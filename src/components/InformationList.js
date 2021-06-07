import { Component } from 'react';

class InformationList extends Component {

  render() {
    const listItems = this.props.person.map((person, index) =>(
      <div key={index}>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <p>{person.address}</p>
        <p>{person.phone}</p>
      </div>
    ));

    return (
      <div>
        <div>{listItems}</div>
      </div>
    );
  }
}

export default InformationList
