import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Registration, Logout, CreateOrJoinSimulation, JoinTheSimulation, JoiningError, SimulationLibrary, SimulationLobby, PassiveParticipator, ActiveParticipator, ManagerStartSimulation, ManagerSimulationInAction } from './components/components'

class App extends Component {
  url = "/api";
  state = { data: "" };

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <p><b>EDUSIM</b> Get Started ! ! !</p>
        <button onClick={this.clickHandler}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p>
      

<BrowserRouter>
<Switch>
    <Route exact path='/Login' component={Login} />
    <Route exact path='/Registration' component={Registration} />
    <Route exact path='/Logout' component={Logout} />
    <Route exact path='/CreateOrJoinSimulation' component={CreateOrJoinSimulation} />
    <Route exact path='/JoinTheSimulation' component={JoinTheSimulation} />
    <Route exact path='/JoiningError' component={JoiningError} />
    <Route exact path='/SimulationLibrary' component={SimulationLibrary} />
    <Route exact path='/SimulationLobby' component={SimulationLobby} />
    <Route exact path='/PassiveParticipator' component={PassiveParticipator} />
    <Route exact path='/ActiveParticipator' component={ActiveParticipator} />
    <Route exact path='/ManagerStartSimulation' component={ManagerStartSimulation} />
    <Route exact path='/ManagerSimulationInAction' component={ManagerSimulationInAction} />
</Switch>
</BrowserRouter>

</div>
    );
  }
}

export default App;
