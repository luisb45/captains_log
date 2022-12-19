import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const{logs} = this.props
    return (
      <div>
        <h1>Captains log</h1>
        <a href={'/logs/new'}>New Log</a>
        <ul>{
            logs.map((logs) => {
                return(
                    <div key='{id}'>
                        <li>
                            <a href={`/logs/${logs.id}`}>{logs.title}</a>
                            <p>{logs.entry}</p>
                            {logs.shipIsBroken? 'Ship is broken' : 'Ship is fine'}
                            <form action={`/logs/${logs.id}?_method=DELETE`} method="POST">
                              <input type="submit" value="Delete"/>
                            </form>
                        </li>
                    </div>
                )
            })
            }
        </ul>
      </div>
    )
  }
}

module.export = Index;