import React, { useState } from "react"
import Button from "../ui/Button/Button"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [postText, setPostText] = useState<string>('');
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  }

  const handlerClickAdd = () => {
    console.log(1);
  }

  const handlerClickBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='createPostCont'>
      <article className="article">
        <a className="createPostCont__close" onClick={handlerClickBack}></a>
        <div className="createPostTypes__List">
          <span>Публикация</span>
          <span>Фото/видео</span>
          <span>Прямой эфир</span>
          <span>Ещё...</span>
        </div>
        <div className="createPostTypes__textCont">
          <textarea onChange={changeHandler} value={postText}></textarea>
        </div>
        <div className="createPostTypes__btnCont">
          <Button color="blue" text="Опубликовать" handleClick={handlerClickAdd} />
        </div>
      </article>
    </div>
  )
}

export default CreatePost
