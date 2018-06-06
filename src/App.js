// @flow

import React, { Component } from 'react'
import { Layout, List } from 'antd'
import './App.css'

const listItems = [
  {
    title: 'React project: Instagram feed',
    url: 'https://github.com/kennethnghk/instagram-feeder'
  }
]

type Props = {}

class App extends Component<Props> {
  render () {
    const { Header } = Layout
    return (
      <Layout>
        <Header>Kenlab.me</Header>
        <List
          bordered
          dataSource={listItems}
          renderItem={item => (
            <List.Item>
              <a href={item.url}>{item.title}</a>
            </List.Item>
          )}
        />
      </Layout>
    )
  }
}

export default App
