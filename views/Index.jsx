import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const{logs} = this.props
    return (
      <div>
        <h1>Captains log</h1>
        <ul>{
            logs.map((logs) => {
                return(
                    <div>
                        <li>
                            <a href={`/logs/${logs.id}`}>{logs.title}</a>
                            <p>{logs.entry}</p>
                            {logs.shipIsBroken? 'Ship is fine' : 'Ship is broken'}
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