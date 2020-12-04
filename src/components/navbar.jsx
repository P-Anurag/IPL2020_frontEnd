import React, { Component } from 'react';
import logo from './photos/logo.png';
import './navbar.css';

class Navbar extends Component {
    state = {  }

    searchMatches=(e)=>{
        let qs = e.target.value;
        if(!Number.isInteger(qs-'0') && qs.length%2==0){
            fetch(`http://localhost:3001/searchAutofill/${qs}`)
            .then(res => res.json())
            .then(res => this.setState({suggestions:res}))
        }
    }

    search = () =>{
        let playerName = document.getElementById("player-name").value;
        // console.log(playerName)
        fetch(`http://localhost:3001/playerDetails/${playerName}`)
        .then(res=>res.json())
        .then(res =>{
            // console.log(res);
            if(res=="No player"){
                alert("Player not in our database...")
            }
            else{
                this.props.setModalCnt(res);
            }
        })

    }
    render() { 
        return ( 
            <div id="navbar">
                <img src={logo} style={{width:'4.5em',height:'4em'}} alt="logo" onClick={()=>window.location.reload()} />
                <div id="title">IPL 2020 WEBSITE</div>
                {!this.props.team?
                    <span>
                        <div id="searchBox">
                            <input type="text" id="player-name" list="players" onChange={this.searchMatches} />
                            <button onClick={this.search}>Search</button> 
                        </div>
                        <datalist id="players">
                        {this.state.suggestions?
                            <div>
                                {this.state.suggestions.map((n,i)=>{
                                    return(<option key={i}>{n.NAME}</option>);
                                })}
                            </div>:<div></div>
                        }  
                        </datalist>
                    </span>:<div></div>
                }
            </div>
         );
    }
}
 
export default Navbar;