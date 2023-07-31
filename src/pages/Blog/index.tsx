import * as C from './styled'

import { SearchInput } from '../../components/SearchInput'
import { Post } from './components/Post'
import { Profile } from './components/Profile/index'

export function Blog() {
  return (
    <C.Container>
      <header></header>
      <C.ContentContainer>
        <Profile />
        <SearchInput />

        <C.PostsContainer>
          <Post />
          <Post />
          <Post />
        </C.PostsContainer>
      </C.ContentContainer>
    </C.Container>
  )
}
