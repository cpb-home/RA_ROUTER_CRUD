import Button from "../../ui/Button/Button"
import { useNavigate } from 'react-router-dom'


const AddElement = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/posts/new');

  }

  return (
    <article className='article'>
      <div className="addElemContainer">
        <Button text="Создать пост" color="blue" handleClick={clickHandler} />
      </div>
    </article>
  )
}

export default AddElement
