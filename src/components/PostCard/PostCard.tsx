import style from './postCard.module.css'
import { IPostElement } from '../../models/interfaces';
import { useEffect, useState } from 'react';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

export interface Iid {
  id: number;
}

const PostCard = ({ id }: Iid) => {
  const [postInfo, setPostInfo] = useState<IPostElement>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7030/posts/' + id)
    .then(res => res.json())
    .then(result => setPostInfo(result.post))
    .catch(e => console.log('Ошика при получении поста: ' + e))
  }, []);

  const handlerClickBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  }

  const handelerDeletePost = () => {
    fetch('http://localhost:7030/posts/' + id, {
      method: 'DELETE'
    }).then(() => navigate('/'))
    .catch(e => 'При удалении возникла ошибка: ' + e)
  }

  const handelerChangePost = () => {
    navigate('/posts/change/' + id);
  }

  return (
    <article className='article'>
      <div className="postElemCont">
        <header className={style["header"]}>
          <a className="createPostCont__close" onClick={handlerClickBack}></a>
          <div className={style["header-cont"]}>
            <div className={style["header__imgCont"]}>
              <img src="https://avatars.mds.yandex.net/i?id=8596b6e3b55cce651c2a9c8f31aed0fd309e1d51-9144721-images-thumbs&n=13" alt="" />
            </div>
            <div className={style["header__contentCont"]}>
              <div className={style["header__name"]}>
                Юзернейм ЮзерФэмилиНеймов
              </div>
              <div className={style["header__rank"]}>
                Хозяин группы. <span>bcgbcvxv xcfvbcxvcv</span>
              </div>
            </div>
          </div>
        </header>
        <div className={style["postContentCont"]}>
          <h3>{postInfo?.content}</h3>
          <div className={style["buttons"]}><a href="#">Нравится</a><a href="#">Комментировать</a></div>
        </div>
        <footer className={style["footer"]}>
          <Button text='Изменить' color='blue' handleClick={handelerChangePost} />
          <Button text='Удалить' color='red' handleClick={handelerDeletePost} />
        </footer>
      </div>
    </article>
  )
}

export default PostCard
