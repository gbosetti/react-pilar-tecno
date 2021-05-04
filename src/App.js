import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Jobs} from './views/Jobs';
import {Companies} from './views/Companies';
import {Cities} from './views/Cities';
import {Countries} from './views/Countries';
import {NavBar} from './views/NavBar';
import {NotFoundView} from './views/NotFoundView';

export class App extends React.Component {

  constructor(){
    super();
    this.state = {
      countries: ['Argentina', 'Italia', 'Uruguay', 'United Kingdom'],
      cities: [
        {name: 'La Rioja', country: 0},
        {name: 'La Plata', country: 0},
        {name: 'Benevento', country: 1}
      ]
    }
  }

  deleteCountry = (name) => {
    this.setState({
      countries: this.state.countries.filter(country => country !== name)
    });
  }

  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Jobs}></Route>
          <Route path="/companies" exact component={Companies}></Route>
          <Route path="/cities" exact render={() => <Cities cities={this.state.cities} countries={this.state.countries}></Cities>}></Route>
          <Route path="/countries" exact render={(props) => <Countries delete={this.deleteCountry} countries={this.state.countries}></Countries>}></Route>
          <Route component={NotFoundView}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
