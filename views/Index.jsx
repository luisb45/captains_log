import React, { Component } from 'react'

const h1Style = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'grey',
  border: '5px solid blue',
  fontSize: '50px',
  fontFamily: 'monospace'
}

const background = {
  backgroundColor: 'black'
}

const listStyle = {
  color: 'silver',
  fontFamily: 'monospace',
  fontSize: '20px',
  marginBottom: '20px',
  backgroundColor: 'midnightblue',
  border: '2px solid white'
}

const newStyle = {
  textAlign: 'center',
  color: 'white',
  fontSize: '20px',
  fontFamily: 'monospace',
}

export default class Index extends Component {
  render() {
    const{logs} = this.props
    return (
      <div>
        <body style={background}>
        <h1 style={h1Style}>Captains log</h1>
        <a style={newStyle} href={'/logs/new'}>New Log</a>
        <ul>{
            logs.map((logs) => {
                return(
                    <div key='{id}'>
                        <li style={listStyle}>
                            <a style={{color: 'white'}} href={`/logs/${logs.id}`}>{logs.title}</a>
                            <p>{logs.entry}</p>
                            {logs.shipIsBroken? 'Ship is broken' : 'Ship is fine'}
                            <form action={`/logs/${logs.id}?_method=DELETE`} method="POST">
                              <input style={{float: 'right'}} type="submit" value="Delete"/>
                            </form>
                            
                        </li>
                    </div>
                )
            })
            }
        </ul>
        </body>
      </div>
    )
  }
}

module.export = Index;