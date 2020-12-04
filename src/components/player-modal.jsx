import React, { Component } from 'react';
import './player-modal.css';

class PlayerModal extends Component {
    state = {  }
    render() { 
        let p =this.props.player;
        // console.log(p); 
        return ( 
            
            <div id="plr-mdl-bg">
                {p?
                (<div id="plr-mdl-cnt">
                    <div id="plr-inner">
                        <img src={`/IPL/${p.PLAYER_ID}.png`} />
                        <div><b>{p.NAME}</b></div>
                        <div id="plr-desc">
                            <div><b>Team :</b>{p.tname} </div>
                            <div><b>Nationality :</b>{p.NATIONALITY}</div>
                            <div><b>Matches :</b>{p.MATCHES} </div>
                            <div><b>Runs :</b>{p.RUNS} </div>
                            <div><b>Wickets :</b>{p.WICKETS} </div>
                            <div><b>Batting Style :</b>{p.BATTING_STYLE} </div>
                            <div><b>Bowling Style :</b>{p.BOWLING_STYLE} </div>
                        </div>
                        <button id="close-plr-mdl" onClick={this.props.closeMdl}>OK</button>
                    </div>
                </div>):<div></div>
                }
            </div>
        );
        
    }
}
 
export default PlayerModal;