// @flow

import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'

type Props = {
}

class App extends Component<Props> {
  render () {
    return (
      <div className='App'>
        <Button type='primary'>Button</Button>
      </div>
    )
  }
}

export default App
