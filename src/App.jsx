import { useState } from 'react'
import './App.css'
import menu from './data/data'
import Menu from './components/menu'

function App() {

  const [list, setList] = useState(menu)
  const OriginalList = menu
  function filterCotegory(category) {

    if (category === "all") {
      setList(OriginalList)
    }
    else {
      const breakfast = list.filter(item => item.category === category)
      setList(breakfast)
    }

  }

  return (
    <div>
      <div className='container'>
        <h1>Our Menu</h1>
        <button onClick={() => filterCotegory("all")}>All</button>
        <button onClick={() => filterCotegory("breakfast")}>Breackfast</button>
      </div>
      <Menu list={list} setList={setList} />
    </div>
  )
}

export default App
