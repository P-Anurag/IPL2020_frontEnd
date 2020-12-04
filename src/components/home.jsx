import React, { Component } from 'react';
import './home.css';
import Trophy from './photos/ipl_trophy.png';
import rcb from './photos/RCB.png'
import csk from './photos/CSK.png'
import dc from './photos/DC.jpg'
import kkr from './photos/KKR.png'
import kxip from './photos/KXIP.png'
import rr from './photos/RR.png'
import srh from './photos/SRH.png'
import mi from './photos/MI.png'




class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div className="home-bg">
                <div className="main-card">
                    <div className="team-card"><img className="team-img" src={srh} onClick={() => this.props.setTeam("SRH")}/></div>
                    <div className="team-card"><img className="team-img" src={mi} onClick={() => this.props.setTeam("MI")}/></div>
                    <div className="team-card"><img className="team-img" src={kxip} onClick={() => this.props.setTeam("KXIP")}/></div>
                    <div className="team-card"><img className="team-img" src={csk} onClick={() => this.props.setTeam("CSK")}/></div>
                    <div className="tr-card"><img id="trophy" src={Trophy}/></div>
                    <div className="team-card"><img className="team-img" src={dc} onClick={() => this.props.setTeam("DC")}/></div>
                    <div className="team-card"><img className="team-img" src={rcb} onClick={() => this.props.setTeam("RCB")}/></div>
                    <div className="team-card"><img className="team-img" src={rr} onClick={() => this.props.setTeam("RR")}/></div>
                    <div className="team-card"><img className="team-img" src={kkr} onClick={() => this.props.setTeam("KKR")}/></div>
                </div>
                
            </div>
        );
    }
}
 
export default Home;