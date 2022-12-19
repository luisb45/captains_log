import React, { Component } from 'react'


export default class Show extends Component {
  render() {
    const {logs} = this.props
    return (
      <div>
        <h1>Captains Log</h1>
        <h2>Title: {logs.title}</h2>
        <p>Entry: {logs.entry}</p>
        <p>Ship status: {logs.ShipIsBroken ? 'Ship is broken!' : 'Ship is fine'}</p>
        <a href={'/logs'}>Go back</a>
      </div>
    )
  }
}

module.exports = Show;