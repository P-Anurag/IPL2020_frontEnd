import React, { Component } from 'react';
import PlayerModal from './player-modal';
import './team-page.css';

class Team extends Component {
    state = { 
        teamName:this.props.team,
        team:[],
        details:{},
        modalCnt:{}
    }

    componentDidMount(){
        fetch(`http://localhost:3001/teamDetails/${this.props.team}`)
        .then(det=> det.json())
        .then(det=>{
            let details = det;
            fetch(`http://localhost:3001/teamPlayers/${this.props.team}`)
            .then(team => team.json())
            .then(team =>{
                if(team.length){
                    this.setState({team,details});
                }
                else{
                    alert("Some error!");
                }
            })
        })
    }

    setModalCnt = (p) =>{
        // p["NAME"] = p.NAME.toUpperCase();
        p["tname"]=this.state.details.NAME;
        this.setState({modalCnt:p});
        document.getElementById("plr-mdl-bg").style.display = "block";
    }

    closePlrMdl = () =>{
        document.getElementById("plr-mdl-bg").style.display = "none";
    }

    render() { 
        let teamStyle={}
        switch(this.state.teamName){
            case 'RCB': teamStyle={background: 'linear-gradient(180deg, #000000 0%, #FF0000 100%)'};
                break;
            case 'SRH': teamStyle={background: 'linear-gradient(180deg, #000000 0%, #FFA500 100%)'};
                break;
            case 'CSK': teamStyle={background: 'linear-gradient(180deg, #01579b 0%, #FFFF00 100%)'};
                break;
            case 'DC': teamStyle={background: 'linear-gradient(180deg, #01579b 0%, #FFFFFF 100%)'};
                break;
            case 'RR': teamStyle={background: 'linear-gradient(180deg, #0000FF 0%, #FFC0CB 100%)'};
                break;
            case 'KKR': teamStyle={background: 'linear-gradient(180deg, #4B0082 0%, #FFD700 100%)'};
                break;
            case 'KXIP': teamStyle={background: 'linear-gradient(180deg, #FF0000 0%, #FFFFFF 100%)'};
                break;
            case 'MI': teamStyle={background: 'linear-gradient(180deg, #01579b 0%, #40c4ff 100%)'};
                break;
        }

        return ( 
            <div id="team-bg-card" style={teamStyle}>
                <div id="team-main-card">
                    <div id="team-details">
                        <img src={`/IPL/${this.state.teamName}.png`} />
                        <div id="team-desc">
                            <div id="team-name">{this.state.details.NAME}</div>
                            <div className="team-details">Home Ground: {this.state.details.VENUE}</div>
                            <div className="team-details">Owner: {this.state.details.OWNER}</div>
                            <div className="team-details">Captain: {this.state.details.CAPTAIN}</div>
                            <div className="team-details">Coach: {this.state.details.COACH}</div>
                            <div className="team-details">Winning Year: {this.state.details.WINNING_YEAR}</div>
                        </div>
                    </div>
                    <div id="players">
                        {this.state.team.map((p,i)=>{
                            return(<div key={i} className="player-card" onClick={() => this.setModalCnt(p)}>
                                <img src={`/IPL/${p.PLAYER_ID}.png`} />
                                <div className="card-player-name">{p.NAME}</div>
                            </div>)
                        })} 
                    </div>
                </div>
                <PlayerModal 
                    player={this.state.modalCnt}
                    closeMdl={this.closePlrMdl} 
                />
            </div>
        );
    }
}
 
export default Team;