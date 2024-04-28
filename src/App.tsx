import './App.css'
import { Route, Routes } from "react-router-dom"
import Posts from "./pages/Posts"
import CreatePost from './pages/CreatePost'
import Card from './pages/Card'
import ChangePage from './pages/ChangePage'

function App() {

  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="/" element={<Posts />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id" element={<Card />} />
      <Route path="/posts/change/:id" element={<ChangePage />} />
    </Routes>
  )
}

export default App
