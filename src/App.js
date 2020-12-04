import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Team from './components/team-page';
import PlayerModal from './components/player-modal'


class App extends Component {
  state = {
    team: ''
  }

  setTeam = (team) => {
    this.setState({ team });
  }

  setModalCnt = (p) => {
    this.setState({ modalCnt: p });
    document.getElementById("plr-mdl-bg").style.display = "block";
  }

  closePlrMdl = () => {
    document.getElementById("plr-mdl-bg").style.display = "none";
  }

  render() {
    // console.log(this.state.modalCnt);
    return (
      <div className="App">
        <Navbar
          setModalCnt={this.setModalCnt}
          team={this.state.team}
        />
        <div>
          {this.state.team ?
            <Team
              team={this.state.team}
            /> :
            <Home
              setTeam={this.setTeam}
            />
          }
          <PlayerModal
            player={this.state.modalCnt}
            closeMdl={this.closePlrMdl}
          />
        </div>
      </div>
    );
  }
}

export default App;
