import './App.css'
import { Route, Routes } from "react-router-dom"
import Posts from "./pages/Posts"
import CreatePost from './pages/CreatePost'
import Card from './pages/Card'

function App() {

  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="/" element={<Posts />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id" element={<Card />} />
    </Routes>
  )
}

export default App
