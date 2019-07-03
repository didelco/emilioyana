import React, { useState } from 'react'
import { Root, Routes } from 'react-static'
import LangContext from './contexts/langContext'
import Header from './components/header'

import { Router } from 'components/Router'

import './app.css'

const App = () => {
  const [lang, setLang] = useState('es')

  const seti = d => setLang(d)

  return (
    <LangContext.Provider value={lang}>
      <Header seti={seti} />
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

export default App
