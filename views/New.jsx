import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>Add new log</h1>
        <form action="/logs" method="POST">
            Title: <input type="text" name='title'/> <br/>
            Entry: <input type='textarea' name='entry'/> <br/>
            Is ship broken: <input type='checkbox' name='shipIsBroken'/> <br/>
            <input type='submit' value='Submit Log'/>
        </form>
      </div>
    )
  }
}

module.export = New;