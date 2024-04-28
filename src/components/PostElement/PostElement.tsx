import style from './postElement.module.css'
import { IPostElement } from '../../models/interfaces'
import { Link } from 'react-router-dom'

const PostElement = ({ content, created, id }: IPostElement) => {
  return (
    <article className='article'>
      <div className="postElemCont">
        <header className={style["header"]}>
          <div className={style["header__collapser"]}>\/</div>
          <div className={style["header-cont"]}>
            <div className={style["header__imgCont"]}>
              <img src="https://avatars.mds.yandex.net/i?id=8596b6e3b55cce651c2a9c8f31aed0fd309e1d51-9144721-images-thumbs&n=13" alt="" />
            </div>
            <div className={style["header__contentCont"]}>
              <div className={style["header__name"]}>
                Юзернейм ЮзерФэмилиНеймов
              </div>
              <div className={style["header__rank"]}>
                Хозяин группы. <span>{created}</span>
              </div>
            </div>
          </div>
        </header>
        <div className={style["postContentCont"]}>
          <Link to={`/posts/${id}`}><h3>{content}</h3></Link>
          <div className={style["buttons"]}><a href="#">Нравится</a><a href="#">Комментировать</a></div>
        </div>
        <footer className={style["footer"]}>
          <div className={style["footer__imgCont"]}>
            <img src="https://avatars.mds.yandex.net/i?id=8596b6e3b55cce651c2a9c8f31aed0fd309e1d51-9144721-images-thumbs&n=13" alt="" />
          </div>
          <div className={style["footer__inputCont"]}>
            <input name="comment" />
          </div>
        </footer>
      </div>
    </article>
  )
}

export default PostElement
