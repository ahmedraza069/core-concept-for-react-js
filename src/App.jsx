
import './App.css'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
function handleClicked(){
  alert('Normal function clicked')
}
const handleClickedTwo = () =>{
  alert('Arrow function clicked')
}

const addToFive = (num) => {
  alert(num + 5)
}
  return (
    <>
      <h3>React Core Concept</h3>

    <Friends></Friends>




      <User></User>

    <Team></Team>

      <button onClick={handleClicked}>click</button>
      <button onClick={handleClickedTwo}>Click Two</button>
      <button onClick={() => alert('clicked me')}>Clicked Three</button>
    <button onClick={() => addToFive(5)}>AddToFive </button>

    </>
  )
}

export default App
