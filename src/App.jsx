import { HomeText } from '../components/HomeText'
import { ItemsSelector } from '../components/ItemsSelector'
import back from '/fondo.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="MainContainer">
        <div className="Container">
          <HomeText />
          <ItemsSelector />
        </div>
      </div>
      <div className="Back">
        <img src={back} alt="HTML" />
      </div>
    </>
  )
}

export default App
