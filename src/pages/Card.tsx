import { useParams } from "react-router-dom"
import PostCard from "../components/PostCard/PostCard"

const Card = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <PostCard id={Number(id)} />
    </div>
  )
}

export default Card
