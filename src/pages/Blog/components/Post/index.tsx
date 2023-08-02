import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import * as C from './styled'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <C.Container to={`/post/${post.number}`}>
      <C.PostInfo>
        <h3 className="post-title">{post.title}</h3>
        <span className="post-date">{formattedDate}</span>
      </C.PostInfo>

      <C.PostDesc>{post.body}</C.PostDesc>
    </C.Container>
  )
}
