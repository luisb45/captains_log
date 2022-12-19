import React, { Component } from 'react'

const h1Style = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey',
    border: '5px solid blue',
    fontSize: '50px',
    fontFamily: 'monospace'
}

const listStyle = {
    textAlign: 'center',
    color: 'silver',
    fontFamily: 'monospace',
    fontSize: '20px',
    marginBottom: '20px',
    backgroundColor: 'midnightblue',
    border: '2px solid white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
};

const backStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    fontFamily: 'monospace',
    float: 'left',
  }

export default class Show extends Component {
  render() {
    return (
      <div>
        <body style={{backgroundColor: 'black'}}>
        <h1 style={h1Style}>Captains Log</h1>
        <a style={backStyle} href={'/logs'}>Go back</a>
        <div style={listStyle}>
            <h2 style={{color: 'white'}}>Title: {this.props.logs.title}</h2>
            <p>Entry: {this.props.logs.entry}</p>
            <p>Ship status: {this.props.logs.shipIsBroken ? 'Ship is broken!' : 'Ship is fine'}</p>
            <a style={{color: 'white'}} href={`/logs/${this.props.logs._id}/edit`}>Edit log</a>
        </div>
        </body>
      </div>
    )
  }
}

module.exports = Show;