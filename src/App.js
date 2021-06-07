import { Component } from 'react';
import './App.css';
import InformationForm from './components/InformationForm.js';
import InformationList from './components/InformationList.js';

const defaultPersons = [
  {
    firstName: 'Sayeda',
    lastName: 'Khaled',
    address: '18 Larose Ct.',
    phone: '8645185262'
  },
  {
    firstName: 'Ghada',
    lastName: 'Khalid',
    address: '18 Larose Ct.',
    phone: '8645185262'
  },
  {
    firstName: 'Mohamed',
    lastName: 'Khaled',
    address: '18 Larose Ct.',
    phone: '8645185262'
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons: [],
    };

    this.addPerson = this.addPerson.bind(this);
  }

  componentDidMount(){
    this.setState({
      persons: defaultPersons,
    });
  }

  addPerson(newEntry){
    let personCopy=[...this.state.persons];
    personCopy.push(newEntry);
    this.setState({
      persons: personCopy,
    });
  }

  render() {

    return (
      <>
        <InformationForm addPerson={this.addPerson}/>
        <InformationList person={this.state.persons}/>
       </>
    );
  }
}



export default App;
