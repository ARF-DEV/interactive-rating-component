import Ratings from "./components/ratings/ratings"
import Thanks from "./components/thanks/thanks";
import "./App.css"
import { useState } from "react"

function App() {
  const [page, setPage] = useState(0);
  const [points, setPoints] = useState(-1)
  return (
    <div className="App">
      {page === 0 ? <Ratings points={points} setPoints={setPoints} nextAction={() => {setPage(1)}}/> : <Thanks points={points}/>}
    </div>
  )
}
export default App
