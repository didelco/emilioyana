import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import LangContext from './contexts/langContext'
import Header from './components/header'

import { Router } from 'components/Router'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, lang: 'es', menu: false }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.seti = this.seti.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ ...this.state, width: window.innerWidth })
  }

  seti(d) {
    this.setState({ ...this.state, lang: d })
  }

  toggleMenu() {
    this.setState((prevState, props) => ({ ...this.state, menu: !prevState.menu }))
  }
  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <Header seti={this.seti} lang={this.state.lang} menu={this.state.menu} toggleMenu={this.toggleMenu} width={this.state.width} />
        <Root>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Root>
      </LangContext.Provider>
    )
  }
}

export default App

//        {//window.innerWidth < 1000 ? <HeaderMob seti={this.seti} /> : <Header seti={this.seti} />}
