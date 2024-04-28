import styles from './changeCard.module.css'
import { useNavigate } from "react-router-dom";
import { Iid } from "../PostCard/PostCard";
import Button from '../../ui/Button/Button';
import React, { useEffect, useState } from 'react';

const ChangeCard = ({ id }: Iid) => {
  const [postText, setPostText] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7030/posts/' + id)
    .then(res => res.json())
    .then(result => setPostText(result.post.content))
    .catch(e => console.log('Ошика при получении поста: ' + e))
  }, []);

  const handlerClickBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  }

  const handlerChange = () => {
    fetch('http://localhost:7030/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        content: postText,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.status)
    .then(() => navigate('/'))
    .catch(e => console.log('Упс, снова ошибка: ' + e))
  }

  const formChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  }

  return (
    <article className='article'>
      <header className={styles["header"]}>
        <a className="createPostCont__close" onClick={handlerClickBack}></a>
        <div className={styles['headerText']}>Изменение публикации</div>
      </header>
      <div className={styles['areaCont']}>
        <textarea onChange={formChangeHandler} value={postText} autoFocus></textarea>
      </div>
      <div className="createPostTypes__btnCont">
        <Button color="blue" text="Сохранить изменения" handleClick={handlerChange} />
      </div>
    </article>
  )
}

export default ChangeCard
