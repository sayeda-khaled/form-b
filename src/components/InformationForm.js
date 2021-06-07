import { Component } from 'react';

const defaultState = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
}

class InformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({ [evt.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPerson(this.state);
    this.setState(defaultState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        </label>

        <label>
          Last Name
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        </label>

        <label>
          Address
          <input type="text" name="address" onChange={this.handleChange} value={this.state.address} />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" onChange={this.handleChange} value={this.state.phone}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InformationForm
