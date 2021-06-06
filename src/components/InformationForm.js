import { Component } from 'react';

class InformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    this.props.addPerson(this.state);
    event.preventDefault();

  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <label>
        First Name
        <input name = "firstName" onChange={this.handleChange} />
      </label>

        <label>
          Last Name
          <textarea name = "lastName" onChange={this.handleChange} />
        </label>

        <label>
          Address
          <textarea name = "address" onChange={this.handleChange} />
        </label>

        <label>
          Phone Number
          <textarea name = "phone" onChange={this.handleChange} />
        </label>


        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InformationForm
