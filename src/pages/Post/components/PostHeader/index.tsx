import { AiFillGithub } from 'react-icons/ai'
import {
  BsBoxArrowUpRight,
  BsChevronLeft,
  BsFillBuildingFill,
  BsPeopleFill,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { IPost } from '../../../Blog'
import * as C from './styled'

interface PostHeaderProps {
  postData: IPost
}

export function PostHeader({ postData }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <C.PostContainer>
      <C.PostContent>
        <div className="post-name">
          <Link to="/">
            <BsChevronLeft />
            <span>Voltar</span>
          </Link>
          <Link to={postData.html_url} target="_blank">
            <span>Ver no GitHub</span>
            <BsBoxArrowUpRight />
          </Link>
        </div>

        <h2>{postData.title}</h2>

        <div className="post-info">
          <span className="info-github">
            <AiFillGithub />
            {postData.user.login}
          </span>
          <span className="info-org">
            <BsFillBuildingFill />
            {formattedDate}
          </span>
          <span className="info-followers">
            <BsPeopleFill />
            {postData.comments} comentarios
          </span>
        </div>
      </C.PostContent>
    </C.PostContainer>
  )
}
