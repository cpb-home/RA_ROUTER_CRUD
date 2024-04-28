import React, { useEffect, useState } from "react"
import Button from "../ui/Button/Button"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [postText, setPostText] = useState<string>('');
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (postText === '') {
      setError('Введите текст для отправки');
    } else {
      setError('');
    }
  }, [postText])

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
    
  }

  const handlerClickAdd = () => {
    if (postText !== '') {
      setError('');
      fetch('http://localhost:7030/posts', {
        method: 'POST',
        body: JSON.stringify({
          id: 0,
          content: postText,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(res => res.status)
      .then(() => navigate('/'))
      .catch(e => console.log('Упс, снова ошибка: ' + e))
    } else {
      setError('Введите текст для отправки');
    }
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
          <textarea onChange={changeHandler} value={postText}></textarea><br />
          <div className="errorDiv">{error}</div>
        </div>
        <div className="createPostTypes__btnCont">
          <Button color="blue" text="Опубликовать" handleClick={handlerClickAdd} />
        </div>
      </article>
    </div>
  )
}

export default CreatePost
