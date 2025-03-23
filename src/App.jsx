import React, { useState } from 'react'
import Search from './components/search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src="hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy </h1>
          <h2 className='text-center'>Without The Hassle</h2>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App