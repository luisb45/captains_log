import React, { Component } from 'react'

const editStyle = {
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
  
  const h1Style = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey',
    border: '5px solid blue',
    fontSize: '50px',
    fontFamily: 'monospace'
};

const backStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    fontFamily: 'monospace',
    float: 'left',
}

export default class Edit extends Component {
  render() {
    return (
      <div>
        <body style={{backgroundColor: 'black'}}>
        <h1 style={h1Style}>Edit log</h1>
        <a style={backStyle} href={'/logs/'}>Cancel</a>
        <div style={editStyle}>
        <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
            Title: <input type="text" name='title' defaultValue={this.props.logs.title}/> <br/>
            Entry: <input type='textarea' name='entry' defaultValue={this.props.logs.entry}/> <br/>
            Is ship broken: <input type='checkbox' name='shipIsBroken' defaultChecked/> <br/>
            <input type='submit' value='Submit Changes'/>
        </form>
        </div>
        </body>
      </div>
    )
  }
}

module.export = Edit;