import { useState } from 'react'
import './App.css'
import ReactDragDropFilesNpm from './components/react-drag-drop-files-npm/react-drag-drop-files-npm.lazy'
import CustomDragDropFiles from './components/custom-drag-drop-files/custom-drag-drop-files.lazy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReactDragDropFilesNpm/>
      <CustomDragDropFiles/>
    </div>
  )
}

export default App
